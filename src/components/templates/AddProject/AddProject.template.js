import React from "react"
import { Paper } from "atoms"

const paperStyle = { padding: "50px 200px" }

const AddProject = props => (
  <Paper style={paperStyle}>
    {props.children}
  </Paper>
)

export default AddProject
