import React from 'react'
import CatCard from "./CatCard"
import { Container, Row } from 'react-bootstrap'

function CatCollection({cats}) {

  const catsArray = cats.map(catObj => <CatCard key={catObj.id} {...catObj}/>)

  console.log(catsArray)
  return (
    <Container>
      <Row md={4}>
        {catsArray}
      </Row>
    </Container>
  )
}


export default CatCollection;