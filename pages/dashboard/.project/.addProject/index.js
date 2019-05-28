import React, { Component } from "react"
import { connect } from "react-redux"
import { destroy } from "redux-form"

// API
import {
  allDistrictAutofill,
  allBlockAutofill,
  blockOfDistrictAutofill,
  gpOfBlockAutofill,
  allDepartmentAutofill,
  addProject
} from "reduxHelper"

// Components
import { AddProjectForm } from "forms"
import { Loader, Button, Message } from "atoms"
import { AddProject } from "templates"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { fileList: [] }
  }

  componentDidMount() {
    this.loadData()
  }

  loadData = () => {
    // this.props.districtAutofill()
    // this.props.blockAutofill()
    // this.props.gpAutofill()
  }

  /*
   * Binds image and form value from redux to FormData
   * API request to add project
   */
  uploadData = data => {
    e.preventDefault()
    let formData = new FormData()
    formData.append("image", this.state.fileList[0])
    Object.keys(data).forEach(key => formData.append(key, data[key]))
    this.props
      .addProject(formData)
      .then(_ => {
        Message.success("Project added successfully")
        this.props.destroyReduxForm("addProjectForm")
        this.setState({ fileList: [] })
      })
      .catch(_ => Message.error("There was a problem"))
  }

  handleUpload = ({ fileList }) => {
    console.log("fileList", fileList)
    this.setState({ fileList })
  }

  handleBlur = {
    blockFun: () => {
      console.log("block fun")
    }
  }

  // uploadProps = {
  //   listType: "picture-card",
  //   fileList: this.state.fileList,
  //   onChange: this.handleUpload,
  //   beforeUpload: () => false,
  //   multiple: false
  // }

  render() {
    // if (
    //   this.props.districtAutofillData.isLoaded &&
    //   this.props.blockAutofillData.isLoaded &&
    //   this.props.gpAutofillData
    // )
    return (
      <AddProject
        listType="picture-card"
        fileList={this.state.fileList}
        onChange={this.handleUpload}
        beforeUpload={() => false}
        multiple={false}
      >
        <AddProjectForm handleBlur={this.handleBlur} />
        <Button
          onClick={() => this.uploadData(this.props.form.addProjectForm.values)}
        >
          Submit
        </Button>
      </AddProject>
    )
    // else return <Loader />
  }
}

const mapStateToProps = state => ({
  form: state.form
  // districtAutofillData: state.districtAutofill,
  // blockAutofillData: state.blockAutofill,
  // gpAutofillData: state.gpAutofill
})

const mapDispatchToProps = dispatch => ({
  destroyReduxForm: form => dispatch(destroy(form)),
  allDistrictAutofill: () => dispatch(allDistrictAutofill.action()),
  allBlockAutofill: () => dispatch(allBlockAutofill.action()),
  blockOfDistrictAutofill: districtID =>
    dispatch(blockOfDistrictAutofill.action(districtID)),
  gpOfBlockAutofill: blockID => dispatch(gpOfBlockAutofill.action(blockID)),
  allDepartmentAutofill: () => allDepartmentAutofill.action(),
  addProject: data => dispatch(addProject.action(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
