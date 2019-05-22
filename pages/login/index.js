import React, { Component } from "react"

// Component
import { LoginForm } from "forms"
import { Button } from "atoms"
import { Login } from "templates"

class App extends Component {
  render() {
    return (
      <Login>
        <LoginForm />
        <Button>Login</Button>
      </Login>
    )
  }
}

export default App
