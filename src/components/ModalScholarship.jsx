import { useState } from "react"

const ModalScholarship = (props) => {
  const [dataSelect, setDataSelect] = useState([])
  // console.log(dataSelect)

  const dataQuestion = [
    {
      id: 1,
      name: "Có hạnh kiểm 3 năm học trung học phở thông tự mức tốt trở lên"
    },
    {
      id: 2,
      name: "Đạt giải nhất, nhì, ba trong các kỳ thi học sinh giởi cấp tỉnh "
    },
    {
      id: 3,
      name: "Đạt giải nhất, nhì, ba trong các kỳ thi học sinh giởi cấp quốc gia"
    }
  ]

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

  return (
    <>
      <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 px-2 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-[#1e1e1e6f]"
      >
        <div className="relative top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] xl:max-w-[40%] max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
              <h3 className="text-xl font-semibold text-primary">Học bổng</h3>
              <button
                // onClick={() => setIsModalNotifiEmail(false)}
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
            <div className="p-4 md:p-5 space-y-4">
              {dataQuestion.map((item) => (
                <div className="flex items-center gap-2" key={item.id}>
                  <input
                    type="checkbox"
                    id={item.name}
                    checked= {dataSelect.includes(item.id)}
                    onChange={() => handleCheck(item.id)}
                  />
                  <label htmlFor={item.name} className="cursor-pointer select-none">{item.name}</label>
                </div>
              ))}
              {/* <!-- Modal footer --> */}
              <div className="flex items-center justify-center gap-2 px-4 pt-4 border-t border-gray-200 rounded-b">
                <button className="text-white bg-[#0083C2] hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  Đồng ý
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalScholarship;
