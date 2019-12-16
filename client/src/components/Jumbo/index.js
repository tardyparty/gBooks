import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "./style.css";

function Jumbo() {
  return(
    <Jumbotron>
  <Container className="text-center">
    <h1>Google Book Search</h1>
    <p>
      Search for and Save Books of Interest
    </p>
  </Container>
</Jumbotron>
  )
}

export default Jumbo;