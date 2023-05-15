import React from 'react'

function CatProfile() {
    //write handleAdoptClick, handleBackClick functions for buttons
    
    function handleAdoptClick(){
        fetch(`http://localhost:3000/cats/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({adopted: true})
        })
    }
    
  return (
    <div>
        <img src={image} />
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
        <p>Breed: {breed}</p>
        <p>Donation: {price}</p>
        <p>Description: {description}</p>
        <button className="adopt" onClick={handleAdoptClick}>Adopt Cat</button>
        <Link className="back" to="/cats">Go Back</Link>
    </div>
  )
}

export default CatProfile    
