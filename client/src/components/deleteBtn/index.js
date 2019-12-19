import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./style.css";
import API from "../../utils/API";

export default class DeleteBtn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Button
        className="myButton" 
        variant="dark"
        onClick={ () => { this.props.data.deleteBook(this.props.data.id) }}
        >
        Delete
      </Button>
    )
  }
}