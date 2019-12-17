import React, { Component } from "react";
import API from "../utils/API";
import { Container } from "react-bootstrap";
import Jumbo from "../components/Jumbo";
import Header from "../components/Nav";
import BookCard from "../components/bookCard";

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

  // 2. X button to delete book from DB => API.deleteBook()

  render() {
    return(
      <Container>
        <Header />
        <Jumbo />
        <Container>
          {console.log(this.state.books)}
          { this.state.books.map( book => {
            return(
              <BookCard 
                key={book.key}
                title={book.title} 
                authors={book.authors} 
                image={book.image}
                description={book.description}
                link={book.link}
              />
              )
            })}
        </Container>
      </Container>
      
    )
  }
}