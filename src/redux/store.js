import { configureStore } from '@reduxjs/toolkit'
import infoPointReducer from './infoPointSlice'
import infoPersonalReducer from './infoPersonalSlice'

export default configureStore({
  reducer: {
    infoPoint: infoPointReducer,
    infoPersonal: infoPersonalReducer
  }
})