import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Jumbo from "../components/Jumbo";

export default class Mybooks extends Component {

  state = {

  }

  // 1. componentDidMount calls API.getBooks()
  // 2. X button to delete book from DB => API.deleteBook()
  // 3. details button to view the book on its own

  render() {
    return(
      <Jumbo/>
    )
  }
}