import React, { Component } from "react"
import { connect } from "react-redux"
import Router from "next/router"
import { token } from "utils"

// API
import { login } from "reduxHelper"

// Component
import { LoginForm } from "forms"
import { Button } from "atoms"
import { Login } from "templates"

class App extends Component {
  constructor(props) {
    super(props)
  }

  loginUser = () => {
    this.props
      .login(this.props.form.LoginForm.values)
      .then(res => {
        return token.set(res.token)
      })
      .then(_ => {
        Router.push("/dashboard/project")
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Login>
        <LoginForm />
        <Button onClick={this.loginUser}>Login</Button>
      </Login>
    )
  }
}

const mapStateToProps = state => ({
  form: state.form,
  loginData: state.login
})

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(login.action(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
