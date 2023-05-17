import React, {useState, useEffect} from 'react';
import CatCollection from './CatCollection';
import CatForm from './CatForm';
import CatProfile from './CatProfile';
import Navigation from './Navigation';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';

function Home() {
  const [cats, setCats] = useState([])
  const [catToAdopt, setCatToAdopt] = useState([])
  const [goBack, setGoBack] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("Sort By")

  function handleEditedCat(newCatObj){
    setCats((currentVal)=>currentVal.map(cat => cat.id === newCatObj.id ? newCatObj : cat))
    handleGoBack()
  }

  function handleAdoptCat(id){
    setCatToAdopt(cats.filter(cat => cat.id === id)[0])
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
    .then(data => {
      setCats(data)
      setShowProfile(true)
    })
    
  },[])
  
  const addNewCat = async catObj => {
    const resp = await fetch("http://localhost:3001/cats", {
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
<>

  <Navigation handleClick={handleClick} sort={sort} handleSearch={handleSearch}/>
    <Switch>
      <Route path="/cats/new">
        <CatForm addNewCat={addNewCat}/>
      </Route>
      <Route exact path="/">
        <CatCollection cats={cats} search={search} sort={sort} toggleProfile={toggleProfile}/>
      </Route>
    </Switch>
  </>
  );
}

export default Home;
