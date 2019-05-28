import axios from "axios"
import ROOTURL from "./../ROOTURL"

export const allDistrictAutofill = () => axios.get(`${ROOTURL}/districts`)

export const allBlockAutofill = () => axios.get(`${ROOTURL}/blocks`)

export const blockOfDistrictAutofill = districtID =>
  axios.get(`${ROOTURL}/districts/${districtID}/blocks`)

export const gpOfBlockAutofill = blockID =>
  axios.get(`${ROOTURL}/blocks/${blockID}/grampanchayats`)

export const allDepartmentAutofill = () => axios.get(`${ROOTURL}/departments`)

export const projectAutofill = () => axios.get(`${ROOTURL}/newprojects`)
