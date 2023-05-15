import CatForm from './CatForm';
import NavBar from './NavBar';

function Home() {

  const addNewCat = async catObj => {
    const resp = await fetch("http://localhost:3000/cats", {
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
    </div>
  );
}

export default Home;
