import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';

function CatCard({name, age, image, id}) {
  function handleProfileClick(event) {
      console.log(event.target.value)
  }
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img src={image} alt= "name"/>
      <Card.Body>
        <Card.Title>{name}, {age}</Card.Title>
        <Button variant="info" onClick={handleProfileClick}> See Profile </Button>{' '}
      </Card.Body>
    </Card>
  )
}


export default CatCard;