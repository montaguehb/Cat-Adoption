import CatCollection from './CatCollection';
import CatForm from './CatForm';
import NavBar from './NavBar';
import React, {useState, useEffect} from 'react';

function Home() {
  const [cats, setCats] = useState(null)

  const addNewCat = async catObj => {
    const resp = await fetch("http://localhost:3001/cats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(catObj)
    })
  }

  useEffect(() => {
    fetch("http://localhost:3001/cats")
    .then(response => response.json())
    .then(data => setCats(data))
  },[])

  return (
    <div>
      {!cats?
      <div>...loading</div>:
      <CatCollection cats={cats}/>}
      <CatForm addNewCat={addNewCat}/>
      <NavBar />
    </div>
  );
}

export default Home;
