import React, { Component } from "react"
import Router from "next/router"
import { token } from "utils"

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    token.remove()
    Router.push("/admin")
  }

  render() {
    return null
  }
}

export default App
