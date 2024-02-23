import { useState} from 'react'
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
  //const backgroundImageUrl = `url(${BackgroundImage})`
  const backgroundImageUrl = `url(${BackgroundImage2})`
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
  console.log('12132')

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
        <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[70%] xl:w-[80%] flex flex-col items-center border-solid border-2 border-neutral-300 rounded-lg mx-[5px] p-[10px] md:p-[20px] bg-white bg-opacity-90">
          {/* Thông tin cá nhân */}
          <div className='w-full flex flex-col items-center'>
            <h3 className="text-2xl font-semibold py-[20px] text-primary">
              Thông tin cá nhân
            </h3>
            <div className="w-full grid grid-cols-3 gap-[20px]">
              <TextInput
                label={"Họ và tên"}
                value={infor.name}
                onChange ={(e) => setInfor({ ...infor, name: e.target.value})}
              />
              <Select
                placeholder="Tỉnh / Thành phố"
                className="text-black text-sm"
                classNames={{
                  control: () => "!rounded-[5px]",
                  input: () => "!pr-2.5 !pb-2.5 !pt-4 !m-0",
                  valueContainer: () => "!p-[0_8px]",
                  menu: () => "!z-[11]",
                }}
                // options={provinces.result.map((item) => ({
                //   value: item.code,
                //   label: item.name,
                // }))}
                value={province}
                onChange={setProvince}
              />
              <TextInput
                label={"Email"}
                value={infor.email}
                onChange={(e) => setInfor({...infor, email: e.target.value})}
              />
              <TextInput
                label={"Số điện thoại"}
                value={infor.phoneNumber}
                onChange={(e) => setInfor({...infor, phoneNumber: e.target.value})}
              />
              <TextInput
                label={"Trường THPT"}
                value={infor.school}
                onChange={(e) => setInfor({...infor, school: e.target.value})}
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
                label={"Toán"}
                value={infor.toan12}
                onChange={(e) => setInfor({...infor, toan12: e.target.value})}
                id={"add_toan12"}
                // className={"w-[70%]"}
              />
              <TextInput
                label={"Lý"}
                value={infor.ly12}
                onChange={(e) => setInfor({...infor, ly12: e.target.value})}
                id={"add_ly12"}
                // className={"w-[70%]"}
              />
              <TextInput
                label={"Hoá"}
                value={infor.hoa12}
                onChange={(e) => setInfor({...infor, hoa12: e.target.value})}
                id={"add_hoa12"}
                // className={"w-[70%]"}
              />
              <TextInput
                label={"Sinh"}
                value={infor.sinh12}
                onChange={(e) => setInfor({...infor, sinh12: e.target.value})}
                id={"add_sinh12"}
                // className={"w-[70%]"}
              />
              <TextInput
                label={"Văn"}
                value={infor.van12}
                onChange={(e) => setInfor({...infor, van12: e.target.value})}
                id={"add_van12"}
                // className={"w-[70%]"}
              />
              <TextInput
                label={"Sử"}
                value={infor.su12}
                onChange={(e) => setInfor({...infor, su12: e.target.value})}
                id={"add_su12"}
                // className={"w-[70%]"}
              />
              <TextInput
                label={"Địa"}
                value={infor.dia12}
                onChange={(e) => setInfor({...infor, dia12: e.target.value})}
                id={"add_dia12"}
                // className={"w-[70%]"}
              />
              <TextInput
                label={"Tiếng Anh"}
                value={infor.ta12}
                onChange={(e) => setInfor({...infor, ta12: e.target.value})}
                id={"add_ta12"}
                // className={"w-[70%]"}
              />
              <TextInput
                label={"Giáo dục công dân"}
                value={infor.gdcd12}
                onChange={(e) => setInfor({...infor, gdcd12: e.target.value})}
                id={"add_gdcd12"}
                // className={"w-[70%]"}
              />
            </div>
          </div>
          {/* Chuyên ngành đăng ký xét tuyển */}
          <div className='w-full flex flex-col items-center' >
            <h3 className="text-2xl font-semibold py-[20px] text-center text-primary">
              Chuyên ngành đăng ký xét tuyển
            </h3>
            <div className='grid grid-cols-2 gap-x-5 text-gray-500'>
              {dataMajors.map((i, ind) => (
                <div key={ind} className='flex items-center gap-2 py-1 my-2 cursor-pointer'>
                  <input className='w-4 h-4' type="radio" name={i.name} id={ind} />
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
            <div className='grid grid-cols-2 gap-x-5 text-gray-500'>
              <div className='flex items-center gap-2 py-1 my-2 cursor-pointer'>
                <input className='w-4 h-4' type="radio" name='Xét theo học bạ THPT' id='Xét theo học bạ THPT' />
                <label className='text-lg font-medium cursor-pointer' htmlFor='Xét theo học bạ THPT'>Xét theo học bạ THPT</label>
              </div>
              <div className='flex items-center gap-2 py-1 my-2 cursor-pointer'>
                <input className='w-4 h-4' type="radio" name='Xét kết hợp chứng chỉ tiếng Anh quốc tế với kết quả thi tốt nghiệp THPT năm 2024' id='Xét kết hợp chứng chỉ tiếng Anh quốc tế với kết quả thi tốt nghiệp THPT năm 2024' />
                <label className='text-lg font-medium cursor-pointer' htmlFor='Xét kết hợp chứng chỉ tiếng Anh quốc tế với kết quả thi tốt nghiệp THPT năm 2024'>Xét kết hợp chứng chỉ tiếng Anh quốc tế với kết quả thi tốt nghiệp THPT năm 2024</label>
              </div>
              <div className='flex items-center gap-2 py-1 my-2 cursor-pointer'>
                <input className='w-4 h-4' type="radio" name='Xét theo kết quả kỳ thi tốt nghiệp THPT 2024' id='Xét theo kết quả kỳ thi tốt nghiệp THPT 2024' />
                <label className='text-lg font-medium cursor-pointer' htmlFor='Xét theo kết quả kỳ thi tốt nghiệp THPT 2024'>Xét theo kết quả kỳ thi tốt nghiệp THPT 2024</label>
              </div>
            </div>
            <span className='block w-[70%] h-[1px] bg-primary mx-auto mt-5'></span>
          </div>
          {/* Em là thí sinh */}
          <div className='w-full flex flex-col items-center'>
            <h3 className="text-2xl font-semibold py-[20px] text-center text-primary">
              Em là thí sinh
            </h3>
            <div className='grid grid-cols-2 gap-x-5 text-gray-500'>
              <div className='flex items-center gap-2 py-1 my-2 cursor-pointer'>
                <input className='w-4 h-4' type="radio" name='Tốt nghiệp THPT năm 2024' id='Tốt nghiệp THPT năm 2024' />
                <label className='text-lg font-medium cursor-pointer' htmlFor='Tốt nghiệp THPT năm 2024'>Tốt nghiệp THPT năm 2024</label>
              </div>
              <div className='flex items-center gap-2 py-1 my-2 cursor-pointer'>
                <input className='w-4 h-4' type="radio" name='Thí sinh tự do' id='Thí sinh tự do' />
                <label className='text-lg font-medium cursor-pointer' htmlFor='Thí sinh tự do'>Thí sinh tự do</label>
              </div>
            </div>
            <span className='block w-[70%] h-[1px] bg-primary mx-auto mt-5'></span>
          </div>
          {/* Em biết thông tin của Trường qua đâu? */}
          <div className='w-full flex flex-col items-center'>
            <h3 className="text-2xl font-semibold py-[20px] text-center text-primary">
              Em biết thông tin của Trường qua đâu?
            </h3>
            <div className='grid grid-cols-2 gap-x-5 text-gray-500'>
              <div className='flex items-center gap-2 py-1 my-2 cursor-pointer'>
                <input className='w-4 h-4' type="checkbox" name='Website của nhà trường' id='Website của nhà trường' />
                <label className='text-lg font-medium cursor-pointer' htmlFor='Website của nhà trường'>Website của nhà trường</label>
              </div>
              <div className='flex items-center gap-2 py-1 my-2 cursor-pointer'>
                <input className='w-4 h-4' type="checkbox" name='Faceboo' id='Faceboo' />
                <label className='text-lg font-medium cursor-pointer' htmlFor='Faceboo'>Facebook</label>
              </div>
              <div className='flex items-center gap-2 py-1 my-2 cursor-pointer'>
                <input className='w-4 h-4' type="checkbox" name='Tiktok' id='Tiktok' />
                <label className='text-lg font-medium cursor-pointer' htmlFor='Tiktok'>Tiktok</label>
              </div>
              <div className='flex items-center gap-2 py-1 my-2 cursor-pointer'>
                <input className='w-4 h-4' type="checkbox" name='Người thân, bạn bè' id='Người thân, bạn bè' />
                <label className='text-lg font-medium cursor-pointer' htmlFor='Người thân, bạn bè'>Người thân, bạn bè</label>
              </div>
              <div className='flex items-center gap-2 py-1 my-2 cursor-pointer'>
                <input className='w-4 h-4' type="checkbox" name='Cựu sinh viên của Trường' id='Cựu sinh viên của Trường' />
                <label className='text-lg font-medium cursor-pointer' htmlFor='Cựu sinh viên của Trường'>Cựu sinh viên của Trường</label>
              </div>
              <div className='flex items-center gap-2 py-1 my-2 cursor-pointer'>
                <input className='w-4 h-4' type="checkbox" name='Sinh viên đang học tại Trường' id='Sinh viên đang học tại Trường' />
                <label className='text-lg font-medium cursor-pointer' htmlFor='Sinh viên đang học tại Trường'>Sinh viên đang học tại Trường</label>
              </div>
              <div className='flex items-center gap-2 py-1 my-2 cursor-pointer'>
                <input className='w-4 h-4' type="checkbox" name='Kênh khác' id='Kênh khác' />
                <label className='text-lg font-medium cursor-pointer' htmlFor='Kênh khác'>Kênh khác</label>
              </div>
            </div>
          </div>


          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Hoàn thành
          </button>
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-8 rounded-md max-w-md w-full relative mx-[10px] sm:m-0">
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                  onClick={setIsModalOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <h2 className="text-2xl font-bold mb-4">Kết quả:</h2>
                <p className="mb-4">
                  Điểm trung bình: 
                </p>
                <p className="mb-8">
                  phong
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
