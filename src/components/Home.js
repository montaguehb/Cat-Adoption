import CatForm from './CatForm';
import NavBar from './NavBar';
import { useState, useEffect } from 'react';
import CatCollection from './CatCollection';
import CatProfile from './CatProfile';

function Home() {
  const [cats, setCats] = useState([])
  const [catToAdopt, setCatToAdopt] = useState([])
  
  function handleAdoptCat(id){
    setCatToAdopt(cats.filter(cat => cat.id === id)[0])
  }

  useEffect(() => {
    fetch("http://localhost:3001/cats")
    .then(response => response.json())
    .then(data => setCats(data))
    
  },[])
 
  const addNewCat = async catObj => {
    const resp = await fetch("http://localhost:3001/cats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(catObj)
    })
    
  }
  
  return (
    <div>
      <CatForm addNewCat={addNewCat}/>
      <NavBar />
      <CatCollection cats={cats} handleAdoptCat={handleAdoptCat}/>
      <CatProfile catToAdopt={catToAdopt} />
    </div>
  );
}

export default Home;
