import React from "react"
import { connect } from "react-redux"
// import { startClock, serverRenderClock } from '../src/store'
import Router from "next/router"
import Login from "./login"

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  static getInitialProps({ reduxStore, req }) {
    // console.log(req)
    const isServer = !!req
    // reduxStore.dispatch(serverRenderClock(isServer))

    return {}
  }

  componentDidMount() {
    // Add redux api here
    // this.props.loginDispatch({uid:"b216008", pwd:"Ankit16@19"}).then(res=>{
    //   console.log(res)
    // }).catch(err =>{
    //   console.log(err)
    // })
  }

  render() {
    return <Login />
  }
}

const mapStateToProps = state => ({})
// Example Syntax for writing dispatch
const mapDispatchToProps = dispatch => ({})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
