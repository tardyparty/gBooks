import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Jumbo from "../components/Jumbo"
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";

export default class SearchCom extends Component {

  state = {
    searchTerm: "",
    title: "",
    authors: "",
    description: "",
    image: "",
    link: ""
  }

  // 1. fix api call to google books
  // 2. display each book from API call as a card
  // 3. onClick of save button => API.saveBook() 
  

  handleInputChange = event => {
    
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleFormSubmit = event => {
    event.preventDefault();

    axios
      .get("http://www.googleapis.com/books/v1/volumes?q=" + this.state.searchTerm + "&key=AIzaSyBUyIx7bDmHsfjsBUhwi4wj_gj9amMJKdk")
      .then((data) => {
        console.log(data)
      })
      .catch( err => console.log(err))
  }

  render() {
    return(
      <div>
        <Jumbo/>
        <Container>
        <Form>
          <Form.Group controlId="formBasicSearch">
            <Form.Control name="searchTerm" type="text" onChange={this.handleInputChange} placeholder="Search for books..." />
          </Form.Group>
          <Button variant="dark" type="submit" onClick={this.handleFormSubmit}>
            Search
          </Button>
        </Form>
        </Container>
      </div>
    )
  }
}