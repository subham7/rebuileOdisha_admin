import React from "react"
import { Paper } from "atoms"
import { Upload } from "molecules"

const paperStyle = { padding: "50px 200px" }

const UploadImage = props => (
  <Paper style={paperStyle}>
    <Upload label="Upload Image" config={props.config} />
    {props.children}
  </Paper>
)

export default UploadImage
