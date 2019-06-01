import React from "react"
import { Paper, Table } from "atoms"

const paperStyle = { padding: "10px" }

const CmrfReportTable = props => {
  const column = []

  return (
    <Paper style={paperStyle}>
      <Table
        column={column}
        dataSource={props.dataSource}
        showHeader={false}
        rowSelection={null}
      />
    </Paper>
  )
}

export default CmrfReportTable
