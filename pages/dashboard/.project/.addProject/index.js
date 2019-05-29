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
import { Upload } from "antd"
import { AddProjectForm } from "forms"
import { Loader, Button, Message } from "atoms"
import { AddProject } from "templates"
import Field from "./addProject.data"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { fileList: [], formValue: {} }
  }

  componentDidMount() {
    this.loadData()
  }

  loadData = () => {
    this.props.allDistrictAutofill()
    this.props.allDepartmentAutofill()
  }

  /*
   * Binds image and form value from redux to FormData
   * API request to add project
   */
  uploadData = (e, data) => {
    e.preventDefault()

    let formData = new FormData()
    if (Object.keys(this.state.fileList).length != 0) {
      formData.append("image", this.state.fileList[0].originFileObj)
    }
    Object.keys(data).forEach(key => formData.append(key, data[key]))

    this.props
      .addProject(formData)
      .then(_ => {
        Message.success("Project added successfully")
        this.setState({ formValue: {} })
        //this.props.destroyReduxForm("addProjectForm")
        this.setState({ fileList: [] })
      })
      .catch(err => {
        Message.error("There was a problem")
      })
  }

  handleUpload = ({ fileList }) => {
    this.setState({ fileList })
  }

  onSubmit = () => {
    this.props
      .addProject(this.state.formValue)
      .then(_ => {
        Message.success("Project added successfully")
      })
      .catch(_ => Message.error("There was a problem"))
  }

  handleChange = e => {
    this.setState({
      formValue: { ...this.state.formValue, [e.target.name]: e.target.value }
    })
  }

  handleValue = (value, name) => {
    this.setState({ formValue: { ...this.state.formValue, [name]: value } })
  }

  handleData = (date, dateString, name) => {
    this.setState({
      formValue: { ...this.state.formValue, [name]: dateString }
    })
  }

  districtOnFocus = _ => {
    this.setState({
      formValue: { ...this.state.formValue, GP: "" }
    })
    this.setState({
      formValue: { ...this.state.formValue, Block: "" }
    })
  }

  blockOnFocus = districtID => {
    this.props.blockOfDistrictAutofill(districtID)
    this.setState({
      formValue: { ...this.state.formValue, GP: "" }
    })
  }

  gpOnFocus = blockID => {
    this.props.gpOfBlockAutofill(blockID)
  }

  // uploadProps = {
  //   listType: "picture-card",
  //   fileList: this.state.fileList,
  //   onChange: this.handleUpload,
  //   beforeUpload: () => false,
  //   multiple: false
  // }

  render() {
    if (
      this.props.allDistrictAutofillData.isLoaded &&
      this.props.allDepartmentAutofillData.isLoaded
      // this.props.gpAutofillData
    )
      return (
        <AddProject>
          {/*<AddProjectForm handleBlur={this.handleBlur} />*/}
          <Field that={this} />
          <Upload
            listType="picture-card"
            fileList={this.state.fileList}
            onChange={this.handleUpload}
            beforeUpload={() => false}
          >
            Upload
          </Upload>
          <br />
          <Button
            onClick={
              e => this.uploadData(e, this.state.formValue)
              //(this.props.form.addProjectForm.values)
            }
            //onClick={this.onSubmit}
          >
            Submit
          </Button>
        </AddProject>
      )
    else return <Loader />
  }
}

const mapStateToProps = state => ({
  form: state.form,
  allDistrictAutofillData: state.allDistrictAutofill,
  allDepartmentAutofillData: state.allDepartmentAutofill,
  blockOfDistrictAutofillData: state.blockOfDistrictAutofill,
  gpOfBlockAutofillData: state.gpOfBlockAutofill
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
  allDepartmentAutofill: () => dispatch(allDepartmentAutofill.action()),
  addProject: data => dispatch(addProject.action(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
