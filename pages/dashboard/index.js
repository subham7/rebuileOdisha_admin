import React, { Component } from "react"
import { withRouter } from "next/router"

// Component
import { Dashboard } from "organisms"
import AddProject from "./.addProject"
import UploadImage from "./.uploadImage"
import NotFound from "./.notFound"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  sidebar = [
    {
      icon: <div>H</div>,
      text: "Home",
      url: "/dashboard/add-project"
    }
  ]

  routeFile = route => {
    switch (route) {
      case "add-project":
        return <AddProject />
      case "upload-image":
        return <UploadImage />
      default:
        return <NotFound />
    }
  }

  render() {
    return (
      <Dashboard
        sidebarElement={this.sidebar}
        displayNotification={false}
        displayTabs={false}
        name="Admin"
      >
        {this.routeFile(this.props.router.query.page)}
      </Dashboard>
    )
  }
}

export default withRouter(App)
