import axios from "axios"
import ROOTURL from "./../ROOTURL"

export const addProject = data => {
  console.log(data)

  // data.StartDate = data.StartDate.format("YYYY-MM-DD")
  // data.EndDate = data.EndDate.format("YYYY-MM-DD")
  return axios.post(`${ROOTURL}/newprojects`, data)
}

export const getProjects = () => axios.get(`${ROOTURL}/newprojects`)
