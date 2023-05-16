import React from 'react'
import {Link} from 'react-router-dom'

function CatProfile({catToAdopt: {image, cost, name, description, age, breed, id}}) {
    //write handleAdoptClick function for buttons
    
    function handleAdoptClick(){
        fetch(`http://localhost:3001/cats/${id}`, {
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
        <p>Donation: {cost}</p>
        <p>Description: {description}</p>
        <button className="adopt" onClick={handleAdoptClick}>Adopt Cat</button>
        <button href="#" className="back" to="/cats">Go Back</button>
        {/* ^button will be Link later */}
    </div>
  )
}

export default CatProfile    
