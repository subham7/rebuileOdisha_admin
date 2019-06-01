import axios from "axios"

export const login = data =>
  axios.post(`http://rebuild.odisha.gov.in/login`, data)
