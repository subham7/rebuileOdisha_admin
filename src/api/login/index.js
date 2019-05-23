import axios from "axios"
import ROOTURL from "./../ROOTURL"

export const login = data => axios.post(`http://192.168.1.11/login`, data)
