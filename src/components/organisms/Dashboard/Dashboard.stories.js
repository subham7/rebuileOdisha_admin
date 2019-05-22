import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import Dashboard from "./Dashboard.organism"
import {
  MdHome,
  MdPerson,
  MdWork,
  MdInsertChart,
  MdForum
} from "react-icons/md"

const sidebarElement = [
  {
    icon: <MdHome />,
    text: "Home",
    url: "/dashboard/drives"
  },
  {
    icon: <MdPerson />,
    text: "Profile",
    url: "/dashboard/profile"
  },
  {
    icon: <MdWork />,
    text: "Drives",
    url: "/dashboard/drives"
  },
  {
    icon: <MdForum />,
    text: "Notice",
    url: "/dashboard/notice"
  },
  {
    icon: <MdInsertChart />,
    text: "Analytics",
    url: "Home"
  }
]

const data = [
  {
    heading: "Heading",
    message: "Message"
  },
  {
    heading: "Heading",
    message: "Message"
  },
  {
    heading: "Heading",
    message: "Message"
  },
  {
    heading: "Heading",
    message: "Message"
  },
  {
    heading: "Heading",
    message: "Message"
  },
  {
    heading: "Heading",
    message: "Message"
  },
  {
    heading: "Heading",
    message: "Message"
  },
  {
    heading: "Heading",
    message: "Message"
  },
  {
    heading: "Heading",
    message: "Message"
  },
  {
    heading: "Heading",
    message: "Message"
  },
  {
    heading: "Heading",
    message: "Message"
  }
]

storiesOf("Dashboard", module).add("Dashboard View", () => (
  <Dashboard sidebarElement={sidebarElement} notification={data}>
    Hello
  </Dashboard>
))
