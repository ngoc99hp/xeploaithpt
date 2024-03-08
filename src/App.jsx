import { useEffect, useState } from "react"
import ModalNotifi from "./components/ModalNotifi"
import ModalNotifiEmail from "./components/ModalNotifiEmail"

import Logo from "./assets/xanhknen.png"
// import BackgroundImage from './assets/anhnen.png'
import BackgroundImage2 from "./assets/bg2.jpg"
import TextInput from "./textInput"

import { getMajorApi } from "./api/index"
import { useDispatch} from "react-redux"
import { update } from './redux/infoPointSlice'

function App() {
  const dataHocKi = [
    {
      name: "Học kỳ 1"
    },
    {
      name: "Học kỳ 2"
    }
  ]


  const dataAdmissionMethod = [
    {
      name: "Xét theo học bạ THPT"
    },
    // {
    //   name: "Xét theo kết quả kỳ thi tốt nghiệp THPT 2024"
    // }
  ]

  //const backgroundImageUrl = `url(${BackgroundImage})`
  const backgroundImageUrl = `url(${BackgroundImage2})`
  const dispatch = useDispatch()
  // Học kỳ
  const [hocKy, setHocKy] = useState(0)
  // ID ngành
  const [categoryInd, setCategoryInd] = useState(0)
  // ID chuyên ngành
  const [majorInd, setMajorInd] = useState(0)

  // Phương thức đăng ký xét tuyển
  const [admissionMethodRadio, setAdmissionMethodRadio] = useState(0)


  // const [isModalInfoPersonal, setIsModalInfoPersonal] = useState(true)
  const [isModalNotifi, setIsModalNotifi] = useState(false)

  const [infor, setInfor] = useState({
    // Thông tin điểm số HK1
    toanhk1: "",
    lyhk1: "",
    hoahk1: "",
    sinhhk1: "",
    vanhk1: "",
    suhk1: "",
    diahk1: "",
    tahk1: "",
    gdcdhk1: "",
    // Thông tin điểm số HK2
    toanhk2: "",
    lyhk2: "",
    hoahk2: "",
    sinhhk2: "",
    vanhk2: "",
    suhk2: "",
    diahk2: "",
    tahk2: "",
    gdcdhk2: ""
  })

  //Danh sách các chuyên ngành
  const [majorData, setMajorData] = useState()
  useEffect(() => {
    getMajorApi().then((res) => setMajorData(res.result))
  }, [])


  // console.log("Danh sách chuyên ngành :", majorData) 

  //Tính điểm tổ hợp
  const [diemtohop, setDiemtohop] = useState([])
  useEffect(() => {
    setDiemtohop([
      {
        ki: 1,
        code: "A00",
        num: +infor.toanhk1 + +infor.lyhk1 + +infor.hoahk1
      },
      {
        ki: 1,
        code: "A01",
        num: +infor.toanhk1 + +infor.lyhk1 + +infor.tahk1
      },
      {
        ki: 1,
        code: "A02",
        num: +infor.toanhk1 + +infor.lyhk1 + +infor.tahk1
      },
      {
        ki: 1,
        code: "A10",
        num: +infor.toanhk1 + +infor.lyhk1 + +infor.gdcdhk1
      },
      {
        ki: 1,
        code: "C00",
        num: +infor.vanhk1 + +infor.suhk1 + +infor.diahk1
      },
      {
        ki: 1,
        code: "C14",
        num: +infor.toanhk1 + +infor.vanhk1 + +infor.gdcdhk1
      },
      {
        ki: 1,
        code: "D01",
        num: +infor.toanhk1 + +infor.vanhk1 + +infor.tahk1
      },
      {
        ki: 1,
        code: "D14",
        num: +infor.vanhk1 + +infor.suhk1 + +infor.diahk1
      },
      {
        ki: 1,
        code: "D15",
        num: +infor.vanhk1 + +infor.diahk1 + +infor.tahk1
      },
      {
        ki: 1,
        code: "D66",
        num: +infor.toanhk1 + +infor.lyhk1 + +infor.hoahk1
      },
      {
        ki: 1,
        code: "D84",
        num: +infor.vanhk1 + +infor.gdcdhk1 + +infor.tahk1
      },
      {
        ki: 2,
        code: "A00",
        num: +infor.toanhk2 + +infor.lyhk2 + +infor.hoahk2
      },
      {
        ki: 2,
        code: "A01",
        num: +infor.toanhk2 + +infor.lyhk2 + +infor.tahk2
      },
      {
        ki: 2,
        code: "A02",
        num: +infor.toanhk2 + +infor.lyhk2 + +infor.tahk2
      },
      {
        ki: 2,
        code: "A10",
        num: +infor.toanhk2 + +infor.lyhk2 + +infor.gdcdhk2
      },
      {
        ki: 2,
        code: "C00",
        num: +infor.vanhk2 + +infor.suhk2 + +infor.diahk2
      },
      {
        ki: 2,
        code: "C14",
        num: +infor.toanhk2 + +infor.vanhk2 + +infor.gdcdhk2
      },
      {
        ki: 2,
        code: "D01",
        num: +infor.toanhk2 + +infor.vanhk2 + +infor.tahk2
      },
      {
        ki: 2,
        code: "D14",
        num: +infor.vanhk2 + +infor.suhk2 + +infor.diahk2
      },
      {
        ki: 2,
        code: "D15",
        num: +infor.vanhk2 + +infor.diahk2 + +infor.tahk2
      },
      {
        ki: 2,
        code: "D66",
        num: +infor.toanhk2 + +infor.lyhk2 + +infor.hoahk2
      },
      {
        ki: 2,
        code: "D84",
        num: +infor.vanhk2 + +infor.gdcdhk2 + +infor.tahk2
      }
    ])
  }, [infor, majorData])
  // console.log(diemtohop)

  const [selectedMajor, setSelectedMajor] = useState({ 0:0 })

  const handleMajorSelection = (categoryIndex, majorIndex) => {
    // setSelectedMajor((prevState) => ({
    //   ...prevState,
    //   [categoryIndex]: majorIndex
    // }))
    setSelectedMajor({ [categoryIndex]: majorIndex })
    setCategoryInd(categoryIndex)
    setMajorInd(majorIndex)

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const numMajorUpdated = majorData[categoryInd].majors[
      majorInd
    ].tohop.map((item) => {
      const diemtohopItem = diemtohop.find(
        (el) => el.code === item.combination.code && el.ki === 1
      )
      return {
        ki: diemtohopItem.ki,
        tohop: item.combination.code,
        diem: diemtohopItem ? diemtohopItem.num : 0
      }
    })

    const numMajorUpdated2 = majorData[categoryInd].majors[
      majorInd
    ].tohop.map((item) => {
      const diemtohopItem = diemtohop.find(
        (el) => el.code === item.combination.code && el.ki === 2
      )
      return {
        ki: diemtohopItem.ki,
        tohop: item.combination.code,
        diem: diemtohopItem ? diemtohopItem.num : 0
      }
    })

    const data = {
      chuyenNganh: majorData[categoryInd].majors[
        majorInd
      ].name,
      num: numMajorUpdated,
      num2: numMajorUpdated2
    }
    dispatch(update(data))
    setIsModalNotifi(true)
  }


  return (
    <>
      <div
        className="relative h-[100vh] bg-cover bg-center bg-fixed pb-[20px]"
        style={{ backgroundImage: backgroundImageUrl }}
      >
        <div className="absolute inset-0 backdrop-blur-sm"></div>
        <div className="flex flex-col w-full h-full items-center overflow-y-auto">
          <img
            src={Logo}
            alt="logo"
            className="w-[70%] sm:w-[60%] md:w-1/3 lg:w-1/4 object-contain my-[20px] sm:my-[40px] z-[1]"
          />
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold text-primary mb-[40px] z-[1]">
            ĐĂNG KÝ XÉT TUYỂN ĐẠI HỌC 2024
          </h1>
          <form
            onSubmit={handleSubmit}
            className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[70%] xl:w-[80%] opacity-[97%]"
          >
            <div className="flex flex-col items-center border-solid border-2 border-neutral-300 rounded-lg p-[10px] md:p-[20px] bg-white bg-opacity-90">
              {/* Phương thức đăng ký xét tuyển */}
              <div className="w-full flex flex-col xl:items-center select-none">
                <h3 className="text-xl sm:text-2xl font-semibold py-[20px] text-center text-primary">
                  Phương thức đăng ký xét tuyển
                </h3>
                <div className="text-gray-500">
                  {dataAdmissionMethod.map((i, ind) => (
                    <div
                      key={ind}
                      className={`flex items-center gap-2 py-1 my-2 cursor-pointer hover:text-primary ${
                        ind === admissionMethodRadio ? "text-primary" : ""
                      } duration-200`}
                    >
                      <input
                        className="w-4 h-4"
                        type="radio"
                        name={i.name}
                        id={i.name}
                        checked={ind === admissionMethodRadio}
                        onChange={() => setAdmissionMethodRadio(ind)}
                      />
                      <label
                        className="sm:text-lg font-medium cursor-pointer"
                        htmlFor={i.name}
                      >
                        {i.name}
                      </label>
                    </div>
                  ))}
                </div>
                <span className="block w-[70%] h-[1px] bg-primary mx-auto mt-5"></span>
              </div>
              {/* Nhập điểm */}
              <div className="w-full">
                <div className="text-gray-500 flex items-center justify-center gap-3">
                  {dataHocKi.map((i, ind) => (
                    <div
                      key={ind}
                      className={`flex items-center gap-2 py-1 my-2 cursor-pointer hover:text-primary ${
                        ind === hocKy ? "text-primary" : ""
                      } duration-200`}
                    >
                      <input
                        className="w-4 h-4"
                        type="radio"
                        name={i.name}
                        id={i.name}
                        checked={ind === hocKy}
                        onChange={() => setHocKy(ind)}
                      />
                      <label
                        className="sm:text-lg font-medium cursor-pointer"
                        htmlFor={i.name}
                      >
                        {i.name}
                      </label>
                    </div>
                  ))}
                </div>
                {hocKy === 0 && (
                  <div className="w-full flex flex-col items-center">
                    <h3 className="text-xl sm:text-2xl font-semibold py-[20px] text-primary">
                      Điểm trung bình lớp 12 (HK1)
                    </h3>
                    {/* Điểm trung bình học kì 1 lớp  */}
                    <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-[20px]">
                      <TextInput
                        type={"number"}
                        label={"Toán"}
                        value={infor.toanhk1}
                        onChange={(e) =>
                          setInfor({ ...infor, toanhk1: e.target.value })
                        }
                        id={"add_toanhk1"}
                        min={"0"}
                        max={"10"}
                        require
                      />
                      <TextInput
                        type={"number"}
                        label={"Lý"}
                        value={infor.lyhk1}
                        onChange={(e) =>
                          setInfor({ ...infor, lyhk1: e.target.value })
                        }
                        id={"add_lyhk1"}
                        min={"0"}
                        max={"10"}
                        require
                      />
                      <TextInput
                        type={"number"}
                        label={"Hoá"}
                        value={infor.hoahk1}
                        onChange={(e) =>
                          setInfor({ ...infor, hoahk1: e.target.value })
                        }
                        id={"add_hoahk1"}
                        min={"0"}
                        max={"10"}
                        require
                      />
                      <TextInput
                        type={"number"}
                        label={"Sinh"}
                        value={infor.sinhhk1}
                        onChange={(e) =>
                          setInfor({ ...infor, sinhhk1: e.target.value })
                        }
                        id={"add_sinhhk1"}
                        min={"0"}
                        max={"10"}
                        require
                      />
                      <TextInput
                        type={"number"}
                        label={"Văn"}
                        value={infor.vanhk1}
                        onChange={(e) =>
                          setInfor({ ...infor, vanhk1: e.target.value })
                        }
                        id={"add_vanhk1"}
                        min={"0"}
                        max={"10"}
                        require
                      />
                      <TextInput
                        type={"number"}
                        label={"Sử"}
                        value={infor.suhk1}
                        onChange={(e) =>
                          setInfor({ ...infor, suhk1: e.target.value })
                        }
                        id={"add_suhk1"}
                        min={"0"}
                        max={"10"}
                        require
                      />
                      <TextInput
                        type={"number"}
                        label={"Địa"}
                        value={infor.diahk1}
                        onChange={(e) =>
                          setInfor({ ...infor, diahk1: e.target.value })
                        }
                        id={"add_diahk1"}
                        min={"0"}
                        max={"10"}
                        require
                      />
                      <TextInput
                        type={"number"}
                        label={"Tiếng Anh"}
                        value={infor.tahk1}
                        onChange={(e) =>
                          setInfor({ ...infor, tahk1: e.target.value })
                        }
                        id={"add_tahk1"}
                        min={"0"}
                        max={"10"}
                        require
                      />
                      <TextInput
                        type={"number"}
                        label={"Giáo dục công dân"}
                        value={infor.gdcdhk1}
                        onChange={(e) =>
                          setInfor({ ...infor, gdcdhk1: e.target.value })
                        }
                        id={"add_gdcdhk1"}
                        min={"0"}
                        max={"10"}
                        require
                      />
                    </div>
                  </div>
                )}
                {hocKy === 1 && (
                  <div className="w-full flex flex-col items-center">
                    <h3 className="text-xl sm:text-2xl font-semibold py-[20px] text-primary">
                      Điểm trung bình lớp (HK2)
                    </h3>
                    {/* Điểm trung bình học kì 1 lớp  */}
                    <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-[20px]">
                      <TextInput
                        type={"number"}
                        label={"Toán"}
                        value={infor.toanhk2}
                        onChange={(e) =>
                          setInfor({ ...infor, toanhk2: e.target.value })
                        }
                        id={"add_toanhk2"}
                        min={"0"}
                        max={"10"}
                      />
                      <TextInput
                        type={"number"}
                        label={"Lý"}
                        value={infor.lyhk2}
                        onChange={(e) =>
                          setInfor({ ...infor, lyhk2: e.target.value })
                        }
                        id={"add_lyhk2"}
                        min={"0"}
                        max={"10"}
                      />
                      <TextInput
                        type={"number"}
                        label={"Hoá"}
                        value={infor.hoahk2}
                        onChange={(e) =>
                          setInfor({ ...infor, hoahk2: e.target.value })
                        }
                        id={"add_hoahk2"}
                        min={"0"}
                        max={"10"}
                      />
                      <TextInput
                        type={"number"}
                        label={"Sinh"}
                        value={infor.sinhhk2}
                        onChange={(e) =>
                          setInfor({ ...infor, sinhhk2: e.target.value })
                        }
                        id={"add_sinhhk2"}
                        min={"0"}
                        max={"10"}
                      />
                      <TextInput
                        label={"Văn"}
                        value={infor.vanhk2}
                        onChange={(e) =>
                          setInfor({ ...infor, vanhk2: e.target.value })
                        }
                        id={"add_vanhk2"}
                        min={"0"}
                        max={"10"}
                      />
                      <TextInput
                        type={"number"}
                        label={"Sử"}
                        value={infor.suhk2}
                        onChange={(e) =>
                          setInfor({ ...infor, suhk2: e.target.value })
                        }
                        id={"add_suhk2"}
                        min={"0"}
                        max={"10"}
                      />
                      <TextInput
                        type={"number"}
                        label={"Địa"}
                        value={infor.diahk2}
                        onChange={(e) =>
                          setInfor({ ...infor, diahk2: e.target.value })
                        }
                        id={"add_diahk2"}
                        min={"0"}
                        max={"10"}
                      />
                      <TextInput
                        type={"number"}
                        label={"Tiếng Anh"}
                        value={infor.tahk2}
                        onChange={(e) =>
                          setInfor({ ...infor, tahk2: e.target.value })
                        }
                        id={"add_tahk2"}
                        min={"0"}
                        max={"10"}
                      />
                      <TextInput
                        type={"number"}
                        label={"Giáo dục công dân"}
                        value={infor.gdcdhk2}
                        onChange={(e) =>
                          setInfor({ ...infor, gdcdhk2: e.target.value })
                        }
                        id={"add_gdcdhk2"}
                        min={"0"}
                        max={"10"}
                      />
                    </div>
                  </div>
                )}
              </div>
              {/* Chuyên ngành đăng ký xét tuyển */}
              <div className="w-full flex flex-col xl:items-center select-none">
                <h3 className="text-xl sm:text-2xl font-semibold py-[20px] text-center text-primary">
                  Chuyên ngành đăng ký xét tuyển
                </h3>
                {majorData?.map((category, categoryIndex) => (
                  <div
                    key={category.code}
                    className="flex flex-col w-full gap-2 py-3"
                  >
                    <h4 className="text-lg">{category.name} :</h4>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 text-gray-500 pl-[20px]">
                      {category.majors?.map((major, majorIndex) => (
                        <div key={major.id} className="flex items-center gap-1">
                          <input
                            className="w-4 h-4"
                            type="radio"
                            name={category.code}
                            id= {major.id}
                            checked={
                              selectedMajor[categoryIndex] === majorIndex
                            }
                            onChange={() =>
                              handleMajorSelection(categoryIndex, majorIndex)
                            }
                          />
                          <label className="sm:text-lg font-medium cursor-pointer" htmlFor={major.id}>
                            {major.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <button
                type="submit"
                className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mt-3 text-center dark:bg-primary/80 dark:hover:bg-primary">
                Xem kết quả
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* model Notifi */}
      {isModalNotifi && <ModalNotifi setIsModalNotifi={setIsModalNotifi}/>}
      {/* <ModalNotifiEmail/> */}
    </>
  )
}

export default App
