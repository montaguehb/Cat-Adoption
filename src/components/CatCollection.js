import React, {useState, useEffect} from 'react'
import CatCard from "./CatCard"


function CatCollection() {

const [cats, setCats] = useState([])

useEffect(() => {
    fetch("http://localhost:3001/cats")
    .then(response => response.json())
    .then(data => setCats(data))
  },[])

  const catsArray = cats.map(catObj => <CatCard key={catObj.id} {...catObj}/>)
  return (
    <div>{catsArray}</div>
  )
}


export default CatCollection;