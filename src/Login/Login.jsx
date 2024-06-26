import { useState } from 'react'
import { useSignIn } from '@clerk/clerk-react'
import { toast } from 'react-toastify'

const Login = () => {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const { isLoaded, signIn, setActive } = useSignIn()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    if (account === '' || password === '') {
      toast.warning('Tài khoản hoặc mật khẩu không được để trống!')
    } else {
      await signIn
        .create({
          identifier: account,
          password
        })
        .then(async (result) => {
          if (result.status === "complete") {
            setActive({ session: result.createdSessionId })
            toast.success('Đăng nhập thành công!')
          }
        })
        .catch((err) => {
          toast.error('Tài khoản hoặc mật khẩu không đúng!')
        })
    }
    setLoading(false)
  }

  return (
    <div className='flex items-center justify-center h-[100vh] w-full bg-primary/20'>
      <form className='p-4 w-[40%] border rounded-md bg-white' onSubmit={handleSubmit}>
        <div className="mb-4">
          <div className='mb-4'>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-[#666]">Tài khoản</label>
            <input value={account} onChange={(e) => setAccount(e.target.value)} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Tài khoản..." required />
          </div>
          <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-[#666]">Mật khẩu</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Mật khẩu..." required />
          </div>
        </div>
        {loading ?
          <>
            <button disabled className="w-full sm:w-auto px-4 py-2 bg-primary text-white rounded-md dark:bg-primary/80 dark:hover:bg-primary">
              <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
              </svg>
              Đang đăng nhập...
            </button>
          </>
          :
          <>
            <button type='submit' className='w-full sm:w-auto px-4 py-2 bg-primary text-white rounded-md dark:bg-primary/80 dark:hover:bg-primary'>Đăng nhập</button>
          </>
        }
      </form>
    </div>
  )
}

export default Login