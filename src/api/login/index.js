import axios from "axios"

export const login = data => axios.post(`http://127.0.0.1/login`, data)
