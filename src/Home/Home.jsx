import { useEffect, useState } from "react"
import ModalNotifi from "../components/ModalNotifi"
// import ModalInfoPersonal from "../components/ModalInfoPersonal"
// import ModalNotifiEmail from "../components/ModalNotifiEmail"
// import ModalScholarship from "../components/ModalScholarship"

import Logo from "../assets/xanhknen.png"
// import BackgroundImage from './assets/anhnen.png'
import BackgroundImage2 from "../assets/logo4.jpg"
import TextInput from "../textInput"
import NumberInput from "../components/NumberInput"

import { getMajorApi } from "../api/index"
import { useDispatch} from "react-redux"
import { update } from '../redux/infoPointSlice'

const Home = () => {
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
      id:1,
      name: "Xét theo học bạ THPT"
    }
    // {
    //   name: "Xét theo kết quả kỳ thi tốt nghiệp THPT 2024"
    // }
  ]

  const dataQuestion = [
    {
      id: 0,
      name: "Hạnh kiểm trong 3 năm THPT đều đạt loại tốt trở lên"
    },
    {
      id: 1,
      name: "Trong thời gian học THPT, có thành tích (giải nhất, nhì, ba) cấp quốc gia hoặc cấp quốc tế"
    },
    {
      id: 2,
      name: "Trong thời gian học THPT, có thành tích (giải nhất, nhì, ba) cấp tỉnh/thành phố"
    },
    {
      id: 3,
      name: "Thuộc top 3 học sinh có điểm trung bình học tập năm lớp 12 tại trường THPT"
    }
  ]

  const numberRegex = /^(\d+(\.\d*)?)?$/
  const backgroundImageUrl = `url(${BackgroundImage2})`
  const dispatch = useDispatch()
  // Chọn xét học bổng
  const [dataSelect, setDataSelect] = useState([])
  // Học kỳ
  const [hocKy, setHocKy] = useState(0)
  // ID ngành
  const [categoryInd, setCategoryInd] = useState(0)
  // ID chuyên ngành
  const [majorInd, setMajorInd] = useState(0)
  // Phương thức đăng ký xét tuyển
  const [admissionMethodRadio, setAdmissionMethodRadio] = useState(1)
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
  const [loading, setLoading] = useState(false)
  //Danh sách các chuyên ngành
  const [majorData, setMajorData] = useState()
  useEffect(() => {
    setLoading(true)
    getMajorApi()
      .then((res) => setMajorData(res.result))
      .then(() => setLoading(false))
  }, [])

  //Tính điểm tổ hợp
  const [diemtohop, setDiemtohop] = useState([])
  useEffect(() => {
    setDiemtohop([
      {
        ki: 1,
        code: "A00",
        num: (+infor.toanhk1 + +infor.lyhk1 + +infor.hoahk1).toFixed(2),
        point: [+infor.toanhk1, +infor.lyhk1, +infor.hoahk1]
      },
      {
        ki: 1,
        code: "A01",
        num: (+infor.toanhk1 + +infor.lyhk1 + +infor.tahk1).toFixed(2),
        point: [+infor.toanhk1, +infor.lyhk1, +infor.tahk1]
      },
      {
        ki: 1,
        code: "A02",
        num: (+infor.toanhk1 + +infor.lyhk1 + +infor.sinhhk1).toFixed(2),
        point: [+infor.toanhk1, +infor.lyhk1, +infor.sinhhk1]
      },
      {
        ki: 1,
        code: "A10",
        num: (+infor.toanhk1 + +infor.lyhk1 + +infor.gdcdhk1).toFixed(2),
        point: [+infor.toanhk1, +infor.lyhk1, +infor.gdcdhk1]
      },
      {
        ki: 1,
        code: "C00",
        num: (+infor.vanhk1 + +infor.suhk1 + +infor.diahk1).toFixed(2),
        point: [+infor.vanhk1, +infor.suhk1, +infor.diahk1]
      },
      {
        ki: 1,
        code: "C14",
        num: (+infor.toanhk1 + +infor.vanhk1 + +infor.gdcdhk1).toFixed(2),
        point: [+infor.toanhk1, +infor.vanhk1, +infor.gdcdhk1]
      },
      {
        ki: 1,
        code: "D01",
        num: (+infor.toanhk1 + +infor.vanhk1 + +infor.tahk1).toFixed(2),
        point: [+infor.toanhk1, +infor.vanhk1, +infor.tahk1]
      },
      {
        ki: 1,
        code: "D14",
        num: (+infor.vanhk1 + +infor.suhk1 + +infor.tahk1).toFixed(2),
        point: [+infor.vanhk1, +infor.suhk1, +infor.tahk1]
      },
      {
        ki: 1,
        code: "D15",
        num: (+infor.vanhk1 + +infor.diahk1 + +infor.tahk1).toFixed(2),
        point: [+infor.vanhk1, +infor.diahk1, +infor.tahk1]
      },
      {
        ki: 1,
        code: "D66",
        num: (+infor.vanhk1 + +infor.gdcdhk1 + +infor.tahk1).toFixed(2),
        point: [+infor.vanhk1, +infor.gdcdhk1, +infor.tahk1]
      },
      {
        ki: 1,
        code: "D84",
        num: (+infor.toanhk1 + +infor.gdcdhk1 + +infor.tahk1).toFixed(2),
        point: [+infor.toanhk1, +infor.gdcdhk1, +infor.tahk1]
      },
      {
        ki: 2,
        code: "A00",
        num: (+infor.toanhk2 + +infor.lyhk2 + +infor.hoahk2).toFixed(2),
        point: [+infor.toanhk2, +infor.lyhk2, +infor.hoahk2]
      },
      {
        ki: 2,
        code: "A01",
        num: (+infor.toanhk2 + +infor.lyhk2 + +infor.tahk2).toFixed(2),
        point: [+infor.toanhk2, +infor.lyhk2, +infor.tahk2]
      },
      {
        ki: 2,
        code: "A02",
        num: (+infor.toanhk2 + +infor.lyhk2 + +infor.sinhhk2).toFixed(2),
        point: [+infor.toanhk2, +infor.lyhk2, +infor.sinhhk2]
      },
      {
        ki: 2,
        code: "A10",
        num: (+infor.toanhk2 + +infor.lyhk2 + +infor.gdcdhk2).toFixed(2),
        point: [+infor.toanhk2, +infor.lyhk2, +infor.gdcdhk2]
      },
      {
        ki: 2,
        code: "C00",
        num: (+infor.vanhk2 + +infor.suhk2 + +infor.diahk2).toFixed(2),
        point: [+infor.vanhk2, +infor.suhk2, +infor.diahk2]
      },
      {
        ki: 2,
        code: "C14",
        num: (+infor.vanhk2 + +infor.suhk2 + +infor.tahk2).toFixed(2),
        point: [+infor.vanhk2, +infor.suhk2, +infor.tahk2]
      },
      {
        ki: 2,
        code: "D01",
        num: (+infor.toanhk2 + +infor.vanhk2 + +infor.tahk2).toFixed(2),
        point: [+infor.toanhk2, +infor.vanhk2, +infor.tahk2]
      },
      {
        ki: 2,
        code: "D14",
        num: (+infor.vanhk2 + +infor.suhk2 + +infor.tahk2).toFixed(2),
        point: [+infor.vanhk2, +infor.suhk2, +infor.tahk2]
      },
      {
        ki: 2,
        code: "D15",
        num: (+infor.vanhk2 + +infor.diahk2 + +infor.tahk2).toFixed(2),
        point: [+infor.vanhk2, +infor.diahk2, +infor.tahk2]
      },
      {
        ki: 2,
        code: "D66",
        num: (+infor.vanhk2 + +infor.gdcdhk2 + +infor.tahk2).toFixed(2),
        point: [+infor.vanhk2, +infor.gdcdhk2, +infor.tahk2]
      },
      {
        ki: 2,
        code: "D84",
        num: (+infor.toanhk2 + +infor.gdcdhk2 + +infor.tahk2).toFixed(2),
        point: [+infor.toanhk2, +infor.gdcdhk2, +infor.tahk2]
      }
    ])
  }, [infor, majorData])

  const [selectedMajor, setSelectedMajor] = useState({ 0:0 })
  const handleMajorSelection = (categoryIndex, majorIndex) => {
    setSelectedMajor({ [categoryIndex]: majorIndex })
    setCategoryInd(categoryIndex)
    setMajorInd(majorIndex)
  }

  const handleCheck = (id) => {
    setDataSelect(prev => {
      const isChecked = dataSelect.includes(id)
      if (isChecked) {
        return dataSelect.filter(i => i !== id)
      } else {
        return [...prev, id]
      }
    })
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
        diem: diemtohopItem ? diemtohopItem.num : 0,
        point: diemtohopItem ? diemtohopItem.point : []
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
        diem: diemtohopItem ? diemtohopItem.num : 0,
        point: diemtohopItem ? diemtohopItem.point : []
      }
    })

    const data = {
      idChuyenNganh: majorData[categoryInd].majors[
        majorInd
      ].id,
      chuyenNganh: majorData[categoryInd].majors[
        majorInd
      ].name,
      idMethod: admissionMethodRadio,
      num: numMajorUpdated,
      num2: numMajorUpdated2,
      point: {
        toan: {
          id: 1,
          ki1: 1,
          ki2: 2,
          diemhk1: infor.toanhk1,
          diemhk2: infor.toanhk2
        },
        ly: {
          id: 2,
          ki1: 1,
          ki2: 2,
          diemhk1: infor.lyhk1,
          diemhk2: infor.lyhk2
        },
        hoa: {
          id: 3,
          ki1: 1,
          ki2: 2,
          diemhk1: infor.hoahk1,
          diemhk2: infor.hoahk2
        },
        sinh: {
          id: 4,
          ki1: 1,
          ki2: 2,
          diemhk1: infor.sinhhk1,
          diemhk2: infor.sinhhk2
        },
        van: {
          id: 5,
          ki1: 1,
          ki2: 2,
          diemhk1: infor.vanhk1,
          diemhk2: infor.vanhk2
        },
        su: {
          id: 6,
          ki1: 1,
          ki2: 2,
          diemhk1: infor.suhk1,
          diemhk2: infor.suhk2
        },
        dia: {
          id: 7,
          ki1: 1,
          ki2: 2,
          diemhk1: infor.diahk1,
          diemhk2: infor.diahk2
        },
        ta: {
          id: 8,
          ki1: 1,
          ki2: 2,
          diemhk1: infor.tahk1,
          diemhk2: infor.tahk2
        },
        gdcd: {
          id: 9,
          ki1: 1,
          ki2: 2,
          diemhk1: infor.gdcdhk1,
          diemhk2: infor.gdcdhk2
        }
      },
      info: infor
    }
    dispatch(update(data))
    setIsModalNotifi(true)
  }


  return (
    <>
      <div
        className="relative h-[100vh] bg-cover md:bg-top bg-center bg-fixed pb-[20px]"
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
            ĐÁNH GIÁ CƠ HỘI TRÚNG TUYỂN 2024
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
                  {dataAdmissionMethod.map(i => (
                    <div
                      key={i.id}
                      className={`flex items-center justify-center gap-2 py-1 my-2 cursor-pointer hover:text-primary ${
                        i.id === admissionMethodRadio ? "text-primary" : ""
                      } duration-200`}
                    >
                      <input
                        className="w-4 h-4"
                        type="radio"
                        name={i.name}
                        id={i.name}
                        checked={i.id === admissionMethodRadio}
                        onChange={() => setAdmissionMethodRadio(i.id)}
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
                      <NumberInput
                        type={"text"}
                        label={"Toán ( vd: 6.9, 10...)"}
                        value={infor.toanhk1}
                        onChange={(e) => {
                          if (numberRegex.test(e.target.value)) {
                            setInfor({ ...infor, toanhk1: e.target.value })
                          }
                        }}
                        id={"add_toanhk1"}
                        min={"0"}
                        max={"10"}
                        require
                      />
                      <NumberInput
                        type={"text"}
                        label={"Lý ( vd: 6.9, 10...)"}
                        value={infor.lyhk1}
                        onChange={(e) => {
                          if (numberRegex.test(e.target.value)) {
                            setInfor({ ...infor, lyhk1: e.target.value })
                          }
                        }}
                        id={"add_lyhk1"}
                        min={"0"}
                        max={"10"}
                        require
                      />
                      <NumberInput
                        type={"text"}
                        label={"Hoá ( vd: 6.9, 10...)"}
                        value={infor.hoahk1}
                        onChange={(e) => {
                          if (numberRegex.test(e.target.value)) {
                            setInfor({ ...infor, hoahk1: e.target.value })
                          }
                        }}
                        id={"add_hoahk1"}
                        min={"0"}
                        max={"10"}
                        require
                      />
                      <NumberInput
                        type={"text"}
                        label={"Sinh ( vd: 6.9, 10...)"}
                        value={infor.sinhhk1}
                        onChange={(e) => {
                          if (numberRegex.test(e.target.value)) {
                            setInfor({ ...infor, sinhhk1: e.target.value })
                          }
                        }}
                        id={"add_sinhhk1"}
                        min={"0"}
                        max={"10"}
                        require
                      />
                      <NumberInput
                        type={"text"}
                        label={"Văn ( vd: 6.9, 10...)"}
                        value={infor.vanhk1}
                        onChange={(e) => {
                          if (numberRegex.test(e.target.value)) {
                            setInfor({ ...infor, vanhk1: e.target.value })
                          }
                        }}
                        id={"add_vanhk1"}
                        min={"0"}
                        max={"10"}
                        require
                      />
                      <NumberInput
                        type={"text"}
                        label={"Sử ( vd: 6.9, 10...)"}
                        value={infor.suhk1}
                        onChange={(e) => {
                          if (numberRegex.test(e.target.value)) {
                            setInfor({ ...infor, suhk1: e.target.value })
                          }
                        }}
                        id={"add_suhk1"}
                        min={"0"}
                        max={"10"}
                        require
                      />
                      <NumberInput
                        type={"text"}
                        label={"Địa ( vd: 6.9, 10...)"}
                        value={infor.diahk1}
                        onChange={(e) => {
                          if (numberRegex.test(e.target.value)) {
                            setInfor({ ...infor, diahk1: e.target.value })
                          }
                        }}
                        id={"add_diahk1"}
                        min={"0"}
                        max={"10"}
                        require
                      />
                      <NumberInput
                        type={"text"}
                        label={"Tiếng Anh ( vd: 6.9, 10...)"}
                        value={infor.tahk1}
                        onChange={(e) => {
                          if (numberRegex.test(e.target.value)) {
                            setInfor({ ...infor, tahk1: e.target.value })
                          }
                        }}
                        id={"add_tahk1"}
                        min={"0"}
                        max={"10"}
                        require
                      />
                      <NumberInput
                        type={"text"}
                        label={"Giáo dục công dân ( vd: 6.9, 10...)"}
                        value={infor.gdcdhk1}
                        onChange={(e) => {
                          if (numberRegex.test(e.target.value)) {
                            setInfor({ ...infor, gdcdhk1: e.target.value })
                          }
                        }}
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
                      Điểm trung bình lớp 12 (HK2)
                    </h3>
                    {/* Điểm trung bình học kì 1 lớp  */}
                    <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-[20px]">
                      <NumberInput
                        type={"text"}
                        label={"Toán ( vd: 6.9, 10...)"}
                        value={infor.toanhk2}
                        onChange={(e) => {
                          if (numberRegex.test(e.target.value)) {
                            setInfor({ ...infor, toanhk2: e.target.value })
                          }
                        }}
                        id={"add_toanhk2"}
                        min={"0"}
                        max={"10"}
                        require
                      />
                      <NumberInput
                        type={"text"}
                        label={"Lý ( vd: 6.9, 10...)"}
                        value={infor.lyhk2}
                        onChange={(e) => {
                          if (numberRegex.test(e.target.value)) {
                            setInfor({ ...infor, lyhk2: e.target.value })
                          }
                        }}
                        id={"add_lyhk2"}
                        min={"0"}
                        max={"10"}
                        require
                      />
                      <NumberInput
                        type={"text"}
                        label={"Hoá ( vd: 6.9, 10...)"}
                        value={infor.hoahk2}
                        onChange={(e) => {
                          if (numberRegex.test(e.target.value)) {
                            setInfor({ ...infor, hoahk2: e.target.value })
                          }
                        }}
                        id={"add_hoahk2"}
                        min={"0"}
                        max={"10"}
                        require
                      />
                      <NumberInput
                        type={"text"}
                        label={"Sinh ( vd: 6.9, 10...)"}
                        value={infor.sinhhk2}
                        onChange={(e) => {
                          if (numberRegex.test(e.target.value)) {
                            setInfor({ ...infor, sinhhk2: e.target.value })
                          }
                        }}
                        id={"add_sinhhk2"}
                        min={"0"}
                        max={"10"}
                        require
                      />
                      <NumberInput
                        type={"text"}
                        label={"Văn ( vd: 6.9, 10...)"}
                        value={infor.vanhk2}
                        onChange={(e) => {
                          if (numberRegex.test(e.target.value)) {
                            setInfor({ ...infor, vanhk2: e.target.value })
                          }
                        }}
                        id={"add_vanhk2"}
                        min={"0"}
                        max={"10"}
                        require
                      />
                      <NumberInput
                        type={"text"}
                        label={"Sử ( vd: 6.9, 10...)"}
                        value={infor.suhk2}
                        onChange={(e) => {
                          if (numberRegex.test(e.target.value)) {
                            setInfor({ ...infor, suhk2: e.target.value })
                          }
                        }}
                        id={"add_suhk2"}
                        min={"0"}
                        max={"10"}
                        require
                      />
                      <NumberInput
                        type={"text"}
                        label={"Địa ( vd: 6.9, 10...)"}
                        value={infor.diahk2}
                        onChange={(e) => {
                          if (numberRegex.test(e.target.value)) {
                            setInfor({ ...infor, diahk2: e.target.value })
                          }
                        }}
                        id={"add_diahk2"}
                        min={"0"}
                        max={"10"}
                        require
                      />
                      <NumberInput
                        type={"text"}
                        label={"Tiếng Anh ( vd: 6.9, 10...)"}
                        value={infor.tahk2}
                        onChange={(e) => {
                          if (numberRegex.test(e.target.value)) {
                            setInfor({ ...infor, tahk2: e.target.value })
                          }
                        }}
                        id={"add_tahk2"}
                        min={"0"}
                        max={"10"}
                        require
                      />
                      <NumberInput
                        type={"text"}
                        label={"Giáo dục công dân ( vd: 6.9, 10...)"}
                        value={infor.gdcdhk2}
                        onChange={(e) => {
                          if (numberRegex.test(e.target.value)) {
                            setInfor({ ...infor, gdcdhk2: e.target.value })
                          }
                        }}
                        id={"add_gdcdhk2"}
                        min={"0"}
                        max={"10"}
                        require
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
                {loading?
                  <>
                    <div role="status">
                      <svg aria-hidden="true" className="inline w-10 h-10 text-gray-200 animate-spin fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  </>
                  :
                  <>
                    {majorData?.map((category, categoryIndex) => (
                      <div
                        key={category.code}
                        className="flex flex-col w-full gap-2 py-3"
                      >
                        <h4 className="text-lg">{category.name}</h4>
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 text-gray-500 pl-[20px]">
                          {category.majors?.map((major, majorIndex) => (
                            <div key={major.id} className="flex items-center gap-1">
                              <div className="w-4 h-4">
                                <input
                                  // className="w-4 h-4"
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
                              </div>
                              <label className="sm:text-lg font-medium cursor-pointer" htmlFor={major.id}>
                                {major.name}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </>
                }
              </div>
              {/* Xét học bổng */}
              <div className="w-full flex flex-col xl:items-center select-none">
                <h3 className="text-xl sm:text-2xl font-semibold py-[20px] text-center text-primary">
                  Thông tin xét học bổng &quot;Tự hào HPU&quot;
                </h3>
                <div className="flex flex-col gap-2 text-gray-500">
                  {dataQuestion.map((item) => (
                    <div className="flex items-center gap-2" key={item.id}>
                      <input
                        type="checkbox"
                        id={item.name}
                        checked= {dataSelect.includes(item.id)}
                        onChange={() => handleCheck(item.id)}
                      />
                      <label htmlFor={item.name} className="sm:text-lg font-medium cursor-pointer select-none">{item.name}</label>
                    </div>
                  ))}
                </div>
              </div>
              {!loading &&
                <button
                  type="submit"
                  className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mt-4 text-center dark:bg-primary/80 dark:hover:bg-primary">
                  Xem kết quả
                </button>
              }
            </div>
          </form>
        </div>
      </div>
      {/* model Notifi */}
      {isModalNotifi && <ModalNotifi setIsModalNotifi={setIsModalNotifi} dataSelect={dataSelect}/>}
      {/* <ModalNotifi/> */}
      {/* <ModalInfoPersonal/> */}
      {/* {<ModalNotifiEmail/>} */}
      {/* {<ModalScholarship/>} */}
    </>
  )
}

export default Home