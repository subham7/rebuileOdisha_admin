import React from "react"
import { Upload, Icon, message as Message } from "antd"

const Dragger = Upload.Dragger

const Upload1 = props => {
  const action = {
    ...props.config,
    onChange(info) {
      const status = info.file.status
      if (status !== "uploading") {
        console.log(info.file, info.fileList)
      }
      if (status === "done") {
        Message.success(`${info.file.name} file uploaded successfully.`)
      } else if (status === "error") {
        Message.error(`${info.file.name} file upload failed.`)
      }
    }
  }

  return (
    <div>
      <p style={{ color: "#3062cf" }}>{props.label}</p>
      <Dragger {...action}>
        <p className="ant-upload-drag-icon">
          <Icon type="inbox" />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading
          company data or other band files
        </p>
      </Dragger>
    </div>
  )
}

export default Upload1
