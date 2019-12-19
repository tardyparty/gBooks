import React, { Component } from "react";
import API from "../utils/API";
import { Container } from "react-bootstrap";
import Jumbo from "../components/Jumbo";
import Header from "../components/Nav";
import MongoCard from "../components/mongoCard";

export default class Mybooks extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then( res => this.setState({ books: res.data }))
      .catch( err => console.log(err))
  }

  deleteBook = id => {

    API.deleteBook(id)
      .then( res => {
        console.log("book deleted")
        this.loadBooks()
      })
      .catch( err => console.log(err));
  }


  render() {
    return(
      <Container>
        <Header />
        <Jumbo />
        <Container>
          {console.log(this.state.books)}
          { this.state.books.map( book => {
            return(
              <MongoCard 
                id={book._id}
                key={book._id}
                title={book.title} 
                authors={book.authors} 
                image={book.image}
                description={book.description}
                link={book.link}
                deleteBook={this.deleteBook}
              />
              )
            })}
        </Container>
      </Container>
      
    )
  }
}