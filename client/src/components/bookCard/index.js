import React, { Component } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import SaveBtn from "../saveBtn";
import "./style.css";


function BookCard(props) {

  return(
    <Card border="dark" className="myCard">
      <Card.Title>
        <Col>
          <p className="cardTitle"> { props.title } </p> 
          
        </Col>
        <Col>
          <p className="author"> { props.authors } </p>
        </Col>
      </Card.Title>
      <Card.Body>
        <Row>
          <img className="col-md-2 myImg" src={props.image} />
          <p className="col-md-10"> { props.description } </p>
        </Row>
        <Row>
          <a className="myButton" href={props.link} target="_blank"><Button variant="dark">Details</Button></a>
          <SaveBtn data={props}/>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default BookCard;
