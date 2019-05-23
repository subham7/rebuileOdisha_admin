import React, { Component } from "react"
import { connect } from "react-redux"

// API
import { getProjects } from "reduxHelper"

// Component
import { Loader } from "atoms"
import { ShowProject } from "templates"

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.loadData()
  }

  loadData = () => {
    this.props.getProjects()
  }

  render() {
    if (this.props.getProjectsData.isLoaded)
      return <ShowProject data={this.props.getProjectsData.response.data} />
    else return <Loader />
  }
}

const mapStateToProps = state => ({
  getProjectsData: state.getProjects
})

const mapDispatchToProps = dispatch => ({
  getProjects: () => dispatch(getProjects.action())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
