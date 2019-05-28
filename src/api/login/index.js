import axios from "axios"

export const login = data => axios.post(`http://192.168.43.3/login`, data)
