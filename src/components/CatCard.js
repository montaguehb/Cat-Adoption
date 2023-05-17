import React from 'react'
import { Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function CatCard({name, age, breed, cost, description, image, id, toggleProfile}) {

function handleProfileClick(event) {
  toggleProfile()
}

  return (
    <Col>
      <Card style={{ width: '18rem' }}>
        <Card.Img src={image} alt= "name" height={200} width={150}/>
        <Card.Body>
          <Card.Title>{name}, {age}</Card.Title>
          {/* check this code to confirm it works or delete */}
          <Link path='/cats/new'>
            <Button variant="info" onClick={handleProfileClick}> See Profile </Button>{' '}
          </Link>
        </Card.Body>
      </Card>
    </Col> 
  )
}


export default CatCard;