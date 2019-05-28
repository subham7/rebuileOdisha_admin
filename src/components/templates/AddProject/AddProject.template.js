import React from "react"
import { Paper } from "atoms"
import { Upload } from "molecules"

const paperStyle = { padding: "50px 200px" }

const AddProject = props => (
  <Paper style={paperStyle}>
    {props.children}
    <Upload
      listType={props.listType}
      fileList={props.fileList}
      onChange={props.onChange}
      beforeUpload={props.beforeUpload}
      multiple={props.multiple}
    />
  </Paper>
)

export default AddProject
