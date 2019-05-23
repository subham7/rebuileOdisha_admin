import React from "react"
import { Paper, Alert } from "atoms"
import { Upload } from "molecules"

const paperStyle = { padding: "50px 200px" }

const UploadImage = props => (
  <Paper style={paperStyle}>
    <Alert message="Under Development" type="error" />
    <br />
    <br />
    <Upload label="Upload Image" config={props.config} />
    {props.children}
  </Paper>
)

export default UploadImage
