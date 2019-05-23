import React from "react"
import { Empty } from "atoms"
import { ProjectCard } from "organisms"

const style = {
  position: "relative",
  top: "50%"
}

const ShowProject = props => (
  <div>
    {Object.keys(props.data).length === 0 ? (
      <Empty style={style} />
    ) : (
      <div>
        {props.data.map((data, index) => (
          <ProjectCard
            key={index}
            ProjectName={data.ProjectName}
            Department={data.Department}
            District={data.District}
            Block={data.Block}
            GP={data.GP}
            Village={data.Village}
            EstimatedCost={data.EstimatedCost}
            StartDate={data.StartDate}
            EndDate={data.EndDate}
            displayBtn={true}
          />
        ))}
      </div>
    )}
  </div>
)

export default ShowProject
