
import ModalInfoPersonal from "../components/ModalInfoPersonal"


const ModalNotifiError = (props) => {
  const { setError } = props
  const handleClose = () => {
    setError(false)
    location.reload()
  }
  return (
    <>
      <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 px-2 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-[#1e1e1e6f]"
      >
        <div className="relative top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] xl:max-w-[40%] max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
              <h3 className="text-xl text-primary font-semibold">Thông báo</h3>
              <button
                onClick={handleClose}
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
                {/* <span className="sr-only">Close modal</span> */}
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-4 md:p-5">
              <p className="text-base leading-relaxed text-gray-500 pb-3">
                Đã có lỗi, vui lòng thao tác lại!
              </p>
              {/* <!-- Modal footer --> */}
              <div className="flex items-center justify-center px-4 pt-4 border-t border-gray-200 rounded-b">
                <button onClick={handleClose} className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-red-500 focus:z-10 focus:ring-4 focus:ring-gray-100">
                   Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalNotifiError;
