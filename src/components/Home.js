import React, {useState, useEffect} from 'react';
import CatCollection from './CatCollection';
import CatForm from './CatForm';
import NavBar from './NavBar';

function Home() {

  const [cats, setCats] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/cats")
    .then(response => response.json())
    .then(data => setCats(data))
  },[])

  const addNewCat = async catObj => {
    const resp = await fetch("http://localhost:3000/cats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(catObj)
    })
    const data = await resp.json()
    setCats([...cats, data])
  }
  return (
    <div>
      <CatForm addNewCat={addNewCat}/>
      <NavBar />
      <CatCollection cats={cats}/>
    </div>
  );
}

export default Home;
