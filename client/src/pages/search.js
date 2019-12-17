import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Jumbo from "../components/Jumbo"
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import BookCard from "../components/bookCard"

export default class SearchCom extends Component {
  constructor(props){
    super(props)
    this.state = {
      books: [],
      searchTerm: "",
      title: "",
      authors: "",
      description: "",
      image: "",
      link: ""
    }
  }

  // 3. onClick of save button => API.saveBook() 


  handleInputChange = event => {
    
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleFormSubmit = event => {
    event.preventDefault();

    this.setState({ books: [] })

    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.searchTerm + "&key=AIzaSyBUyIx7bDmHsfjsBUhwi4wj_gj9amMJKdk")
      .then((data) => {
         console.log(data)
         let theseBooks = [];
         data.data.items.map( item => {
          theseBooks.push({
            key: item.volumeInfo.title,
            title: item.volumeInfo.title,
            authors: item.volumeInfo.authors,
            description: item.volumeInfo.description,
            image: item.volumeInfo.imageLinks.thumbnail,
            link: item.volumeInfo.infoLink
          })

        })
        console.log(theseBooks);
        this.setState({ books: theseBooks })
      })
      // .catch( err => console.log(err))
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
      </div>
    )
  }
}