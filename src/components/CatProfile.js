import React from 'react'
import {Link, BrowserRouter, Switch, Route} from 'react-router-dom'
import {Card, Button, Row, Col, Container} from 'react-bootstrap'
function CatProfile({catToAdopt: {image, cost, name, description, age, breed, id}, handleGoBack, handleEditedCat}) {
    //write handleAdoptClick function for buttons
    
    function handleAdoptClick(){
        fetch(`http://localhost:3001/cats/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({adopted: true})
        })
        .then(response => response.json())
        .then(data => handleEditedCat(data))    
    }
    
  return (
    <Container>
        <Row className='justify-content-md-center'>
            <Col xs>
                <Card>
                <Card.Img variant="top" src={image} alt={name}/>
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Text>Age: {age} years old</Card.Text>
                    <Card.Text>Breed: {cost}</Card.Text>
                    <Card.Text>Description: {description}</Card.Text>
                    <Card.Text>Suggested Donation: {cost}</Card.Text>
                    <Button variant='primary' onClick={handleAdoptClick}>Adopt Cat</Button>
                    {/* add route to go home check this later not confirmed to work yet*/}
                    <Link path='/'>
                        <Button variant='secondary' onClick={handleGoBack}>Go Back</Button>
                    </Link>
                </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>   
  )
}

export default CatProfile    
