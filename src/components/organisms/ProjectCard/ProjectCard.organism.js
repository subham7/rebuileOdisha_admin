import React from "react"
import { Button, Grid, Paper, Title, Subtitle, Paragraph } from "atoms"

const style = {
  padding: "20px",
  marginBottom: "10px"
}

const ProjectCard = props => (
  <Paper style={style}>
    <Grid container spacing={8}>
      <Grid item sm={12}>
        <Title>{props.ProjectName}</Title>
      </Grid>
      <Grid item sm={3}>
        <Paragraph>Department</Paragraph>
        <Subtitle>{props.Department}</Subtitle>
      </Grid>
      <Grid item sm={3}>
        <Paragraph>District</Paragraph>
        <Subtitle>{props.District}</Subtitle>
      </Grid>
      <Grid item sm={3}>
        <Paragraph>Block</Paragraph>
        <Subtitle>{props.Block}</Subtitle>
      </Grid>
      <Grid item sm={3}>
        <Paragraph>GP</Paragraph>
        <Subtitle>{props.GP}</Subtitle>
      </Grid>
      <Grid item sm={3}>
        <Paragraph>Village</Paragraph>
        <Subtitle>{props.Village}</Subtitle>
      </Grid>
      <Grid item sm={3}>
        <Paragraph>Estimated Cost</Paragraph>
        <Subtitle>INR {props.EstimatedCost}</Subtitle>
      </Grid>
      <Grid item sm={3}>
        <Paragraph>Start Date</Paragraph>
        <Subtitle>{props.StartDate.split("T")[0]}</Subtitle>
      </Grid>
      <Grid item sm={3}>
        <Paragraph>End Date</Paragraph>
        <Subtitle>{props.EndDate.split("T")[0]}</Subtitle>
      </Grid>
    </Grid>
    {props.displayBtn ? null : (
      <div>
        <div className="line" />
        <div>
          <Button variant="">Message</Button>
        </div>
      </div>
    )}
  </Paper>
)

export default ProjectCard
