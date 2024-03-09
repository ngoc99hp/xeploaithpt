import { useState, useEffect } from 'react'
import TextInput from '../textInput'
import ModalNotifiEmail from './ModalNotifiEmail'
import ModalNotifiError from './ModalNotifiError'
import Select from 'react-select'
import { getProvinceApi, insertDataApi } from "../api/index"
import { useDispatch, useSelector } from "react-redux"


const ModalInfoPersonal = (props) => {
  const { setIsModalInfoPersonal } = props
  const infoPoint = useSelector((state) => state.infoPoint.currentData)


  const dataCategory = [
    {
      name: "Tốt nghiệp THPT năm 2024"
    },
    {
      name: "Thí sinh tự do"
    }
  ]
  const dataWhereInfoSchool = [
    {
      name: "Website của nhà trường"
    },
    {
      name: "Facebook"
    },
    {
      name: "Tiktok"
    },
    {
      name: "Người thân, bạn bè"
    },
    {
      name: "Cựu sinh viên của Trường"
    },
    {
      name: "Sinh viên đang học tại Trường"
    },
    {
      name: "Ngày hội hướng ngiệp 2024"
    },
    {
      name: "Kênh khác"
    }
  ]
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [infor, setInfor] = useState({
    // Thông tin cá nhân
    email: "",
    name: "",
    phoneNumber: "",
    province: "",
    school: ""
  })
  // Em là thí sinh
  const [categoryRadio, setCategoryRadio] = useState(0)
  // Em biết thông tin cuẩ trường qua đâu
  const [whereInfoSchoolCheckbox, setWhereInfoSchoolCheckbox] = useState([])
  const [province, setProvince] = useState("")
  const [provinces, setProvinces] = useState([])
  const [isModalNotifiEmail, setIsModalNotifiEmail] = useState(false)


  useEffect(() => {
    getProvinceApi()
      .then((res) => setProvinces(res.result))
  }, [])

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

  console.log(province)

  const handleSubmit =async (e) => {
    e.preventDefault()
    setLoading(true)
    const objects = {
      name: infor.name,
      phone: infor.phoneNumber,
      province_code: province?.value,
      email: infor.email,
      school: infor.school,
      type_id: categoryRadio + 1,
      major_id: infoPoint.idChuyenNganh,
      scores: {
        data: [
          {
            subject_id: 1,
            batch_id: 1,
            score: +infoPoint.point.toan.diemhk1
          },
          {
            subject_id: 1,
            batch_id: 2,
            score: +infoPoint.point.toan.diemhk2
          },
          {
            subject_id: 2,
            batch_id: 1,
            score: +infoPoint.point.ly.diemhk1
          },
          {
            subject_id: 2,
            batch_id: 2,
            score: +infoPoint.point.ly.diemhk2
          },
          {
            subject_id: 3,
            batch_id: 1,
            score: +infoPoint.point.hoa.diemhk1
          },
          {
            subject_id: 3,
            batch_id: 2,
            score: +infoPoint.point.hoa.diemhk2
          },
          {
            subject_id: 4,
            batch_id: 1,
            score: +infoPoint.point.sinh.diemhk1
          },
          {
            subject_id: 4,
            batch_id: 2,
            score: +infoPoint.point.sinh.diemhk2
          },
          {
            subject_id: 5,
            batch_id: 1,
            score: +infoPoint.point.van.diemhk1
          },
          {
            subject_id: 5,
            batch_id: 2,
            score: +infoPoint.point.van.diemhk2
          },
          {
            subject_id: 6,
            batch_id: 1,
            score: +infoPoint.point.su.diemhk1
          },
          {
            subject_id: 6,
            batch_id: 2,
            score: +infoPoint.point.su.diemhk2
          },
          {
            subject_id: 7,
            batch_id: 1,
            score: +infoPoint.point.dia.diemhk1
          },
          {
            subject_id: 7,
            batch_id: 2,
            score: +infoPoint.point.dia.diemhk2
          },
          {
            subject_id: 8,
            batch_id: 1,
            score: +infoPoint.point.ta.diemhk1
          },
          {
            subject_id: 8,
            batch_id: 2,
            score: +infoPoint.point.ta.diemhk2
          },
          {
            subject_id: 9,
            batch_id: 1,
            score: +infoPoint.point.gdcd.diemhk1
          },
          {
            subject_id: 9,
            batch_id: 2,
            score: +infoPoint.point.gdcd.diemhk2
          }
        ]
      }
    }
    insertDataApi(objects)
      .then(() => setIsModalNotifiEmail(true))
      .catch(() => setError(true))
    await setLoading(false)
    console.log(objects)

  }
  return (
    <>
      <div id="static-modal" data-modal-backdrop="static" tabIndex="-1" aria-hidden="true" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 px-2 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-[#1e1e1e6f]">
        <form onSubmit={handleSubmit} className='relative top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full md:max-w-[90%] xl:max-w-[70%] max-h-full'>
          <div className="">
            {/* <!-- Modal content --> */}
            <div className="relative w-full p-5 bg-white rounded-lg shadow">
              <button onClick={() => setIsModalInfoPersonal(false)} type="button" className="w-8 h-8 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm ms-auto flex justify-center items-center" data-modal-hide="default-modal">
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
                    options={provinces.map((item) => ({
                      value: item.code,
                      label: item.name
                    }))}
                    value={province}
                    onChange={setProvince}
                  />
                  <TextInput
                    require
                    type={"email"}
                    label={"Email"}
                    id={"Email"}
                    value={infor.email}
                    onChange={(e) => setInfor({ ...infor, email: e.target.value })}
                  />
                  <TextInput
                    require
                    type={"number"}
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
              {/* Button */}
              <div className='w-full  flex items-center justify-center mt-5'>
                {loading
                  ?
                  <button className='w-full sm:w-auto px-4 py-2 bg-[#0083C2] text-white rounded-md'>
                    <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                    </svg>
                    Đang hoàn thành...
                  </button>
                  :
                  <button type='submit' className='w-full sm:w-auto px-4 py-2 bg-primary text-white rounded-md dark:bg-primary/80 dark:hover:bg-primary'>Hoàn thành</button>
                }
              </div>
            </div>
          </div>
        </form>
      </div>
      {error && <ModalNotifiError setError = {setError}/>}
      {isModalNotifiEmail && <ModalNotifiEmail setIsModalNotifiEmail={setIsModalNotifiEmail}/>}
    </>
  )
}

export default ModalInfoPersonal