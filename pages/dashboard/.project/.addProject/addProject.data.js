import React from "react"
import { Input, Select } from "atoms"

const Field = props => {
  const { that } = props

  return (
    <div>
      <Input
        name="ProjectName"
        label="Project Name"
        onChange={e => that.handleChange(e)}
        value={that.state.formValue.ProjectName}
      />
      <Select
        label="Department"
        option={that.props.allDepartmentAutofillData.response.data}
        onChange={value => that.handleValue(value, "Department")}
        value={that.state.formValue.Department}
      />
      <Select
        label="District"
        option={that.props.allDistrictAutofillData.response.data}
        onChange={value => that.handleValue(value, "District")}
        onFocus={() => that.districtOnFocus()}
        value={that.state.formValue.District}
      />
      <Select
        label="Block"
        option={
          that.props.blockOfDistrictAutofillData.response === null
            ? [{ id: "", name: "" }]
            : that.props.blockOfDistrictAutofillData.response.data
        }
        onChange={value => that.handleValue(value, "Block")}
        onFocus={() => that.blockOnFocus(that.state.formValue.District)}
        value={that.state.formValue.Block}
      />
      <Select
        label="GP"
        option={
          that.props.gpOfBlockAutofillData.response === null
            ? [{ id: "", name: "" }]
            : that.props.gpOfBlockAutofillData.response.data
        }
        onChange={value => that.handleValue(value, "GP")}
        onFocus={() => that.gpOnFocus(that.state.formValue.Block)}
        value={that.state.formValue.GP}
      />
      <Input
        name="EstimatedCost"
        label="Estimated Cost"
        type="number"
        onChange={e => that.handleChange(e)}
        value={that.state.formValue.EstimatedCost}
      />
      <Input
        label="Start Date"
        type="date"
        onChange={(date, dateString) =>
          that.handleData(date, dateString, "StartDate")
        }
        value={that.state.formValue.StartDate}
      />
      <Input
        label="End Date"
        type="date"
        onChange={(date, dateString) =>
          that.handleData(date, dateString, "EndDate")
        }
        value={that.state.formValue.EndDate}
      />
      <Input
        name="description"
        label="Description"
        type="multiline"
        onChange={e => that.handleChange(e)}
        value={that.state.formValue.description}
      />
    </div>
  )
}

export default Field
