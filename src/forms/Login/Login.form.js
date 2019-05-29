import React from "react"
import { reduxForm, Field } from "redux-form"
import { reduxFormField } from "utils"

import { Input } from "atoms"
import { FormStructure } from "molecules"

const ReduxInput = reduxFormField(Input)

const Form = ({ handleSubmit }) => {
  const field = [
    {
      field: <Field name="username" label="Username" component={ReduxInput} />
    },
    {
      field: (
        <Field
          name="password"
          type="password"
          label="Password"
          component={ReduxInput}
        />
      )
    }
  ]

  return (
    <FormStructure field={field} onSubmit={handleSubmit} displayBtn={false} />
  )
}

export default reduxForm({ form: "LoginForm" })(Form)
