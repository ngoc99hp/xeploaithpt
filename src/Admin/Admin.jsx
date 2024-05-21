import { useEffect, useState } from 'react'
import { SignOutButton } from '@clerk/clerk-react'
import { useUser, useAuth } from "@clerk/clerk-react"

import TableStudents from './TableStudents'

const Admin = () => {
  const { user } = useUser()
  const { getToken } = useAuth()
  const [students, setStudents] = useState([])

  const isRole = user.publicMetadata.magv === '1234567890'
  const [isFetching, setIsFetching] = useState(false)
  useEffect(() => {
    const callApi = async () => {
      setIsFetching(true)
      await fetch(
        `${import.meta.env.VITE_GET_INFO_LIST_STUDENTS}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${await getToken({
              template: import.meta.env.VITE_TEMPLATE_THPT_ADMIN
            })}`
          }
        }
      )
        .then((res) => res.json())
        .then((res) => setStudents(res.result))
        .then((res) => setIsFetching(false))
    }
    callApi()
  }, [])

  return (
    <div>
      <div className='w-full text-right px-4'>
        <SignOutButton/>
      </div>
      <h2 className='text-center text-[#666] mb-5'>Danh sách học sinh đăng ký</h2>
      {isRole
        ?
        <TableStudents students={students} isFetching={isFetching}/>
        :
        <>
          <h1>Tài khoản không có quyền</h1>
        </>
      }
    </div>
  )
}

export default Admin