import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./style.css";
import API from "../../utils/API";

export default class SaveBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        title: props.data.title,
        authors: props.data.authors,
        description: props.data.description,
        image: props.data.image,
        link: props.data.link
      }
    }
  }

  saveBook = data => {

    console.log(data);

    API.saveBook(data)
      .then( res => console.log("book saved"))
      .catch( err => console.log(err))
  }

  render() {
    return(
      <Button
        className="myButton" 
        variant="dark"
        onClick={ () => { this.saveBook(this.state.data) }}
        >
        Save Book
      </Button>
    )
  }
}