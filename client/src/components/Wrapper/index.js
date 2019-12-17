import React from "react";
import { Container } from "react-bootstrap";
import BookCard from "../bookCard";

function Wrapper(props) {

  return(
    <Container>
      {(this.props.books.length) ? 
            this.props.books.map( book => {
            return(
              <BookCard 
                title={book.title} 
                authors={book.authors} 
                image={book.image}
                description={book.description}
                link={book.link}
              />
              )
            })
          : ''
          }
    </Container>
  )
}


export default Wrapper;