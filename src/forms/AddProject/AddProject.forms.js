import React from "react"
import { connect } from "react-redux"
import { reduxForm, Field } from "redux-form"

import { Input, Select } from "atoms"
import { FormStructure } from "molecules"

const autofillFunc = () => {
  const test = [{ id: 1, name: "test1" }, { id: 2, name: "test2" }]
  return test
}
const test = [{ id: 1, name: "test1" }, { id: 2, name: "test2" }]

const Form = ({ handleSubmit, ...props }) => {
  console.log(autofillFunc())

  const field = [
    {
      field: <Field name="ProjectName" label="Project Name" component={Input} />
    },
    {
      field: (
        <Field
          name="Department"
          label="Department"
          // option={test}
          component={Input}
        />
      )
    },
    {
      field: (
        <Field
          name="District"
          label="District"
          option={autofillFunc()}
          component={Select}
        />
      )
    },
    {
      field: (
        <Field name="Block" label="Block" option={test} component={Select} />
      )
    },
    {
      field: (
        <Field
          name="GP"
          label="GP"
          //option={gpAutofillData.response.data}
          component={Input}
        />
      )
    },
    {
      field: (
        <Field
          name="Village"
          label="Village"
          //option={test}
          component={Input}
        />
      )
    },
    {
      field: (
        <Field
          name="EstimatedCost"
          type="number"
          label="Estimated Cost"
          component={Input}
        />
      )
    },
    {
      field: (
        <Field
          name="StartDate"
          type="date"
          label="Start Date"
          component={Input}
        />
      )
    },
    {
      field: (
        <Field name="EndDate" type="date" label="End Date" component={Input} />
      )
    },
    {
      field: (
        <Field
          name="description"
          type="multiline"
          label="Description"
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
  // districtAutofillData: state.districtAutofill,
  // gpAutofillData: state.gpAutofill,
  // blockAutofillData: state.blockAutofill
})

export default reduxForm({ form: "addProjectForm" })(
  connect(mapStateToProps)(Form)
)
