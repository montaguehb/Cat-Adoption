import React from 'react'


function CatCard({name, age, breed, cost, description, image, id, handleAdoptCat, toggleProfile}) {

function handleProfileClick(event) {
    handleAdoptCat(event.target.id)
    toggleProfile()
}

  return (
    <div>
        <img src={image} alt= "name"/>
        <h2>{name}, {age}</h2>
        <button onClick={handleProfileClick} id={id}> See Profile </button>
    </div>
  )
}


export default CatCard;