import React, { useEffect, useState } from 'react'
import {useParams, useHistory, Link} from 'react-router-dom'
import {Card, Button, Row, Col, Container} from 'react-bootstrap'


function CatProfile({handleEditedCat}) {

    const history = useHistory()
    //write handleAdoptClick function for buttons
    
    const [catProfile, setCatProfile] = useState(null)

    const {id} = useParams() 
    useEffect(() => {
      fetch(`http://localhost:3001/cats/${id}`)
        .then(response => response.json())
        .then(data => setCatProfile(data))
    
    }, [id])
    
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
    if(catProfile === null) return <h1>loading...</h1>

    const {name, age, cost, description, image} = catProfile

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
                    <Link to={`/cats/${id}/adoption`}>
                        <Button variant='primary'>Adopt Cat</Button>
                    </Link>{' '}
                    <Button variant='secondary' onClick={()=>history.go(-1)}>Go Back</Button>
                </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>   
  )
}

export default CatProfile    
