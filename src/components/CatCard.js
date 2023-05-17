import React from 'react'
import { Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function CatCard({name, age, image, id, }) {

  return (
    <Col>
      <Card style={{ width: '18rem' }}>
        <Card.Img src={image} alt= "name" height={200} width={150}/>
        <Card.Body>
          <Card.Title>{name}, {age} years old</Card.Title>
          <Link to={`/cats/${id}`}> <Button variant="primary"> See Profile </Button> </Link>{' '}
        </Card.Body>
      </Card>
    </Col> 
  )
}


export default CatCard;