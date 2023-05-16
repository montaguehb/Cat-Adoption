import React from 'react'
import { Col, Button, Card } from 'react-bootstrap';


function CatCard({name, age, breed, cost, description, image, id, handleAdoptCat, toggleProfile}) {

function handleProfileClick(event) {
    handleAdoptCat(event.target.id)
    toggleProfile()
}

  return (
    <Col>
      <Card style={{ width: '18rem' }}>
        <Card.Img src={image} alt= "name" height={200} width={150}/>
        <Card.Body>
          <Card.Title>{name}, {age}</Card.Title>
          <Button variant="info" onClick={handleProfileClick}> See Profile </Button>{' '}
        </Card.Body>
      </Card>
    </Col> 
  )
}


export default CatCard;