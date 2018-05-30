import React from "react"
import ReactDOM from "react-dom"
import { Grid, Row, Col, Jumbotron } from "react-bootstrap"

const Client = props => (
  <Grid fluid>
    <Jumbotron>
      <h1>Welcome to the react Client app</h1>
      <p>This is going to be fun</p>
    </Jumbotron>
  </Grid>
)

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Client />, document.getElementById("react-app"))
})
