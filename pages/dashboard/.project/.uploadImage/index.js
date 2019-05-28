import React, { Component } from "react"
import { connect } from "react-redux"
import axios from "axios"
import { Upload } from "antd"

// API
import { projectAutofill } from "reduxHelper"

// Component
import { UploadImageForm } from "forms"
import { Loader, Button } from "atoms"
import { UploadImage } from "templates"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { uploadStatus: false, fileList: [] }
  }

  componentDidMount() {
    this.loadData()
  }

  loadData = () => {
    this.props.projectAutofill()
  }

  handleUpload = ({ fileList }) => {
    console.log("fileList", fileList)
    this.setState({ fileList })
  }

  handleSubmit = (e, data) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append("image", this.state.fileList[0].originFileObj)
    Object.keys(data).forEach(key => formData.append(key, data[key]))
    axios
      .post("http://192.168.1.11/api/upload/bulkproject", formData)
      .then(res => {
        console.log("res", res)
      })
      .catch(err => {
        console.log("err", err)
      })
  }

  render() {
    if (this.props.projectAutofillData.isLoaded)
      return (
        <div>
          <UploadImageForm />
          <Upload
            listType="picture-card"
            fileList={this.state.fileList}
            onChange={this.handleUpload}
            beforeUpload={() => false}
          >
            Upload
          </Upload>
          <Button
            onClick={e =>
              this.handleSubmit(e, this.props.form.uploadImageForm.values)
            }
          >
            Submit
          </Button>
        </div>
      )
    else return <Loader />
  }
}

const mapStateToProps = state => ({
  form: state.form,
  projectAutofillData: state.projectAutofill
})

const mapDispatchToProps = dispatch => ({
  projectAutofill: () => dispatch(projectAutofill.action())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
