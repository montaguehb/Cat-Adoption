import React from 'react'
import CatCard from "./CatCard"
import { Container, Row } from 'react-bootstrap'

function CatCollection({cats, sort, search}) {
  const filteredArray = cats.filter(cat => cat.name.includes(search))
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