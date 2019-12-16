import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/search">Google Books</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/search">Search</Nav.Link>
      <Nav.Link href="/mybooks">My Books</Nav.Link>
    </Nav>
  </Navbar>
  )
}

export default Header;