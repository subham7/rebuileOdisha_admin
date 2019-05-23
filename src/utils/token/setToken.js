import axios from "axios"

const setToken = token => {
  localStorage.setItem("admin-api-key", token)
  axios.defaults.headers.common["x-api-key"] = token
  console.log(axios.defaults.headers.common["x-api-key"])
}

export default setToken
