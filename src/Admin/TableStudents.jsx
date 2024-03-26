

import Swal from 'sweetalert2'
import ExportExcel from './ExportExcel'

const TableStudents = (props) => {
  const { students, isFetching } = props
  return (
    <div>
      <ExportExcel students = {students}/>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {/* Loading... */}
        {isFetching &&
          <div role='status' className='mt-6 animate-pulse w-full'>
            <div className='mb-4 h-4  rounded bg-gray-200' />
            <div className='mb-2.5 h-10  rounded bg-gray-200' />
            <div className='mb-2.5 h-10 rounded bg-gray-200' />
            <div className='mb-2.5 h-10  rounded bg-gray-200' />
            <div className='mb-2.5 h-10  rounded bg-gray-200' />
            <div className='mb-2.5 h-10  rounded bg-gray-200' />
            <div className='mb-2.5 h-10  rounded bg-gray-200' />
            <div className='mb-2.5 h-10  rounded bg-gray-200' />
            <div className='mb-2.5 h-10  rounded bg-gray-200' />
            <div className='mb-2.5 h-10  rounded bg-gray-200' />
            <div className='mb-2.5 h-10  rounded bg-gray-200' />
            <div className='mb-2.5 h-10  rounded bg-gray-200' />
            <div className='h-10  rounded bg-gray-200' />
            <span className='sr-only'>Loading...</span>
          </div>
        }
        {/* Content */}
        {!isFetching &&
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                STT
              </th>
              <th scope="col" className="px-6 py-3">
                Họ và tên
              </th>
              <th scope="col" className="px-6 py-3">
                SĐT
              </th>
              <th scope="col" className="px-6 py-3">
                Nơi ở
              </th>
              <th scope="col" className="px-6 py-3">
                Trường THPT
              </th>
              <th scope="col" className="px-6 py-3">
                Phương thức xét tuyển
              </th>
              <th scope="col" className="px-6 py-3">
                Toán HKI
              </th>
              <th scope="col" className="px-6 py-3">
                Vật lý HKI
              </th>
              <th scope="col" className="px-6 py-3">
                Hóa học HKI
              </th>
              <th scope="col" className="px-6 py-3">
                Sinh học HKI
              </th>
              <th scope="col" className="px-6 py-3">
                Ngữ văn HKI
              </th>
              <th scope="col" className="px-6 py-3">
                Lịch sử HKI
              </th>
              <th scope="col" className="px-6 py-3">
                Địa lý HKI
              </th>
              <th scope="col" className="px-6 py-3">
                Ngoại ngữ HKI
              </th>
              <th scope="col" className="px-6 py-3">
                GDCD HKI
              </th>
              <th scope="col" className="px-6 py-3">
                Toán HKII
              </th>
              <th scope="col" className="px-6 py-3">
                Vật lý HKII
              </th>
              <th scope="col" className="px-6 py-3">
                Hóa học HKII
              </th>
              <th scope="col" className="px-6 py-3">
                Sinh học HKII
              </th>
              <th scope="col" className="px-6 py-3">
                Ngữ văn HKII
              </th>
              <th scope="col" className="px-6 py-3">
                Lịch sử HKII
              </th>
              <th scope="col" className="px-6 py-3">
                Địa lý HKII
              </th>
              <th scope="col" className="px-6 py-3">
                Ngoại ngữ HKII
              </th>
              <th scope="col" className="px-6 py-3">
                GDCD HKII
              </th>
              <th scope="col" className="px-6 py-3">
                Chuyên ngành đăng ký xét tuyển
              </th>
              <th scope="col" className="px-6 py-3">
                Diện thí sinh
              </th>
              {/* <th scope="col" className="px-6 py-3">
                Cách thức tìm hiểu thông tin
              </th> */}
              <th scope="col" className="px-6 py-3">
                Tiktok
              </th>
              <th scope="col" className="px-6 py-3">
                Facebook
              </th>
              <th scope="col" className="px-6 py-3">
                Website trường
              </th>
              <th scope="col" className="px-6 py-3">
                CT tư vấn hướng nghiệp
              </th>
              <th scope="col" className="px-6 py-3">
                Cựu SV
              </th>
              <th scope="col" className="px-6 py-3">
                SV của trường
              </th>
              <th scope="col" className="px-6 py-3">
                Người thân
              </th>
              <th scope="col" className="px-6 py-3">
                Khác
              </th>

            </tr>
          </thead>
          <tbody>
            {students && students.map((student, ind) => {
              const diemHk1 = student.scores.filter(i => i.batch.id === 1).sort((a, b) => a.subject.id - b.subject.id)
              const diemHk2 = student.scores.filter(i => i.batch.id === 2).sort((a, b) => a.subject.id - b.subject.id)

              console.log("hk1", diemHk1)
              // console.log('diem', monHoc)
              return (
                <tr key={student.id} className="odd:bg-white even:bg-gray-50 border-b">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {ind + 1}
                  </th>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {student.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {student.phone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {student.province.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {student.school}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {student.method.name}
                  </td>
                  {diemHk1.map((i, index) =>
                    <td key={index} className="px-6 py-4 whitespace-nowrap">
                      {i.score}
                    </td>)
                  }
                  {diemHk2.map((i, index) =>
                    <td key={index} className="px-6 py-4 whitespace-nowrap">
                      {i.score}
                    </td>)
                  }
                  <td className="px-6 py-4 whitespace-nowrap">
                    {student.major.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {student.type.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {student.tiktok ? 'Có' : 'Không'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {student.facebook ? 'Có' : 'Không'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {student.website ? 'Có' : 'Không'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {student.tu_van_hn ? 'Có' : 'Không'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {student.cuu_sv ? 'Có' : 'Không'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {student.sv ? 'Có' : 'Không'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {student.nguoi_than ? 'Có' : 'Không'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {student.khac ? 'Có' : 'Không'}
                  </td>

                </tr>
              )
            }
            )}
          </tbody>
        </table>
        }
      </div>
    </div>

  )
}

export default TableStudents