import React, { Component } from "react"
import { withRouter } from "next/router"
import wrapper from "./wrapper"

// Component
import { Dashboard } from "organisms"
import NotFound from "./.notFound"
import Project from "./.project"
import Reports from "./.reports"

// Icons
import { MdFolderShared, MdPieChart } from "react-icons/md"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { tabValue: 0 }
  }

  sidebar = [
    {
      icon: <MdFolderShared />,
      text: "Project",
      url: "/admin/dashboard/project"
    }
    // {
    //   icon: <MdPieChart />,
    //   text: "Reports",
    //   url: "/admin/dashboard/reports"
    // }
  ]

  routeFile = route => {
    switch (route) {
      case "project":
        return <Project tabValue={this.state.tabValue} />
      case "reports":
        return <Reports tabValue={this.state.tabValue} />
      default:
        return <NotFound />
    }
  }

  getTabData = route => {
    switch (route) {
      case "project":
        return [
          { label: "All Projects" },
          { label: "Add Project" }
          //{ label: "Upload Image" }
        ]
      case "reports":
        return [{ label: "Report" }, { label: "CMRF" }, { label: "OSDMA" }]
      default:
        return [{ label: "" }]
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
