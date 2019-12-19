import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import DeleteBtn from "../deleteBtn";
import "./style.css";


function MongoCard(props) {

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
          <img className="col-md-2 myImg" src={props.image} alt={props.title} />
          <p className="col-md-10"> { props.description } </p>
        </Row>
        <Row>
          <a className="myButton" href={props.link} target="_blank" rel="noopener noreferrer"><Button variant="dark">Details</Button></a>
          <DeleteBtn data={props}/>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default MongoCard;