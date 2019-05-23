import React, { Component } from "react"
import { connect } from "react-redux"

// API
import { projectAutofill } from "reduxHelper"

// Component
import { UploadImageForm } from "forms"
import { Loader, Button } from "atoms"
import { UploadImage } from "templates"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { uploadStatus: false }
  }

  componentDidMount() {
    this.loadData()
  }

  handleUpload = (file, fileList) => {
    this.setState({ uploadStatus: true })
    console.log(this.state)

    return false
  }

  formValues = () => this.props.form.uploadImageForm.values

  loadData = () => {
    this.props.projectAutofill()
  }

  render() {
    if (this.props.projectAutofillData.isLoaded)
      return (
        <UploadImage
          config={{
            action: "http://192.168.1.11/api/newprojectimages",
            multiple: false,
            name: "image",
            beforeUpload: this.handleUpload,
            data: { data: () => this.formValues }
          }}
        >
          <UploadImageForm />
          <Button onClick={this.handleUpload}>Submit</Button>
        </UploadImage>
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
