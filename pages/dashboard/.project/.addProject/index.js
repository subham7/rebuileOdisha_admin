import React, { Component } from "react"
import { connect } from "react-redux"
import { destroy } from "redux-form"

// API
import {
  districtAutofill,
  blockAutofill,
  gpAutofill,
  addProject
} from "reduxHelper"

// Components
import { AddProjectForm } from "forms"
import { Loader, Button, Message } from "atoms"
import { AddProject } from "templates"

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.loadData()
  }

  loadData = () => {
    this.props.districtAutofill()
    this.props.blockAutofill()
    this.props.gpAutofill()
  }

  uploadData = () => {
    this.props
      .addProject(this.props.form.addProjectForm.values)
      .then(_ => Message.success("Project added successfully"))
      .catch(err => Message.error("There was a problem"))
    this.props.destroyReduxForm("addProjectForm")
  }

  render() {
    if (
      this.props.districtAutofillData.isLoaded &&
      this.props.blockAutofillData.isLoaded &&
      this.props.gpAutofillData
    )
      return (
        <AddProject>
          <AddProjectForm />
          <Button onClick={() => this.uploadData()}>Submit</Button>
        </AddProject>
      )
    else return <Loader />
  }
}

const mapStateToProps = state => ({
  form: state.form,
  districtAutofillData: state.districtAutofill,
  blockAutofillData: state.blockAutofill,
  gpAutofillData: state.gpAutofill
})

const mapDispatchToProps = dispatch => ({
  destroyReduxForm: form => dispatch(destroy(form)),
  districtAutofill: () => dispatch(districtAutofill.action()),
  blockAutofill: () => dispatch(blockAutofill.action()),
  gpAutofill: () => dispatch(gpAutofill.action()),
  addProject: data => dispatch(addProject.action(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
