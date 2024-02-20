import { useState, useReducer } from "react";
import Logo from "./assets/xanhknen.png";
import BackgroundImage from "./assets/anhnen.png";
import BackgroundImage2 from "./assets/bg2.jpg";
import TextInput from "./textInput";
import Select from "react-select";

function reducer(state, action) {
  switch (action.type) {
    case "change_name": {
      return {
        ...state,
        name: action.payload.value,
      };
    }
    // case "change_province": {
    //   return {
    //     ...state,
    //     province: action.payload.value,
    //   };
    // }
    case "change_school": {
      return {
        ...state,
        school: action.payload.value,
      };
    }
    case "change_email": {
      return {
        ...state,
        email: action.payload.value,
      };
    }
    case "change_phoneNumber": {
      return {
        ...state,
        phoneNumber: action.payload.value,
      };
    }
    case "change_toan11": {
      return {
        ...state,
        toan11: action.payload.value,
      };
    }
    case "change_ly11": {
      return {
        ...state,
        ly11: action.payload.value,
      };
    }
    case "change_hoa11": {
      return {
        ...state,
        hoa11: action.payload.value,
      };
    }
    case "change_sinh11": {
      return {
        ...state,
        sinh11: action.payload.value,
      };
    }
    case "change_van11": {
      return {
        ...state,
        van11: action.payload.value,
      };
    }
    case "change_su11": {
      return {
        ...state,
        su11: action.payload.value,
      };
    }
    case "change_dia11": {
      return {
        ...state,
        dia11: action.payload.value,
      };
    }
    case "change_ta11": {
      return {
        ...state,
        ta11: action.payload.value,
      };
    }
    case "change_gdcd11": {
      return {
        ...state,
        gdcd11: action.payload.value,
      };
    }

    case "change_toan12": {
      return {
        ...state,
        toan12: action.payload.value,
      };
    }
    case "change_ly12": {
      return {
        ...state,
        ly12: action.payload.value,
      };
    }
    case "change_hoa12": {
      return {
        ...state,
        hoa12: action.payload.value,
      };
    }
    case "change_sinh12": {
      return {
        ...state,
        sinh12: action.payload.value,
      };
    }
    case "change_van12": {
      return {
        ...state,
        van12: action.payload.value,
      };
    }
    case "change_su12": {
      return {
        ...state,
        su12: action.payload.value,
      };
    }
    case "change_dia12": {
      return {
        ...state,
        dia12: action.payload.value,
      };
    }
    case "change_ta12": {
      return {
        ...state,
        ta12: action.payload.value,
      };
    }
    case "change_gdcd12": {
      return {
        ...state,
        gdcd12: action.payload.value,
      };
    }

    case "reset": {
      return action.payload.value;
    }
  }
}

function calculateAverageScore(scores) {
  const total = scores.reduce((acc, score) => acc + parseFloat(score), 0);
  const average = total / scores.length;
  return average.toFixed(2);
}

function App() {
  //const backgroundImageUrl = `url(${BackgroundImage})`;
  const backgroundImageUrl = `url(${BackgroundImage2})`;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [province, setProvince] = useState();
  const [infor, dispatchInfor] = useReducer(reducer, {
    name: "",
    // province: "",
    school: "",
    email: "",
    phoneNumber: "",
    toan11: "",
    ly11: "",
    hoa11: "",
    sinh11: "",
    van11: "",
    su11: "",
    dia11: "",
    ta11: "",
    gdcd11: "",
    toan12: "",
    ly12: "",
    hoa12: "",
    sinh12: "",
    van12: "",
    su12: "",
    dia12: "",
    ta12: "",
    gdcd12: "",
  });

  const scores = [
    infor.toan11,
    infor.ly11,
    infor.hoa11,
    infor.sinh11,
    infor.van11,
    infor.su11,
    infor.dia11,
    infor.ta11,
    infor.gdcd11,
    infor.toan12,
    infor.ly12,
    infor.hoa12,
    infor.sinh12,
    infor.van12,
    infor.su12,
    infor.dia12,
    infor.ta12,
    infor.gdcd12,
  ];

  const handleCalculateAverage = () => {
    const allScoresProvided = scores.every((score) => score !== "");

    if (allScoresProvided) {
      const averageScore = calculateAverageScore(scores);
      console.log("Average Score:", averageScore);
      setIsModalOpen(true);
    } else {
      console.log("Please enter all scores");
      setIsModalOpen(false);
    }
  };

  const getTopMessage = (averageScore) => {
    if (averageScore >= 9.5) {
      return "Xin chúc mừng, bạn thuộc TOP5 THPT 2024";
    } else if (averageScore >= 9) {
      return "Xin chúc mừng, bạn thuộc TOP10 THPT 2024";
    } else if (averageScore >= 8) {
      return "Xin chúc mừng, bạn thuộc TOP20 THPT 2024";
    } else if (averageScore >= 6) {
      return "Xin chúc mừng, bạn thuộc TOP40 THPT 2024";
    } else {
      return "Bạn chưa lọt TOP, hãy cố gắng hơn nhé!!!";
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold text-[#0083C2] mb-[40px]">
          XẾP HẠNG HỌC SINH THPT 2024
        </h1>
        <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[70%] xl:w-1/2 flex flex-col items-center border-solid border-2 border-neutral-300 rounded-lg mx-[5px] p-[10px] md:p-[20px] gap-10 bg-white bg-opacity-90">
          {/* Thông tin cá nhân */}
          <div className="w-full grid md:grid-cols-2 gap-[20px]">
            <TextInput
              label={"Họ và tên"}
              value={infor.name}
              dispatch={dispatchInfor}
              action={"change_name"}
              id={"add_name"}
              // className={"w-[70%]"}
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
              dispatch={dispatchInfor}
              action={"change_email"}
              id={"add_email"}
              // className={"w-[70%]"}
            />
            <TextInput
              label={"Số điện thoại"}
              value={infor.phoneNumber}
              dispatch={dispatchInfor}
              action={"change_phoneNumber"}
              id={"add_phoneNumber"}
              // className={"w-[70%]"}
            />
          </div>
          <div className="w-full flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-[20px]">
              Điểm trung bình lớp 11
            </h3>
            {/* Điểm trung bình lớp 11 */}
            <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-[20px]">
              <TextInput
                label={"Toán"}
                value={infor.toan11}
                dispatch={dispatchInfor}
                action={"change_toan11"}
                id={"add_toan11"}
                // className={"w-[70%]"}
              />
              <TextInput
                label={"Lý"}
                value={infor.ly11}
                dispatch={dispatchInfor}
                action={"change_ly11"}
                id={"add_ly11"}
                // className={"w-[70%]"}
              />
              <TextInput
                label={"Hoá"}
                value={infor.hoa11}
                dispatch={dispatchInfor}
                action={"change_hoa11"}
                id={"add_hoa11"}
                // className={"w-[70%]"}
              />
              <TextInput
                label={"Sinh"}
                value={infor.sinh11}
                dispatch={dispatchInfor}
                action={"change_sinh11"}
                id={"add_sinh11"}
                // className={"w-[70%]"}
              />
              <TextInput
                label={"Văn"}
                value={infor.van11}
                dispatch={dispatchInfor}
                action={"change_van11"}
                id={"add_van11"}
                // className={"w-[70%]"}
              />
              <TextInput
                label={"Sử"}
                value={infor.su11}
                dispatch={dispatchInfor}
                action={"change_su11"}
                id={"add_su11"}
                // className={"w-[70%]"}
              />
              <TextInput
                label={"Địa"}
                value={infor.dia11}
                dispatch={dispatchInfor}
                action={"change_dia11"}
                id={"add_dia11"}
                // className={"w-[70%]"}
              />
              <TextInput
                label={"Tiếng Anh"}
                value={infor.ta11}
                dispatch={dispatchInfor}
                action={"change_ta11"}
                id={"add_ta11"}
                // className={"w-[70%]"}
              />
              <TextInput
                label={"Giáo dục công dân"}
                value={infor.gdcd11}
                dispatch={dispatchInfor}
                action={"change_gdcd11"}
                id={"add_gdcd11"}
                // className={"w-[70%]"}
              />
            </div>
          </div>

          <div className="w-full flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-[20px]">
              Điểm trung bình lớp 12 (HK1)
            </h3>
            {/* Điểm trung bình học kì 1 lớp 12 */}
            <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-[20px]">
              <TextInput
                label={"Toán"}
                value={infor.toan12}
                dispatch={dispatchInfor}
                action={"change_toan12"}
                id={"add_toan12"}
                // className={"w-[70%]"}
              />
              <TextInput
                label={"Lý"}
                value={infor.ly12}
                dispatch={dispatchInfor}
                action={"change_ly12"}
                id={"add_ly12"}
                // className={"w-[70%]"}
              />
              <TextInput
                label={"Hoá"}
                value={infor.hoa12}
                dispatch={dispatchInfor}
                action={"change_hoa12"}
                id={"add_hoa12"}
                // className={"w-[70%]"}
              />
              <TextInput
                label={"Sinh"}
                value={infor.sinh12}
                dispatch={dispatchInfor}
                action={"change_sinh12"}
                id={"add_sinh12"}
                // className={"w-[70%]"}
              />
              <TextInput
                label={"Văn"}
                value={infor.van12}
                dispatch={dispatchInfor}
                action={"change_van12"}
                id={"add_van12"}
                // className={"w-[70%]"}
              />
              <TextInput
                label={"Sử"}
                value={infor.su12}
                dispatch={dispatchInfor}
                action={"change_su12"}
                id={"add_su12"}
                // className={"w-[70%]"}
              />
              <TextInput
                label={"Địa"}
                value={infor.dia12}
                dispatch={dispatchInfor}
                action={"change_dia12"}
                id={"add_dia12"}
                // className={"w-[70%]"}
              />
              <TextInput
                label={"Tiếng Anh"}
                value={infor.ta12}
                dispatch={dispatchInfor}
                action={"change_ta12"}
                id={"add_ta12"}
                // className={"w-[70%]"}
              />
              <TextInput
                label={"Giáo dục công dân"}
                value={infor.gdcd12}
                dispatch={dispatchInfor}
                action={"change_gdcd12"}
                id={"add_gdcd12"}
                // className={"w-[70%]"}
              />
            </div>
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            onClick={handleCalculateAverage}
          >
            Xem kết quả
          </button>
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-8 rounded-md max-w-md w-full relative mx-[10px] sm:m-0">
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                  onClick={closeModal}
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
                  Điểm trung bình: {calculateAverageScore(scores)}
                </p>
                <p className="mb-8">
                  {getTopMessage(calculateAverageScore(scores))}
                </p>
                {/* <div className="flex justify-between">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                    onClick={closeModal}
                  >
                    Close
                  </button>

                </div> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
