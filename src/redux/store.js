import { configureStore } from '@reduxjs/toolkit'
import infoPointReducer from './infoPointSlice'
import infoPersonalReducer from './infoPersonalSlice'
import insertDataReducer from './insertDataSlice'

export default configureStore({
  reducer: {
    infoPoint: infoPointReducer,
    infoPersonal: infoPersonalReducer,
    insertData: insertDataReducer
  }
})