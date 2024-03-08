import axios from "axios"

export const getProvinceApi = async () => {
  const res = await axios.get(import.meta.env.VITE_GET_PROVINCES)
  return res.data
}

export const getMajorApi = async () => {
  const res = await axios.get(import.meta.env.VITE_GET_MAJOR)
  return res.data
}

// export const insertDataApi = async (data) => {
//   const res = await axios.post(, data)
//   return res
// }


export const insertDataApi = async (objects) => {
  return await axios({
    url: import.meta.env.VITE_POST_STUDENT,
    method: "post",
    data: {objects},
    headers: {
      "content-type": "Application/json",
    },
  });
};