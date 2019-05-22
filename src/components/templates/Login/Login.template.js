import React from "react"
import { Row, Col } from "antd"
import { Radio, Title, Paper, Logo } from "atoms"
import { FormStructure } from "molecules"
import "./style.css"

const someFunc = () => {
  console.log("adfv")
}

const Login = props => {
  return (
    <div className="login">
      <div className="login-template-form-container">
        <Paper
          style={{
            padding: "50px",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2) ",
            borderRadius: "5px"
          }}
        >
          <Logo type="full" />
          {props.children}
          <div className="checkbox-layer" />
        </Paper>
      </div>
    </div>
  )
}

export default Login
