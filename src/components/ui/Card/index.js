import React from 'react';
import './styles.css';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const CardContainer = (props) => {

 
  return (
    <div className='cardContent' key={props.index}>
    <Row>
      <Col>
        <Card style={{ width: "18rem" }} className='cardView'>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              {props.description}
            </Card.Text>
            <div className='location'>
              <img src='assets/location.png' className='locationImg'/>
              <h4>{props.location}</h4>
              <button onClick={props.onClick}><h5>View Applications</h5></button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
  )
}

export default CardContainer;