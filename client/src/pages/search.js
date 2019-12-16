import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Jumbo from "../components/Jumbo"
import { Container } from "react-bootstrap";

export default class Search extends Component {

  state = {

  }

  render() {
    return(
      <div>
        <Jumbo/>
        <Container>
          {}
        </Container>
      </div>
    )
  }
}