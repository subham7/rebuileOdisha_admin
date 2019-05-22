import React from "react"
import { reduxForm, Field } from "redux-form"

import { Input } from "atoms"
import { FormStructure } from "molecules"

const Form = ({ handleSubmit }) => {
  const field = [
    { field: <Field name="username" label="Username" component={Input} /> },
    {
      field: (
        <Field
          name="password"
          type="password"
          label="Password"
          component={Input}
        />
      )
    }
  ]

  return (
    <FormStructure field={field} onSubmit={handleSubmit} displayBtn={false} />
  )
}

export default reduxForm({ form: "LoginForm" })(Form)
