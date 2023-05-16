import CatCollection from './CatCollection';
import CatForm from './CatForm';
import NavBar from './NavBar';
import React, { useState, useEffect } from 'react';
import CatProfile from './CatProfile';
import Navigation from './Navigation';

function Home() {
  const [cats, setCats] = useState([])
  const [catToAdopt, setCatToAdopt] = useState([])
  const [goBack, setGoBack] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [search, setSearch] = useState("")

  function handleEditedCat(newCatObj){
    setCats((currentVal)=>currentVal.map(cat => cat.id === newCatObj.id ? newCatObj : cat))
    handleGoBack()
  }

  function toggleProfile() {
    setShowProfile(currentVal => !currentVal)
  }

  function handleGoBack(){
    setGoBack(currentVal => !currentVal)
    toggleProfile()
  }
  
  const handleClick = e => setSort(e.target.textContent)
  const handleSearch = searchText => setSearch(searchText) 

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
      <CatForm addNewCat={addNewCat}/>
      <NavBar />
      {showProfile ? <CatProfile catToAdopt={catToAdopt} handleGoBack={handleGoBack} handleEditedCat={handleEditedCat}/> : <CatCollection cats={cats} handleAdoptCat={handleAdoptCat} toggleProfile={toggleProfile}/>}
    </div>
  );
}

export default Home;
