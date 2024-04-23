import { Navigate, Route, Routes } from 'react-router'
import Home from './Home/Home'
import Admin from './Admin/Admin'
import Login from './Login/Login'
import { Suspense } from "react"
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  useUser,
} from "@clerk/clerk-react"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/admin' element={
        <>
          <SignedIn>
            <Suspense fallback={<div className="loading"> Loading... </div>}>
              <Admin />
            </Suspense>
          </SignedIn>
          <SignedOut>
            <Login />
          </SignedOut>
        </>
      }
      />
    </Routes>
  )
}

export default App
