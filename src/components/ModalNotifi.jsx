import { useState } from "react"
import { useSelector } from 'react-redux'
import ModalInfoPersonal from "../components/ModalInfoPersonal"


const ModalNotifi = (props) => {
  const { setIsModalNotifi, dataSelect } = props
  const [isModalInfoPersonal, setIsModalInfoPersonal] = useState(false)

  const infoPoint = useSelector((state) => state.infoPoint.currentData)
  // console.log(infoPoint)
  const isScholarship = dataSelect.length > 0
  const arrDiemHk1 = infoPoint.num.map(i => i.diem).map(i => +i)
  const arrDiemHk2 = infoPoint.num2.map(i => i.diem).map(i => +i)
  const isThan75kh1 = Math.max(...arrDiemHk1)/3 >= 7.5 && Math.max(...arrDiemHk1)/3 < 8.5
  const isThan75kh2 = Math.max(...arrDiemHk2)/3 >= 7.5 && Math.max(...arrDiemHk2)/3 < 8.5
  const isThan85kh1 = Math.max(...arrDiemHk1)/3 >= 8.5
  const isThan85kh2 = Math.max(...arrDiemHk2)/3 >= 8.5

  const isThan75 = isThan75kh1 || isThan75kh2
  const isThan85 = isThan85kh1 || isThan85kh2

  const scholarship15 = (isThan75 && (dataSelect && dataSelect.includes(0)))
  const scholarship30 = isThan85 && (dataSelect && dataSelect.includes(0))
  const scholarship45 = (dataSelect && dataSelect.includes(0)) && (dataSelect && dataSelect.includes(2) || dataSelect && dataSelect.includes(3))
  const scholarship60 = (dataSelect && dataSelect.includes(0)) && (dataSelect && dataSelect.includes(1))

  // console.log({
  //   scholarship15: scholarship15,
  //   scholarship30: scholarship30,
  //   scholarship45: scholarship45,
  //   scholarship60: scholarship60
  // })

  const arr = Object.values(infoPoint.info)
  const arrFilter = arr.filter(i => i !== '')
  const isLiet = arrFilter.some(i => +i <= 1 )
  const isError = infoPoint.num.every(i => i.diem < 15) && infoPoint.num2.every(i => i.diem < 15)
  const isNaN = infoPoint.num.some(i => i.diem === "NaN") || infoPoint.num2.some(i => i.diem === "NaN")

  return (
    <>
      <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 px-2 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-[#1e1e1e6f]"
      >
        <div className="relative top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] xl:max-w-[45%] max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
              <h3 className="text-xl text-primary font-semibold">Thông báo</h3>
              <button
                onClick={() => setIsModalNotifi(false)}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                data-modal-hide="default-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-4 md:p-5">
              {!isError && !isNaN && !isLiet &&
                <p className="text-base leading-relaxed text-justify text-gray-500 pb-3">
                  Chúc mừng bạn có cơ hội trúng tuyển vào chuyên ngành <span className='font-bold'>{infoPoint?.chuyenNganh}</span>. Số điểm tổ hợp học bạ lớp 12 của bạn là:
                </p>
              }
              {isError && isLiet &&
                <p className="text-base leading-relaxed text-justify text-gray-500 pb-3">
                  Rất tiếc bạn không đủ điều kiện trúng tuyển vào chuyên ngành <span className='font-bold'>{infoPoint?.chuyenNganh}</span>. Số điểm tổ hợp học bạ lớp 12 của bạn là:
                </p>
              }
              {isError || isLiet &&
                <p className="text-base leading-relaxed text-justify text-gray-500 pb-3">
                  Rất tiếc bạn không đủ điều kiện trúng tuyển vào chuyên ngành <span className='font-bold'>{infoPoint?.chuyenNganh}</span>. Số điểm tổ hợp học bạ lớp 12 của bạn là:
                </p>
              }
              {isNaN &&
                <p className="text-lg font-semibold leading-relaxed text-red-400 pb-3">
                  Định dạng phần nhập điểm phải là số (vd: 6.8, 9,...). Vui lòng bạn kiểm tra lại!
                </p>
              }
              <p className="py-3">Học kỳ 1:</p>
              <div className='flex gap-y-2 flex-wrap mb-3'>
                {infoPoint && infoPoint?.num.map(i => (
                  <p key={i.tohop} className='font-semibold w-[50%]'>{i.tohop}: <span className='text-red-400'>{i.diem} điểm</span></p>
                ))}
              </div>
              <p className="py-3">Học kỳ 2:</p>
              <div className='flex gap-y-2 flex-wrap mb-3'>
                {infoPoint && infoPoint?.num2.map(i => (
                  <p key={i.tohop} className='font-semibold w-[50%]'>{i.tohop}: <span className='text-red-400'>{i.diem} điểm</span></p>
                ))}
              </div>
              <div>
                {/* Thông tin học bổng */}
                <hr className="w-48 h-1 mx-auto my-3 bg-primary/20 border-0 rounded"></hr>
                {isScholarship &&
                  <div className="my-5">
                    {scholarship15 && !scholarship30 && !scholarship45 && !scholarship60 &&
                      <div className="flex items-center gap-2">
                        <p className="text-[18px]">Bạn có cơ hội giành học bổng trị giá <span className="font-bold text-red-400">15.000.000</span> đồng từ Nhà trường</p>
                        <div className="animate-shake">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-primary">
                            <path d="M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z" />
                            <path fillRule="evenodd" d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    }

                    {
                      ((!scholarship15 && scholarship30 && !scholarship45 && !scholarship60) || (scholarship15 && scholarship30 && !scholarship45 && !scholarship60)) &&
                      <div className="flex items-center gap-2">
                        <p className="text-[18px]">Bạn có cơ hội giành học bổng trị giá <span className="font-bold text-red-400">30.000.000</span> đồng từ Nhà trường</p>
                        <div className="animate-shake">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-primary">
                            <path d="M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z" />
                            <path fillRule="evenodd" d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    }

                    {scholarship45 && !scholarship60 &&
                    <div className="flex items-center gap-2">
                      <p className="text-[18px]">Bạn có cơ hội giành học bổng trị giá <span className="font-bold text-red-400">45.000.000</span> đồng từ Nhà trường</p>
                      <div className="animate-shake">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-primary">
                          <path d="M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z" />
                          <path fillRule="evenodd" d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    }

                    {scholarship60 &&
                      <div className="flex items-center gap-2">
                        <p className="text-[18px]">Bạn có cơ hội giành học bổng trị giá <span className="font-bold text-red-400">60.000.000</span> đồng từ Nhà trường</p>
                        <div className="animate-shake">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-primary">
                            <path d="M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z" />
                            <path fillRule="evenodd" d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    }

                  </div>
                }
              </div>
              {/* <!-- Modal footer --> */}
              <div className="flex items-center justify-center px-4 pt-4 mt-3 border-t border-gray-200 rounded-b">
                {!isError && !isNaN && !isLiet &&
                  <button onClick={() => setIsModalInfoPersonal(true)} className="text-white bg-[#0083C2] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Đăng ký
                  </button>
                }
                <button onClick={() => setIsModalNotifi(false)} className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-red-500 focus:z-10 focus:ring-4 focus:ring-gray-100">
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* model info personal */}
      {isModalInfoPersonal && (
        <ModalInfoPersonal
          setIsModalInfoPersonal = {setIsModalInfoPersonal}
          dataSelect = {dataSelect}
          isThan75 = {isThan75}
          isThan85 = {isThan85}
        />
      )}
    </>
  );
};

export default ModalNotifi;
