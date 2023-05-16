import CatForm from './CatForm';
import NavBar from './NavBar';
import { useState, useEffect } from 'react';
import CatCollection from './CatCollection';
import CatProfile from './CatProfile';

function Home() {
  const [cats, setCats] = useState([])
<<<<<<< HEAD
  const [catToAdopt, setCatToAdopt] = useState([])
  const [goBack, setGoBack] = useState(false)
  const [showProfile, setShowProfile] = useState(false)


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

=======
  const [catToAdopt, setCatToAdopt] = useState(null)
  
>>>>>>> 2e1403bdf78a1d7394d2d8e1dac7376b67823503
  function handleAdoptCat(id){
    setCatToAdopt(cats.filter(cat => cat.id === id)[0])
  }

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
  
  return (
    <div>
      <CatForm addNewCat={addNewCat}/>
      <NavBar />
<<<<<<< HEAD
      {showProfile ? <CatProfile catToAdopt={catToAdopt} handleGoBack={handleGoBack} handleEditedCat={handleEditedCat}/> : <CatCollection cats={cats} handleAdoptCat={handleAdoptCat} toggleProfile={toggleProfile}/>}
=======
      {!catToAdopt?<CatCollection cats={cats} handleAdoptCat={handleAdoptCat}/>:<CatProfile catToAdopt={catToAdopt} handleGoBack={handleGoBack}/>}   
>>>>>>> 2e1403bdf78a1d7394d2d8e1dac7376b67823503
    </div>
  );
}

export default Home;
