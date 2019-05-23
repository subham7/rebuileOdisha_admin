import React from "react"
import { token } from "utils"

// Component
import { Loader } from "atoms"

export default function init(WrappedComponent) {
  class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = { setToken: false }
    }

    componentDidMount() {
      token.setFromStorage()
      this.setState({ setToken: true })
    }

    render() {
      if (this.state.setToken) return <WrappedComponent {...this.props} />
      else return <Loader />
    }
  }

  return App
}
