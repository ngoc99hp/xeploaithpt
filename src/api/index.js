import axios from "axios"

export const getProvinceApi = async () => {
  const res = await axios.get(import.meta.env.VITE_GET_PROVINCE)
  return res.data
};

export const getMajor = async () => {
  const res = await axios.get(import.meta.env.VITE_GET_MAJOR)
  return res.data
};
