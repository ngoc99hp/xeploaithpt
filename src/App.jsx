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
  const [majorsRadio, setMajorsRadio] = useState(0)
  const [admissionMethodRadio, setAdmissionMethodRadio] = useState(0)
  const [categoryRadio, setCategoryRadio] = useState(0)
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
    toan12: "",
    ly12: "",
    hoa12: "",
    sinh12: "",
    van12: "",
    su12: "",
    dia12: "",
    ta12: "",
    gdcd12: ""
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
      toan12: infor.toan12,
      ly12: infor.ly12,
      hoa12: infor.hoa12,
      sinh12: infor.sinh12,
      van12: infor.van12,
      su12: infor.su12,
      dia12: infor.dia12,
      ta12: infor.ta12,
      gdcd12: infor.gdcd12,
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
        className="flex flex-col w-full h-full items-center bg-cover bg-center bg-fixed pb-[20px]"
        style={{ backgroundImage: backgroundImageUrl }}
      >
        <img
          src={Logo}
          alt="logo"
          className="w-[70%] sm:w-[60%] md:w-1/3 lg:w-1/4 object-contain my-[20px] sm:my-[40px]"
        />
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold text-primary mb-[40px]">
          XẾP HẠNG HỌC SINH THPT 2024
        </h1>
        <form onSubmit={handleSubmit} className='w-[95%] sm:w-[90%] md:w-[85%] lg:w-[70%] xl:w-[80%]'>
          <div className="flex flex-col items-center border-solid border-2 border-neutral-300 rounded-lg mx-[5px] p-[10px] md:p-[20px] bg-white bg-opacity-90">
            {/* Thông tin cá nhân */}
            <div className='w-full flex flex-col items-center'>
              <h3 className="text-2xl font-semibold py-[20px] text-primary">
                Thông tin cá nhân
              </h3>
              <div className="w-full grid grid-cols-3 gap-[20px]">
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
            {/* Thông tin điểm số*/}
            <div className="w-full flex flex-col items-center">
              <h3 className="text-2xl font-semibold py-[20px] text-primary">
                Điểm trung bình lớp 12 (HK1)
              </h3>
              {/* Điểm trung bình học kì 1 lớp 12 */}
              <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-[20px]">
                <TextInput
                  type={'number'}
                  label={"Toán"}
                  value={infor.toan12}
                  onChange={(e) => setInfor({ ...infor, toan12: e.target.value })}
                  id={"add_toan12"}
                  min={'0'}
                  max={'10'}
                  require

                />
                <TextInput
                  type={'number'}
                  label={"Lý"}
                  value={infor.ly12}
                  onChange={(e) => setInfor({ ...infor, ly12: e.target.value })}
                  id={"add_ly12"}
                  min={'0'}
                  max={'10'}
                  require

                />
                <TextInput
                  type={'number'}
                  label={"Hoá"}
                  value={infor.hoa12}
                  onChange={(e) => setInfor({ ...infor, hoa12: e.target.value })}
                  id={"add_hoa12"}
                  min={'0'}
                  max={'10'}
                  require

                />
                <TextInput
                  type={'number'}
                  label={"Sinh"}
                  value={infor.sinh12}
                  onChange={(e) => setInfor({ ...infor, sinh12: e.target.value })}
                  id={"add_sinh12"}
                  min={'0'}
                  max={'10'}
                  require

                />
                <TextInput
                  label={"Văn"}
                  value={infor.van12}
                  onChange={(e) => setInfor({ ...infor, van12: e.target.value })}
                  id={"add_van12"}
                  min={'0'}
                  max={'10'}
                  require

                />
                <TextInput
                  type={'number'}
                  label={"Sử"}
                  value={infor.su12}
                  onChange={(e) => setInfor({ ...infor, su12: e.target.value })}
                  id={"add_su12"}
                  min={'0'}
                  max={'10'}
                  require

                />
                <TextInput
                  type={'number'}
                  label={"Địa"}
                  value={infor.dia12}
                  onChange={(e) => setInfor({ ...infor, dia12: e.target.value })}
                  id={"add_dia12"}
                  min={'0'}
                  max={'10'}
                  require

                />
                <TextInput
                  type={'number'}
                  label={"Tiếng Anh"}
                  value={infor.ta12}
                  onChange={(e) => setInfor({ ...infor, ta12: e.target.value })}
                  id={"add_ta12"}
                  min={'0'}
                  max={'10'}
                  require

                />
                <TextInput
                  type={'number'}
                  label={"Giáo dục công dân"}
                  value={infor.gdcd12}
                  onChange={(e) => setInfor({ ...infor, gdcd12: e.target.value })}
                  id={"add_gdcd12"}
                  min={'0'}
                  max={'10'}
                  require
                />
              </div>
            </div>
            {/* Chuyên ngành đăng ký xét tuyển */}
            <div className='w-full flex flex-col items-center' >
              <h3 className="text-2xl font-semibold py-[20px] text-center text-primary">
                Chuyên ngành đăng ký xét tuyển
              </h3>
              <div className='grid grid-cols-3 gap-x-5 text-gray-500'>
                {dataMajors.map((i, ind) => (
                  <div key={ind} className='flex items-center gap-2 py-1 my-2 cursor-pointer hover:text-primary duration-200'>
                    <input
                      className='w-4 h-4'
                      type="radio"
                      name={i.name}
                      checked={majorsRadio === ind}
                      id={ind}
                      onChange={() => setMajorsRadio(ind)}
                    />
                    <label className='text-lg font-medium cursor-pointer' htmlFor={ind}>{i.name}</label>
                  </div>
                ))}
              </div>
              <span className='block w-[70%] h-[1px] bg-primary mx-auto mt-5'></span>
            </div>
            {/* Phương thức đăng ký xét tuyển */}
            <div className='w-full flex flex-col items-center'>
              <h3 className="text-2xl font-semibold py-[20px] text-center text-primary">
                Phương thức đăng ký xét tuyển
              </h3>
              <div className='text-gray-500'>
                {dataAdmissionMethod.map((i, ind) => (
                  <div key={ind} className='flex items-center gap-2 py-1 my-2 cursor-pointer hover:text-primary duration-200'>
                    <input className='w-4 h-4' type="radio" name={i.name} id={i.name}
                      checked={ind === admissionMethodRadio}
                      onChange={() => setAdmissionMethodRadio(ind)}
                    />
                    <label className='text-lg font-medium cursor-pointer' htmlFor={i.name}>{i.name}</label>
                  </div>
                ))}
              </div>
              <span className='block w-[70%] h-[1px] bg-primary mx-auto mt-5'></span>
            </div>
            {/* Em là thí sinh */}
            <div className='w-full flex flex-col items-center'>
              <h3 className="text-2xl font-semibold py-[20px] text-center text-primary">
                Em là thí sinh
              </h3>
              <div className='grid grid-cols-2 gap-x-5 text-gray-500'>
                {dataCategory.map((i, ind) => (
                  <div key={ind} className='flex items-center gap-2 py-1 my-2 cursor-pointer hover:text-primary duration-200'>
                    <input className='w-4 h-4' type="radio" name={i.name} id={i.name}
                      checked={ind === categoryRadio}
                      onChange={() => setCategoryRadio(ind)}
                    />
                    <label className='text-lg font-medium cursor-pointer' htmlFor={i.name}>{i.name}</label>
                  </div>
                ))}
              </div>
              <span className='block w-[70%] h-[1px] bg-primary mx-auto mt-5'></span>
            </div>
            {/* Em biết thông tin của Trường qua đâu? */}
            <div className='w-full flex flex-col items-center'>
              <h3 className="text-2xl font-semibold py-[20px] text-center text-primary">
                Em biết thông tin của Trường qua đâu?
              </h3>
              <div className='grid grid-cols-3 gap-x-5 text-gray-500'>
                {dataWhereInfoSchool.map((i, ind) => (
                  <div key={ind} className='flex items-center gap-2 py-1 my-2 cursor-pointer hover:text-primary duration-200'>
                    <input
                      className='w-4 h-4'
                      type="checkbox" name={i.name} id={i.name}
                      checked={whereInfoSchoolCheckbox.includes(i.name)}
                      onChange={() => handleCheckBox(i.name)}
                    />
                    <label className='text-lg font-medium cursor-pointer' htmlFor={i.name}>{i.name}</label>
                  </div>
                ))}
              </div>
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              type='submit'
            >
              Hoàn thành
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
