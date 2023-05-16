import CatCollection from './CatCollection';
import CatForm from './CatForm';
import Navigation from './Navigation';
import React, {useState, useEffect} from 'react';

function Home() {
  const [cats, setCats] = useState(null)
  const [sort, setSort] = useState("Filter By")
  const [search, setSearch] = useState("")

  const handleClick = e => setSort(e.target.textContent)
  const handleSearch = searchText => setSearch(searchText) 


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
      <Navigation handleClick={handleClick} sort={sort} handleSearch={handleSearch}/>
      {!cats?
      <div>...loading</div>:
      <CatCollection cats={cats} sort={sort} search={search}/>}
      <CatForm addNewCat={addNewCat}/>  
    </div>
  );
}

export default Home;
