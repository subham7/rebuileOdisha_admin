import React from "react"
import { connect } from "react-redux"
// import { startClock, serverRenderClock } from '../src/store'
import Router from "next/router"

// Component
import Login from "./login"
import { Loader } from "atoms"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { renderLogin: false }
  }
  static getInitialProps({ reduxStore, req }) {
    // console.log(req)
    const isServer = !!req
    // reduxStore.dispatch(serverRenderClock(isServer))

    return {}
  }

  componentDidMount() {
    if (localStorage.getItem("admin-api-key")) Router.push("/admin/dashboard/project")
    else this.setState({ renderLogin: true })
  }

  render() {
    if (this.state.renderLogin) return <Login />
    else return <Loader />
  }
}

const mapStateToProps = state => ({})
// Example Syntax for writing dispatch
const mapDispatchToProps = dispatch => ({})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
