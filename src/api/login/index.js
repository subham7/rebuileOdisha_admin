import axios from "axios"

export const login = data => axios.post(`http://192.168.1.11/login`, data)
