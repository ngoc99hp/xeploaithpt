import axios from "axios"


export const getProvinceApi =async () => {
  const response = await axios.get(import.meta.env.VITE_GET_PROVINCE)
  return response.data
}