import React from 'react'
import CatCard from "./CatCard"
import { Container, Row } from 'react-bootstrap'

function CatCollection({cats, sort, search, handleAdoptCat}) {
  const filteredArray = cats.filter(cat => cat.name.toLowerCase().includes(search.toLowerCase()))
  const adoptedFilterArr = filteredArray.filter(cat => !cat.adopted)
  const sortedArray = adoptedFilterArr.sort((cat1, cat2) => {
    switch(sort) {
      case "Name ↑":
        return cat1.name > cat2.name ? -1:1
      case "Name ↓":
        return 0
      case "Age ↑":
        return cat2.age - cat1.age
      case "Age ↓":
        return cat1.age - cat2.age
      default:
        return 0
    }
  })
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