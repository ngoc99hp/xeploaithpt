import { createSlice } from '@reduxjs/toolkit'

export const infoPointSlice = createSlice({
  name: 'infoPoint',
  initialState: {
    currentData: null
  },
  reducers: {
    update: (state, action) => {
      state.currentData = action.payload
    }
  }
})

export const { update } = infoPointSlice.actions
export default infoPointSlice.reducer