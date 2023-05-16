import React from 'react'
import CatCard from "./CatCard"
import { Container, Row } from 'react-bootstrap'

function CatCollection({cats, sort, filter}) {
  const filteredArray = cats.filter(cat => cat)
  const sortedArray = filteredArray.sort()
  const catsArray = sortedArray.map(catObj => <CatCard key={catObj.id} {...catObj}/>)

  return (
    <Container>
      <Row md={4}>
        {catsArray}
      </Row>
    </Container>
  )
}


export default CatCollection;