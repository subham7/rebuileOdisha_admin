import React from "react"
import { token } from "utils"
import Router from "next/router"

// Component
import { Loader } from "atoms"

export default function init(WrappedComponent) {
  class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = { setToken: false }
    }

    componentDidMount() {
      if (!localStorage.getItem("admin-api-key")) {
        Router.push("/")
      }
      token.setFromStorage()
      this.setState({ setToken: true })
    }

    render() {
      if (this.state.setToken && localStorage.getItem("admin-api-key"))
        return <WrappedComponent {...this.props} />
      else return <Loader />
    }
  }

  return App
}
