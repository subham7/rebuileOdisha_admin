import React from "react"
import AddProject from "./.addProject"
import ShowProject from "./.showProject"

const App = props => (
  <div>
    {props.tabValue === 0 && <ShowProject />}
    {props.tabValue === 1 && <AddProject />}
  </div>
)

export default App
