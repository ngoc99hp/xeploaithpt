
import ExcelJS from "exceljs"
import { SiMicrosoftexcel } from 'react-icons/si'
// const data = [
//     {"ten": "Nguyen Van A", "tuoi": 25, "que": "Ha Noi", "cong_viec": "Lap trinh vien"},
//     {"ten": "Tran Thi B", "tuoi": 30, "que": "Ho Chi Minh", "cong_viec": "Giao vien"},
//     {"ten": "Le Van C", "tuoi": 28, "que": "Da Nang", "cong_viec": "Nhan vien kinh doanh"},
//     {"ten": "Pham Thi D", "tuoi": 35, "que": "Hai Phong", "cong_viec": "Bac si"},
//     {"ten": "Hoang Van E", "tuoi": 22, "que": "Can Tho", "cong_viec": "Sinh vien"},
//     {"ten": "Nguyen Thi F", "tuoi": 40, "que": "Vinh", "cong_viec": "Nha bao"},
//     {"ten": "Trinh Van G", "tuoi": 32, "que": "Quang Ninh", "cong_viec": "Quan ly nhan su"},
//     {"ten": "Bui Thi H", "tuoi": 27, "que": "Hue", "cong_viec": "Nhan vien marketing"},
//     {"ten": "Vu Van I", "tuoi": 38, "que": "Ninh Binh", "cong_viec": "Kiem soat vien"},
//     {"ten": "Nguyen Van K", "tuoi": 33, "que": "Tien Giang", "cong_viec": "Ky su dien"}
// ]

const ExportExcel = ({students}) => {
  const handleExport = async () => {
    const workbook = new ExcelJS.Workbook()
    const worksheet = workbook.addWorksheet(
      "BÁO CÁO THỐNG KÊ HỌC SINH ĐĂNG KÝ XÉT TUYỂN"
    );

    worksheet.mergeCells("A1:D1")
    const tentruong = worksheet.getCell("A1")
    tentruong.value = "TRƯỜNG ĐẠI HỌC QUẢN LÝ VÀ CÔNG NGHỆ HẢI PHÒNG"
    tentruong.font = { name: "Times New Roman", size: 11, color:{ argb:"FF0000" } }
    tentruong.alignment = { vertical: "middle", horizontal: "center" }

    worksheet.mergeCells("C2:H2")
    const titleCell = worksheet.getCell("C2")
    titleCell.value = "BÁO CÁO THỐNG KÊ HỌC SINH ĐĂNG KÝ XÉT TUYỂN"
    titleCell.font = { name: "Times New Roman", size: 16, bold: true }
    titleCell.alignment = { vertical: "middle", horizontal: "center" }

    worksheet.mergeCells("C3:G3")
    const Taingay = worksheet.getCell("C3")
    Taingay.value = "Từ ngày …... tháng …... năm 202.... đến ngày …... tháng …... năm 202...."
    Taingay.font = {
      name: "Times New Roman",
      size: 12
    }
    Taingay.alignment = { vertical: "middle", horizontal: "center" }
    // Thêm dữ liệu vào bảng tính
    worksheet.getColumn(1).width = 8
    worksheet.getColumn(2).width = 20
    worksheet.getColumn(3).width = 15
    worksheet.getColumn(4).width = 15
    worksheet.getColumn(5).width = 20
    worksheet.getColumn(6).width = 25
    worksheet.getColumn(28).width = 30
    worksheet.getColumn(26).width = 20
    worksheet.getColumn(27).width = 20
    worksheet.getColumn(30).width = 20
    worksheet.getColumn(31).width = 20

    worksheet.mergeCells("G5:O5")
    worksheet.mergeCells("P5:X5")
    worksheet.getCell(6, 1).value = "STT"
    worksheet.getCell(6, 2).value = "Họ và tên"
    worksheet.getCell(6, 3).value = "SĐT"
    worksheet.getCell(6, 4).value = "Nơi ở"
    worksheet.getCell(6, 5).value = "Trường THPT"
    worksheet.getCell(6, 6).value = "Phương thức xét tuyển"
    worksheet.getCell(5, 7).value = "Điểm học kỳ I (Lớp 12)"
    worksheet.getCell(6, 7).value = "Toán"
    worksheet.getCell(6, 8).value = "Vật lý"
    worksheet.getCell(6, 9).value = "Hóa học"
    worksheet.getCell(6, 10).value = "Sinh học"
    worksheet.getCell(6, 11).value = "Ngữ văn"
    worksheet.getCell(6, 12).value = "Lịch sử"
    worksheet.getCell(6, 13).value = "Địa lý"
    worksheet.getCell(6, 14).value = "Ngoại ngữ"
    worksheet.getCell(6, 15).value = "GDCD"
    worksheet.getCell(5, 16).value = "Điểm học kỳ II (Lớp 12)"
    worksheet.getCell(6, 16).value = "Toán"
    worksheet.getCell(6, 17).value = "Vật lý"
    worksheet.getCell(6, 18).value = "Hóa học"
    worksheet.getCell(6, 19).value = "Sinh học"
    worksheet.getCell(6, 20).value = "Ngữ văn"
    worksheet.getCell(6, 21).value = "Lịch sử"
    worksheet.getCell(6, 22).value = "Địa lý"
    worksheet.getCell(6, 23).value = "Ngoại ngữ"
    worksheet.getCell(6, 24).value = "GDCD"
    worksheet.getCell(6, 25).value = "Tiktok"
    worksheet.getCell(6, 26).value = "Facebook"
    worksheet.getCell(6, 27).value = "Website trường"
    worksheet.getCell(6, 28).value = "CT tư vấn hướng nghiệp"
    worksheet.getCell(6, 29).value = "Cựu SV"
    worksheet.getCell(6, 30).value = "SV của trường"
    worksheet.getCell(6, 31).value = "Người thân"
    worksheet.getCell(6, 32).value = "Khác"

    worksheet.getCell(6, 1).alignment = { wrapText: false, vertical: 'middle', horizontal: 'center' }
    worksheet.getCell(6, 2).alignment = { wrapText: false, vertical: 'middle', horizontal: 'center' }
    worksheet.getCell(6, 3).alignment = { wrapText: false, vertical: 'middle', horizontal: 'center' }
    worksheet.getCell(6, 4).alignment = { wrapText: false, vertical: 'middle', horizontal: 'center' }
    worksheet.getCell(6, 5).alignment = { wrapText: false, vertical: 'middle', horizontal: 'center' }
    worksheet.getCell(6, 6).alignment = { wrapText: false, vertical: 'middle', horizontal: 'center' }
    worksheet.getCell(5, 7).alignment = { wrapText: false, vertical: 'middle', horizontal: 'center' }
    worksheet.getCell(6, 7).alignment = { wrapText: false, vertical: 'middle', horizontal: 'center' }
    worksheet.getCell(6, 8).alignment = { wrapText: false, vertical: 'middle', horizontal: 'center' }
    worksheet.getCell(6, 9).alignment = { wrapText: false, vertical: 'middle', horizontal: 'center' }
    worksheet.getCell(6, 10).alignment = { wrapText: false, vertical: 'middle', horizontal: 'center' }
    worksheet.getCell(6, 11).alignment = { wrapText: false, vertical: 'middle', horizontal: 'center' }
    worksheet.getCell(6, 12).alignment = { wrapText: false, vertical: 'middle', horizontal: 'center' }
    worksheet.getCell(6, 13).alignment = { wrapText: false, vertical: 'middle', horizontal: 'center' }
    worksheet.getCell(6, 14).alignment = { wrapText: false, vertical: 'middle', horizontal: 'center' }
    worksheet.getCell(6, 15).alignment = { wrapText: false, vertical: 'middle', horizontal: 'center' }
    worksheet.getCell(5, 16).alignment = { wrapText: false, vertical: 'middle', horizontal: 'center' }
    worksheet.getCell(6, 16).alignment = { wrapText: false, vertical: 'middle', horizontal: 'center' }
    worksheet.getCell(6, 17).alignment = { wrapText: false, vertical: 'middle', horizontal: 'center' }
    worksheet.getCell(6, 18).alignment = { wrapText: false, vertical: 'middle', horizontal: 'center' }
    worksheet.getCell(6, 19).alignment = { wrapText: false, vertical: 'middle', horizontal: 'center' }
    worksheet.getCell(6, 20).alignment = { wrapText: false, vertical: 'middle', horizontal: 'center' }
    worksheet.getCell(6, 21).alignment = { wrapText: false, vertical: 'middle', horizontal: 'center' }
    worksheet.getCell(6, 22).alignment = { wrapText: false, vertical: 'middle', horizontal: 'center' }
    worksheet.getCell(6, 23).alignment = { wrapText: false, vertical: 'middle', horizontal: 'center' }
    worksheet.getCell(6, 24).alignment = { wrapText: false, vertical: 'middle', horizontal: 'center' }
    worksheet.getCell(6, 25).alignment = { wrapText: false, vertical: 'middle', horizontal: 'center' }
    worksheet.getCell(6, 26).alignment = { wrapText: false, vertical: 'middle', horizontal: 'center' }
    worksheet.getCell(6, 27).alignment = { wrapText: false, vertical: 'middle', horizontal: 'center' }
    worksheet.getCell(6, 28).alignment = { wrapText: false, vertical: 'middle', horizontal: 'center' }
    worksheet.getCell(6, 29).alignment = { wrapText: false, vertical: 'middle', horizontal: 'center' }
    worksheet.getCell(6, 30).alignment = { wrapText: false, vertical: 'middle', horizontal: 'center' }
    worksheet.getCell(6, 31).alignment = { wrapText: false, vertical: 'middle', horizontal: 'center' }
    worksheet.getCell(6, 32).alignment = { wrapText: false, vertical: 'middle', horizontal: 'center' }

    worksheet.getCell(6, 1).border = { top: { style:'thin' }, left: { style:'thin' }, right: { style:'thin' }, bottom: { style: 'thin' } }
    worksheet.getCell(6, 2).border = { top: { style:'thin' }, left: { style:'thin' }, right: { style:'thin' }, bottom: { style: 'thin' } }
    worksheet.getCell(6, 3).border = { top: { style:'thin' }, left: { style:'thin' }, right: { style:'thin' }, bottom: { style: 'thin' } }
    worksheet.getCell(6, 4).border = { top: { style:'thin' }, left: { style:'thin' }, right: { style:'thin' }, bottom: { style: 'thin' } }
    worksheet.getCell(6, 5).border = { top: { style:'thin' }, left: { style:'thin' }, right: { style:'thin' }, bottom: { style: 'thin' } }
    worksheet.getCell(6, 6).border = { top: { style:'thin' }, left: { style:'thin' }, right: { style:'thin' }, bottom: { style: 'thin' } }
    worksheet.getCell(5, 7).border = { top: { style:'thin' }, left: { style:'thin' }, right: { style:'thin' }, bottom: { style: 'thin' } }
    worksheet.getCell(6, 7).border = { top: { style:'thin' }, left: { style:'thin' }, right: { style:'thin' }, bottom: { style: 'thin' } }
    worksheet.getCell(6, 8).border = { top: { style:'thin' }, left: { style:'thin' }, right: { style:'thin' }, bottom: { style: 'thin' } }
    worksheet.getCell(6, 9).border = { top: { style:'thin' }, left: { style:'thin' }, right: { style:'thin' }, bottom: { style: 'thin' } }
    worksheet.getCell(6, 10).border = { top: { style:'thin' }, left: { style:'thin' }, right: { style:'thin' }, bottom: { style: 'thin' } }
    worksheet.getCell(6, 11).border = { top: { style:'thin' }, left: { style:'thin' }, right: { style:'thin' }, bottom: { style: 'thin' } }
    worksheet.getCell(6, 12).border = { top: { style:'thin' }, left: { style:'thin' }, right: { style:'thin' }, bottom: { style: 'thin' } }
    worksheet.getCell(6, 13).border = { top: { style:'thin' }, left: { style:'thin' }, right: { style:'thin' }, bottom: { style: 'thin' } }
    worksheet.getCell(6, 14).border = { top: { style:'thin' }, left: { style:'thin' }, right: { style:'thin' }, bottom: { style: 'thin' } }
    worksheet.getCell(6, 15).border = { top: { style:'thin' }, left: { style:'thin' }, right: { style:'thin' }, bottom: { style: 'thin' } }
    worksheet.getCell(5, 16).border = { top: { style:'thin' }, left: { style:'thin' }, right: { style:'thin' }, bottom: { style: 'thin' } }
    worksheet.getCell(6, 16).border = { top: { style:'thin' }, left: { style:'thin' }, right: { style:'thin' }, bottom: { style: 'thin' } }
    worksheet.getCell(6, 17).border = { top: { style:'thin' }, left: { style:'thin' }, right: { style:'thin' }, bottom: { style: 'thin' } }
    worksheet.getCell(6, 18).border = { top: { style:'thin' }, left: { style:'thin' }, right: { style:'thin' }, bottom: { style: 'thin' } }
    worksheet.getCell(6, 19).border = { top: { style:'thin' }, left: { style:'thin' }, right: { style:'thin' }, bottom: { style: 'thin' } }
    worksheet.getCell(6, 20).border = { top: { style:'thin' }, left: { style:'thin' }, right: { style:'thin' }, bottom: { style: 'thin' } }
    worksheet.getCell(6, 21).border = { top: { style:'thin' }, left: { style:'thin' }, right: { style:'thin' }, bottom: { style: 'thin' } }
    worksheet.getCell(6, 22).border = { top: { style:'thin' }, left: { style:'thin' }, right: { style:'thin' }, bottom: { style: 'thin' } }
    worksheet.getCell(6, 23).border = { top: { style:'thin' }, left: { style:'thin' }, right: { style:'thin' }, bottom: { style: 'thin' } }
    worksheet.getCell(6, 24).border = { top: { style:'thin' }, left: { style:'thin' }, right: { style:'thin' }, bottom: { style: 'thin' } }
    worksheet.getCell(6, 25).border = { top: { style:'thin' }, left: { style:'thin' }, right: { style:'thin' }, bottom: { style: 'thin' } }
    worksheet.getCell(6, 26).border = { top: { style:'thin' }, left: { style:'thin' }, right: { style:'thin' }, bottom: { style: 'thin' } }
    worksheet.getCell(6, 27).border = { top: { style:'thin' }, left: { style:'thin' }, right: { style:'thin' }, bottom: { style: 'thin' } }
    worksheet.getCell(6, 28).border = { top: { style:'thin' }, left: { style:'thin' }, right: { style:'thin' }, bottom: { style: 'thin' } }
    worksheet.getCell(6, 29).border = { top: { style:'thin' }, left: { style:'thin' }, right: { style:'thin' }, bottom: { style: 'thin' } }
    worksheet.getCell(6, 30).border = { top: { style:'thin' }, left: { style:'thin' }, right: { style:'thin' }, bottom: { style: 'thin' } }
    worksheet.getCell(6, 31).border = { top: { style:'thin' }, left: { style:'thin' }, right: { style:'thin' }, bottom: { style: 'thin' } }
    worksheet.getCell(6, 32).border = { top: { style:'thin' }, left: { style:'thin' }, right: { style:'thin' }, bottom: { style: 'thin' } }

    worksheet.getCell(6, 1).font={ bold: true, name: "Times New Roman" }
    worksheet.getCell(6, 2).font = { bold: true, name: "Times New Roman" }
    worksheet.getCell(6, 3).font = { bold: true, name: "Times New Roman" }
    worksheet.getCell(6, 4).font = { bold: true, name: "Times New Roman" }
    worksheet.getCell(6, 5).font = { bold: true, name: "Times New Roman" }
    worksheet.getCell(6, 6).font = { bold: true, name: "Times New Roman" }
    worksheet.getCell(5, 7).font = { bold: true, name: "Times New Roman" }
    worksheet.getCell(6, 7).font = { bold: true, name: "Times New Roman" }
    worksheet.getCell(6, 8).font = { bold: true, name: "Times New Roman" }
    worksheet.getCell(6, 9).font = { bold: true, name: "Times New Roman" }
    worksheet.getCell(6, 10).font = { bold: true, name: "Times New Roman" }
    worksheet.getCell(6, 11).font = { bold: true, name: "Times New Roman" }
    worksheet.getCell(6, 12).font = { bold: true, name: "Times New Roman" }
    worksheet.getCell(6, 13).font = { bold: true, name: "Times New Roman" }
    worksheet.getCell(6, 14).font = { bold: true, name: "Times New Roman" }
    worksheet.getCell(6, 15).font = { bold: true, name: "Times New Roman" }
    worksheet.getCell(5, 16).font = { bold: true, name: "Times New Roman" }
    worksheet.getCell(6, 16).font = { bold: true, name: "Times New Roman" }
    worksheet.getCell(6, 17).font = { bold: true, name: "Times New Roman" }
    worksheet.getCell(6, 18).font = { bold: true, name: "Times New Roman" }
    worksheet.getCell(6, 19).font = { bold: true, name: "Times New Roman" }
    worksheet.getCell(6, 20).font = { bold: true, name: "Times New Roman" }
    worksheet.getCell(6, 21).font = { bold: true, name: "Times New Roman" }
    worksheet.getCell(6, 22).font = { bold: true, name: "Times New Roman" }
    worksheet.getCell(6, 23).font = { bold: true, name: "Times New Roman" }
    worksheet.getCell(6, 24).font = { bold: true, name: "Times New Roman" }
    worksheet.getCell(6, 25).font = { bold: true, name: "Times New Roman" }
    worksheet.getCell(6, 26).font = { bold: true, name: "Times New Roman" }
    worksheet.getCell(6, 27).font = { bold: true, name: "Times New Roman" }
    worksheet.getCell(6, 28).font = { bold: true, name: "Times New Roman" }
    worksheet.getCell(6, 29).font = { bold: true, name: "Times New Roman" }
    worksheet.getCell(6, 30).font = { bold: true, name: "Times New Roman" }
    worksheet.getCell(6, 31).font = { bold: true, name: "Times New Roman" }
    worksheet.getCell(6, 32).font = { bold: true, name: "Times New Roman" }

    students.forEach((row, rowIndex) => {
      const hk1 = row.scores.filter(item => item.batch.id === 1).sort((a, b) => a.subject.id - b.subject.id)
      const hk2 = row.scores.filter(item => item.batch.id === 2).sort((a, b) => a.subject.id - b.subject.id)

      worksheet.addRow([
        ++rowIndex,
        row.name,
        row.phone,
        row.province.name,
        row.school,
        row.method.name,
        ...hk1.map(item => item.score),
        ...hk2.map(item => item.score),
        row.tiktok === true ? 'Có' : 'Không',
        row.facebook === true ? 'Có' : 'Không',
        row.website === true ? 'Có' : 'Không',
        row.tu_van_hn === true ? 'Có' : 'Không',
        row.cuu_sv === true ? 'Có' : 'Không',
        row.sv === true ? 'Có' : 'Không',
        row.nguoi_than === true ? 'Có' : 'Không',
        row.khac === true ? 'Có' : 'Không'
      ])
    })

    const blob = await workbook.xlsx.writeBuffer()
    // Tạo URL cho blob và tạo một thẻ a để kích hoạt tải về
    const url = window.URL.createObjectURL(new Blob([blob]))
    const a = document.createElement("a")
    a.href = url
    a.download = "BÁO CÁO THỐNG KÊ HỌC SINH ĐĂNG KÝ XÉT TUYỂN.xlsx"
    document.body.appendChild(a)
    a.click()
    // Xóa thẻ a sau khi tải xong
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }

  return (
    <div>
      <button onClick={handleExport} className='flex items-center gap-2 font-bold border border-[#41B06E] px-4 py-2 rounded-md m-3 hover:bg-[#41B06E]/30 duration-300'>
        <SiMicrosoftexcel color='#41B06E'/>
        Xuất Excel
      </button>
    </div>
  )
}

export default ExportExcel
