import axios from "axios"
import ROOTURL from "./../ROOTURL"

export const addProject = data => {
  data.StartDate = data.StartDate.format("YYYY-MM-DD")
  data.EndDate = data.EndDate.format("YYYY-MM-DD")
  console.log(data)

  return axios.post(`${ROOTURL}/newprojects`, data)
}
