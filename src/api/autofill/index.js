import axios from "axios"
import ROOTURL from "./../ROOTURL"

export const districtAutofill = () => axios.get(`${ROOTURL}/districts`)

export const blockAutofill = () => axios.get(`${ROOTURL}/blocks`)

export const gpAutofill = () => axios.get(`${ROOTURL}/gp`)

export const projectAutofill = () => axios.get(`${ROOTURL}/newprojects`)
