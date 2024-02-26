import { useState } from 'react'
import Logo from './assets/xanhknen.png'
// import BackgroundImage from './assets/anhnen.png'
import BackgroundImage2 from './assets/bg2.jpg'
import TextInput from './textInput'
import Select from 'react-select'

function App() {
  const dataMajors = [
    {
      name: 'Công nghệ phần mềm'
    },
    {
      name: 'Quản trị và an ninh mạng'
    },
    {
      name: 'Công nghệ Internet vạn vật (IOT)'
    },
    {
      name: 'Điện tử - Truyền thông'
    },
    {
      name: 'Điện tự động công nghiệp'
    },
    {
      name: 'Kỹ thuật môi trường và an toàn lao động'
    },
    {
      name: 'Quản lý tài nguyên và môi trường nước'
    },
    {
      name: 'Quản lý tài nguyên đất đai'
    },
    {
      name: 'Quản trị doanh nghiệp'
    },
    {
      name: 'Kế toán kiểm toán'
    },
    {
      name: 'Quản trị marketing'
    },
    {
      name: 'Quản trị logistics và chuỗi cung ứng'
    },
    {
      name: 'Ngôn ngữ Anh'
    },
    {
      name: 'Ngôn ngữ Anh - Hàn'
    },
    {
      name: 'Ngôn ngữ Anh - Trung'
    },
    {
      name: 'Ngôn ngữ Anh - Nhật'
    },
    {
      name: 'Văn hoá Du lịch'
    },
    {
      name: 'Quản trị du lịch'
    }

  ]
  const dataWhereInfoSchool = [
    {
      name: 'Website của nhà trường'
    },
    {
      name: 'Facebook'
    },
    {
      name: 'Tiktok'
    },
    {
      name: 'Người thân, bạn bè'
    },
    {
      name: 'Cựu sinh viên của Trường'
    },
    {
      name: 'Sinh viên đang học tại Trường'
    },
    {
      name: 'Kênh khác'
    }

  ]
  const dataAdmissionMethod = [
    {
      name: 'Xét theo học bạ THPT'
    },
    {
      name: 'Xét kết hợp chứng chỉ tiếng Anh quốc tế với kết quả thi tốt nghiệp THPT năm 2024'
    },
    {
      name: 'Xét theo kết quả kỳ thi tốt nghiệp THPT 2024'
    }
  ]

  const dataCategory = [
    {
      name: 'Tốt nghiệp THPT năm 2024'
    },
    {
      name: 'Thí sinh tự do'
    }
  ]
  //const backgroundImageUrl = `url(${BackgroundImage})`
  const backgroundImageUrl = `url(${BackgroundImage2})`
  // Chuyên ngành đăng ký xét tuyển
  const [majorsRadio, setMajorsRadio] = useState(0)
  // Phương thức đăng ký xét tuyển
  const [admissionMethodRadio, setAdmissionMethodRadio] = useState(0)
  // Em là thí sinh
  const [categoryRadio, setCategoryRadio] = useState(0)
  // Em biết thông tin cuẩ trường qua đâu
  const [whereInfoSchoolCheckbox, setWhereInfoSchoolCheckbox] = useState([])

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [province, setProvince] = useState()
  const [infor, setInfor] = useState({
    // Thông tin cá nhân
    email: "",
    name: "",
    phoneNumber: "",
    // province: "",
    school: "",
    // Thông tin điểm số
    toan12hk1: "",
    ly12hk1: "",
    hoa12hk1: "",
    sinh12hk1: "",
    van12hk1: "",
    su12hk1: "",
    dia12hk1: "",
    ta12hk1: "",
    gdcd12hk1: "",

    toan12hk2: "",
    ly12hk2: "",
    hoa12hk2: "",
    sinh12hk2: "",
    van12hk2: "",
    su12hk2: "",
    dia12hk2: "",
    ta12hk2: "",
    gdcd12hk2: ""
  })

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

  const handleSubmit = (e) => {
    e.preventDefault()
    const newData = {
      email: infor.email,
      name: infor.name,
      phoneNumber: infor.phoneNumber,
      school: infor.school,
      // Điểm số HK1
      toan12hk1: infor.toan12hk1,
      ly12hk1: infor.ly12hk1,
      hoa12hk1: infor.hoa12hk1,
      sinh12hk1: infor.sinh12hk1,
      van12hk1: infor.van12hk1,
      su12hk1: infor.su12hk1,
      dia12hk1: infor.dia12hk1,
      ta12hk1: infor.ta12hk1,
      gdcd12hk1: infor.gdcd12hk1,
      // Điểm số HK2
      toan12hk2: infor.toan12hk2,
      ly12hk2: infor.ly12hk2,
      hoa12hk2: infor.hoa12hk2,
      sinh12hk2: infor.sinh12hk2,
      van12hk2: infor.van12hk2,
      su12hk2: infor.su12hk2,
      dia12hk2: infor.dia12hk2,
      ta12hk2: infor.ta12hk2,
      gdcd12hk2: infor.gdcd12hk2,
      majors: majorsRadio,
      admissionMethod: admissionMethodRadio,
      category: categoryRadio,
      whereInfoSchool: whereInfoSchoolCheckbox
    }
    console.log(newData)
  }

  return (
    <>
      <div
        className="h-[100vh] bg-cover bg-center bg-fixed pb-[20px]"
        style={{ backgroundImage: backgroundImageUrl }}
      >
        <div className='flex flex-col w-full h-full items-center overflow-y-auto'>
          <img
            src={Logo}
            alt="logo"
            className="w-[70%] sm:w-[60%] md:w-1/3 lg:w-1/4 object-contain my-[20px] sm:my-[40px]"
          />
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold text-primary mb-[40px]">
            XẾP HẠNG HỌC SINH THPT 2024
          </h1>
          <form onSubmit={handleSubmit} className='w-[95%] sm:w-[90%] md:w-[85%] lg:w-[70%] xl:w-[80%] opacity-[97%]'>
            <div className="flex flex-col items-center border-solid border-2 border-neutral-300 rounded-lg p-[10px] md:p-[20px] bg-white bg-opacity-90">
              {/* Thông tin cá nhân */}
              <div className='w-full flex flex-col items-center'>
                <h3 className="text-xl sm:text-2xl font-semibold py-[20px] text-primary">
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
                    // options={provinces.result.map((item) => ({
                    //   value: item.code,
                    //   label: item.name,
                    // }))}
                    value={province}
                    onChange={setProvince}
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
              {/* Thông tin điểm số trung bình lớp 12 hk1*/}
              <div className="w-full flex flex-col items-center">
                <h3 className="text-xl sm:text-2xl font-semibold py-[20px] text-primary">
                  Điểm trung bình lớp 12 (HK1)
                </h3>
                {/* Điểm trung bình học kì 1 lớp 12 */}
                <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-[20px]">
                  <TextInput
                    type={'number'}
                    label={"Toán"}
                    value={infor.toan12hk1}
                    onChange={(e) => setInfor({ ...infor, toan12hk1: e.target.value })}
                    id={"add_toan12hk1"}
                    min={'0'}
                    max={'10'}
                    require

                  />
                  <TextInput
                    type={'number'}
                    label={"Lý"}
                    value={infor.ly12hk1}
                    onChange={(e) => setInfor({ ...infor, ly12hk1: e.target.value })}
                    id={"add_ly12hk1"}
                    min={'0'}
                    max={'10'}
                    require

                  />
                  <TextInput
                    type={'number'}
                    label={"Hoá"}
                    value={infor.hoa12hk1}
                    onChange={(e) => setInfor({ ...infor, hoa12hk1: e.target.value })}
                    id={"add_hoa12hk1"}
                    min={'0'}
                    max={'10'}
                    require

                  />
                  <TextInput
                    type={'number'}
                    label={"Sinh"}
                    value={infor.sinh12hk1}
                    onChange={(e) => setInfor({ ...infor, sinh12hk1: e.target.value })}
                    id={"add_sinh12hk1"}
                    min={'0'}
                    max={'10'}
                    require

                  />
                  <TextInput
                    type={'number'}
                    label={"Văn"}
                    value={infor.van12hk1}
                    onChange={(e) => setInfor({ ...infor, van12hk1: e.target.value })}
                    id={"add_van12hk1"}
                    min={'0'}
                    max={'10'}
                    require

                  />
                  <TextInput
                    type={'number'}
                    label={"Sử"}
                    value={infor.su12hk1}
                    onChange={(e) => setInfor({ ...infor, su12hk1: e.target.value })}
                    id={"add_su12hk1"}
                    min={'0'}
                    max={'10'}
                    require

                  />
                  <TextInput
                    type={'number'}
                    label={"Địa"}
                    value={infor.dia12hk1}
                    onChange={(e) => setInfor({ ...infor, dia12hk1: e.target.value })}
                    id={"add_dia12hk1"}
                    min={'0'}
                    max={'10'}
                    require

                  />
                  <TextInput
                    type={'number'}
                    label={"Tiếng Anh"}
                    value={infor.ta12hk1}
                    onChange={(e) => setInfor({ ...infor, ta12hk1: e.target.value })}
                    id={"add_ta12hk1"}
                    min={'0'}
                    max={'10'}
                    require

                  />
                  <TextInput
                    type={'number'}
                    label={"Giáo dục công dân"}
                    value={infor.gdcd12hk1}
                    onChange={(e) => setInfor({ ...infor, gdcd12hk1: e.target.value })}
                    id={"add_gdcd12hk1"}
                    min={'0'}
                    max={'10'}
                    require
                  />
                </div>
              </div>
              {/* Thông tin điểm số trung bình lớp 12 hk2*/}
              <div className="w-full flex flex-col items-center">
                <h3 className="text-xl sm:text-2xl font-semibold py-[20px] text-primary">
                  Điểm trung bình lớp 12 (HK2)
                </h3>
                {/* Điểm trung bình học kì 1 lớp 12 */}
                <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-[20px]">
                  <TextInput
                    type={'number'}
                    label={"Toán"}
                    value={infor.toan12hk2}
                    onChange={(e) => setInfor({ ...infor, toan12hk2: e.target.value })}
                    id={"add_toan12hk2"}
                    min={'0'}
                    max={'10'}
                    require

                  />
                  <TextInput
                    type={'number'}
                    label={"Lý"}
                    value={infor.ly12hk2}
                    onChange={(e) => setInfor({ ...infor, ly12hk2: e.target.value })}
                    id={"add_ly12hk2"}
                    min={'0'}
                    max={'10'}
                    require

                  />
                  <TextInput
                    type={'number'}
                    label={"Hoá"}
                    value={infor.hoa12hk2}
                    onChange={(e) => setInfor({ ...infor, hoa12hk2: e.target.value })}
                    id={"add_hoa12hk2"}
                    min={'0'}
                    max={'10'}
                    require

                  />
                  <TextInput
                    type={'number'}
                    label={"Sinh"}
                    value={infor.sinh12hk2}
                    onChange={(e) => setInfor({ ...infor, sinh12hk2: e.target.value })}
                    id={"add_sinh12hk2"}
                    min={'0'}
                    max={'10'}
                    require

                  />
                  <TextInput
                    label={"Văn"}
                    value={infor.van12hk2}
                    onChange={(e) => setInfor({ ...infor, van12hk2: e.target.value })}
                    id={"add_van12hk2"}
                    min={'0'}
                    max={'10'}
                    require

                  />
                  <TextInput
                    type={'number'}
                    label={"Sử"}
                    value={infor.su12hk2}
                    onChange={(e) => setInfor({ ...infor, su12hk2: e.target.value })}
                    id={"add_su12hk2"}
                    min={'0'}
                    max={'10'}
                    require

                  />
                  <TextInput
                    type={'number'}
                    label={"Địa"}
                    value={infor.dia12hk2}
                    onChange={(e) => setInfor({ ...infor, dia12hk2: e.target.value })}
                    id={"add_dia12hk2"}
                    min={'0'}
                    max={'10'}
                    require

                  />
                  <TextInput
                    type={'number'}
                    label={"Tiếng Anh"}
                    value={infor.ta12hk2}
                    onChange={(e) => setInfor({ ...infor, ta12hk2: e.target.value })}
                    id={"add_ta12hk2"}
                    min={'0'}
                    max={'10'}
                    require

                  />
                  <TextInput
                    type={'number'}
                    label={"Giáo dục công dân"}
                    value={infor.gdcd12hk2}
                    onChange={(e) => setInfor({ ...infor, gdcd12hk2: e.target.value })}
                    id={"add_gdcd12hk2"}
                    min={'0'}
                    max={'10'}
                    require
                  />
                </div>
              </div>
              {/* Chuyên ngành đăng ký xét tuyển */}
              <div className='w-full flex flex-col xl:items-center select-none' >
                <h3 className="text-xl sm:text-2xl font-semibold py-[20px] text-center text-primary">
                  Chuyên ngành đăng ký xét tuyển
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 text-gray-500'>
                  {dataMajors.map((i, ind) => (
                    <div key={ind} className={`flex items-center gap-2 py-1 my-2 cursor-pointer hover:text-primary ${ind === majorsRadio ? 'text-primary' : ''} duration-200`}>
                      <input
                        className='w-4 h-4'
                        type="radio"
                        name={i.name}
                        checked={majorsRadio === ind}
                        id={ind}
                        onChange={() => setMajorsRadio(ind)}
                      />
                      <label className='sm:text-lg font-medium cursor-pointer' htmlFor={ind}>{i.name}</label>
                    </div>
                  ))}
                </div>
                <span className='block w-[70%] h-[1px] bg-primary mx-auto mt-5'></span>
              </div>
              {/* Phương thức đăng ký xét tuyển */}
              <div className='w-full flex flex-col xl:items-center select-none'>
                <h3 className="text-xl sm:text-2xl font-semibold py-[20px] text-center text-primary">
                  Phương thức đăng ký xét tuyển
                </h3>
                <div className='text-gray-500'>
                  {dataAdmissionMethod.map((i, ind) => (
                    <div key={ind} className={`flex items-center gap-2 py-1 my-2 cursor-pointer hover:text-primary ${ind === admissionMethodRadio ? 'text-primary' : ''} duration-200`}>
                      <input className='w-4 h-4' type="radio" name={i.name} id={i.name}
                        checked={ind === admissionMethodRadio}
                        onChange={() => setAdmissionMethodRadio(ind)}
                      />
                      <label className='sm:text-lg font-medium cursor-pointer' htmlFor={i.name}>{i.name}</label>
                    </div>
                  ))}
                </div>
                <span className='block w-[70%] h-[1px] bg-primary mx-auto mt-5'></span>
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
              {/* Em biết thông tin của Trường qua đâu? */}
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
              <button
                className="bg-primary text-white px-4 py-2 mt-3 rounded-md hover:bg-blue-600 focus:outline-none"
                type='submit'
              >
                Hoàn thành
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App
