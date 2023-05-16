import CatCollection from './CatCollection';
import CatForm from './CatForm';
import NavBar from './NavBar';
import React, { useState, useEffect } from 'react';
import CatProfile from './CatProfile';
import Navigation from './Navigation';

function Home() {
  const [cats, setCats] = useState(null)
  const [sort, setSort] = useState("Filter By")
  const [catToAdopt, setCatToAdopt] = useState(null)
  const [search, setSearch] = useState("")

  const handleClick = e => setSort(e.target.textContent)
  const handleSearch = searchText => setSearch(searchText) 

  const handleGoBack = () => setCatToAdopt(null)
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

  function handleAdoptCat(id){
    setCatToAdopt(cats.filter(cat => cat.id === id)[0])
  }

  return (
    <div>
      <Navigation handleClick={handleClick} sort={sort} handleSearch={handleSearch}/>
      {!catToAdopt?<CatCollection cats={cats} sort={sort} search={search}/>:<CatProfile catToAdopt={catToAdopt} handleAdoptCat={handleAdoptCat} handleGoBack={handleGoBack}/>}
      <CatForm addNewCat={addNewCat}/>  
    </div>
  );
}

export default Home;
