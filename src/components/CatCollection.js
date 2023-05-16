import React from 'react'
import CatCard from "./CatCard"
import CatProfile from './CatProfile'

function CatCollection({cats, handleAdoptCat}) {
  const catsArray = cats.map(catObj => <CatCard key={catObj.id} {...catObj} handleAdoptCat={handleAdoptCat}/>)

  return (
    <div>{catsArray}</div>
  )
}


export default CatCollection;