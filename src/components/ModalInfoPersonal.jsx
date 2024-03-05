import React from 'react'
import TextInput from '../textInput'
import Select from 'react-select'


const ModalInfoPersonal = (props) => {
  const { infor, setInfor, dataCategory, categoryRadio, setCategoryRadio, dataWhereInfoSchool, whereInfoSchoolCheckbox, setWhereInfoSchoolCheckbox } = props

  const handleCheckBox = (name) => {
    setWhereInfoSchoolCheckbox(prev => {
      const isChecked = whereInfoSchoolCheckbox.includes(name)
      if (isChecked) {
        return whereInfoSchoolCheckbox.filter(i => i !== name)
      } else {
        return [...prev, name]
      }
    })
  }
  return (
    <div id="static-modal" data-modal-backdrop="static" tabIndex="-1" aria-hidden="true" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-[#1e1e1e6f]">
      <div className="relative top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full max-w-[70%] max-h-full">
        {/* <!-- Modal content --> */}
        <div className="relative w-full p-5 bg-white rounded-lg shadow">
          <button type="button" className="w-8 h-8 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm ms-auto flex justify-center items-center" data-modal-hide="default-modal">
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
          </button>
          {/* Thông tin cá nhân */}
          <div className='w-full flex flex-col items-center'>
            <h3 className="text-xl sm:text-2xl font-semibold pb-[20px] text-primary">
              Thông tin cá nhân
            </h3>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-[20px]">
              <TextInput
                require
                label={"Họ và tên"}
                id={"Họ và tên"}
                value={infor.name}
                onChange ={(e) => setInfor({ ...infor, name: e.target.value })}
              />
              <Select
                placeholder="Tỉnh / Thành phố"
                className="text-black text-sm"
                classNames={{
                  control: () => "!rounded-[5px]",
                  input: () => "!pr-2.5 !pb-2.5 !pt-4 !m-0",
                  valueContainer: () => "!p-[0_8px]",
                  menu: () => "!z-[11]"
                }}
                // options={provinces.map((item) => ({
                //   value: item.province_code,
                //   label: item.province_name
                // }))}
                // value={province}
                // onChange={setProvince}
              />
              <TextInput
                require
                label={"Email"}
                id={"Email"}
                value={infor.email}
                onChange={(e) => setInfor({ ...infor, email: e.target.value })}
              />
              <TextInput
                require
                label={"Số điện thoại"}
                id={"Số điện thoại"}
                value={infor.phoneNumber}
                onChange={(e) => setInfor({ ...infor, phoneNumber: e.target.value })}
              />
              <TextInput
                require
                label={"Trường THPT"}
                id={"Trường THPT"}
                value={infor.school}
                onChange={(e) => setInfor({ ...infor, school: e.target.value })}
              />

            </div>
          </div>
          {/* Em là thí sinh */}
          <div className='w-full flex flex-col xl:items-center select-none'>
            <h3 className="text-xl sm:text-2xl font-semibold py-[20px] text-center text-primary">
              Em là thí sinh
            </h3>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-5 text-gray-500'>
              {dataCategory.map((i, ind) => (
                <div key={ind} className={`flex items-center gap-2 py-1 my-2 cursor-pointer hover:text-primary ${ind === categoryRadio ? 'text-primary' : ''} duration-200`}>
                  <input className='w-4 h-4' type="radio" name={i.name} id={i.name}
                    checked={ind === categoryRadio}
                    onChange={() => setCategoryRadio(ind)}
                  />
                  <label className='sm:text-lg font-medium cursor-pointer' htmlFor={i.name}>{i.name}</label>
                </div>
              ))}
            </div>
            <span className='block w-[70%] h-[1px] bg-primary mx-auto mt-5'></span>
          </div>
          {/* Em biết thông tin trường  qua đâu */}
          <div className='w-full flex flex-col xl:items-center select-none'>
            <h3 className="text-xl sm:text-2xl font-semibold py-[20px] text-center text-primary">
              Em biết thông tin của Trường qua đâu?
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 text-gray-500'>
              {dataWhereInfoSchool.map((i, ind) => (
                <div key={ind} className={`flex items-center gap-2 py-1 my-2 cursor-pointer hover:text-primary ${whereInfoSchoolCheckbox.includes(i.name) ? 'text-primary' : ''} duration-200`}>
                  <input
                    className='w-4 h-4'
                    type="checkbox" name={i.name} id={i.name}
                    checked={whereInfoSchoolCheckbox.includes(i.name)}
                    onChange={() => handleCheckBox(i.name)}
                  />
                  <label className='sm:text-lg font-medium cursor-pointer' htmlFor={i.name}>{i.name}</label>
                </div>
              ))}
            </div>
          </div>
          <div className='w-full flex items-center justify-center mt-5'>
            <button className='px-4 py-2 bg-[#0083C2] text-white rounded-md'>Hoàn thành</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalInfoPersonal