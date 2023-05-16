import React from 'react'
import CatCard from "./CatCard"


function CatCollection({cats}) {

  const catsArray = cats.map(catObj => <CatCard key={catObj.id} {...catObj}/>)

  
  console.log(catsArray)
  return (
    <div>{catsArray}</div>
  )
}


export default CatCollection;