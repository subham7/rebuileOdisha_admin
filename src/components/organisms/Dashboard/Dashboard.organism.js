import React from "react"
import { Sidebar, Navbar } from "molecules"
import "./style.css"

const conStyle = {
  position: "relative",
  width: "100%"
}

const link = [
  {
    label: "Logout",
    link: "/logout"
  }
]

const Dashboard = props => {
  return (
    <div className="dashboard">
      <div className="sidebar-wrapper">
        <Sidebar element={props.sidebarElement} />
      </div>
      <div className="content-wrapper">
        <Navbar
          tabs={props.tabs}
          notification={props.notification}
          displayTopNavbar={props.displayTopNavbar}
          displayNotification={props.displayNotification}
          displayTabs={props.displayTabs}
          tabLink={props.tabLink}
          style={conStyle}
          tabValue={props.tabValue}
          tabData={props.tabData}
          handleTabValue={props.handleTabValue}
          name={props.name}
          //menuItem={props.menuItem}
          menuItem={link}
        />
        <div className="dashboard-content" style={conStyle}>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
