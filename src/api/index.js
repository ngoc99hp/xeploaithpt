import axios from "axios"

export const getProvinceApi = async () => {
  const res = await axios.get(import.meta.env.VITE_GET_PROVINCES)
  return res.data
}

export const getMajorApi = async () => {
  const res = await axios.get(import.meta.env.VITE_GET_MAJOR)
  return res.data
}

export const insertDataApi = async (data) => {
  const res = await axios.post(import.meta.env.VITE_POST_STUDENT, data)
  return res
}
