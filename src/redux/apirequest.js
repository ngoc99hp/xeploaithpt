import axios from 'axios'

import {
  insertDataError, insertDataSuccess, insertDataStart
} from './insertDataSlice'


// export const loginAdminApi = async (data, dispatch) => {
//   dispatch(insertDataStart())
//   try {
//     const res = await axios.post(import.meta.env.VITE_POST_STUDENT, data)
//     dispatch(insertDataSuccess(res.data))
//   } catch (error) {
//     dispatch(insertDataError())
//   }
// }