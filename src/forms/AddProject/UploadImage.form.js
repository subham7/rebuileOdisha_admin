import React from "react"
import { connect } from "react-redux"
import { reduxForm, Field } from "redux-form"

import { Input, Select } from "atoms"
import { FormStructure } from "molecules"

const getAutofill = data => {
  let arr = []
  data.map(item => {
    arr.push({
      id: item.id,
      name: item.ProjectName
    })
  })

  return arr
}

const Form = ({ handleSubmit, projectAutofillData }) => {
  const field = [
    {
      field: (
        <Field
          name="project"
          label="Project"
          option={getAutofill(projectAutofillData.response.data)}
          component={Select}
        />
      )
    },
    {
      field: (
        <Field
          name="GPSCoordinates"
          label="GPS Coordinates"
          component={Input}
        />
      )
    }
  ]

  return (
    <FormStructure field={field} onSubmit={handleSubmit} displayBtn={false} />
  )
}

const mapStateToProps = state => ({
  projectAutofillData: state.projectAutofill
})

export default reduxForm({ form: "uploadImageForm" })(
  connect(mapStateToProps)(Form)
)
