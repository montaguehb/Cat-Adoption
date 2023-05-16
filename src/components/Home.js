import React, {useState, useEffect} from 'react';
import CatCollection from './CatCollection';
import CatForm from './CatForm';
import NavBar from './NavBar';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';


function Home() {

  const [cats, setCats] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/cats")
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
<>
<NavBar />
    <Switch>
      <Route path="/cats/new">
        <CatForm addNewCat={addNewCat}/>
      </Route>
      <Route exact path="/">
        <CatCollection cats={cats}/>
      </Route>
    </Switch>
  </>
  );
}

export default Home;
