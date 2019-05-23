import React from "react"
import AddProject from "./.addProject"
import ShowProject from "./.showProject"
import UploadImage from "./.uploadImage"

const App = props => (
  <div>
    {props.tabValue === 0 && <ShowProject />}
    {props.tabValue === 1 && <AddProject />}
    {props.tabValue === 2 && <UploadImage />}
  </div>
)

export default App
