import React, { Component } from "react"
import { withRouter } from "next/router"
import wrapper from "./wrapper"

// Component
import { Dashboard } from "organisms"
import NotFound from "./.notFound"
import Project from "./.project"

// Icons
import { MdDescription } from "react-icons/md"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { tabValue: 0 }
  }

  sidebar = [
    {
      icon: <MdDescription />,
      text: "Project",
      url: "/dashboard/project"
    }
  ]

  routeFile = route => {
    switch (route) {
      case "project":
        return <Project tabValue={this.state.tabValue} />
      default:
        return <NotFound />
    }
  }

  getTabData = route => {
    switch (route) {
      case "project":
        return [{ label: "All Projects" }, { label: "Add Project" }]
      default:
        return <NotFound />
    }
  }

  handleTabValue = (event, newValue) => this.setState({ tabValue: newValue })

  render() {
    return (
      <Dashboard
        sidebarElement={this.sidebar}
        displayNotification={false}
        tabValue={this.state.tabValue}
        tabData={this.getTabData(this.props.router.query.page)}
        handleTabValue={this.handleTabValue}
        name="Admin"
      >
        {this.routeFile(this.props.router.query.page)}
      </Dashboard>
    )
  }
}

export default wrapper(withRouter(App))
