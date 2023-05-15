import React from 'react'

function CatCard({name, age, breed, cost, description, image, id}) {

function handleProfileClick(event) {
    console.log(event.target.value)
}

  return (
    <div>
        <img src={image} alt= "name"/>
        <h2>{name}, {age}</h2>
        <button onClick={handleProfileClick}> See Profile </button>
    </div>
  )
}


export default CatCard;