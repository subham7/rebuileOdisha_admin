import React from "react"
import AllReport from "./.allReport"
import OsdmaReport from "./.osdmaReport"
import CmrfReport from "./.cmrfReport"

const App = props => (
  <div>
    {props.tabValue === 0 && <AllReport />}
    {props.tabValue === 1 && <OsdmaReport />}
    {props.tabValue === 2 && <CmrfReport />}
  </div>
)

export default App
