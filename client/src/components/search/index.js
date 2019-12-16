import React from "react";
import { Form, Button } from "react-bootstrap";
import "./style.css";
import { func } from "prop-types";

function Search() {
  return(
    <Form>
      <Form.Group controlId="formBasicSearch">
        {/* <Form.Label>Search</Form.Label> */}
        <Form.Control type="text" placeholder="Search for books..." />
      </Form.Group>
      <Button variant="dark" type="submit">
        Search
      </Button>
    </Form>
  )
}

export default Search;