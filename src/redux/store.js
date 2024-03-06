import { configureStore } from '@reduxjs/toolkit'
import infoPointReducer from './infoPointSlice'

export default configureStore({
  reducer: {
    infoPoint: infoPointReducer
  }
})