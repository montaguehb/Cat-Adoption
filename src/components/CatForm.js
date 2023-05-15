import React, {useState} from 'react'
function CatForm(props) {
  const [form, setForm] = useState({
    name: "",
    age: "",
    breed: "",
    cost: "",
    description: "",
    image: ""
  })

  const handleChange = ({target: {id, value}}) => setForm({...form, [id]: value})
  const handleSubmit = e => {
    e.preventDefault()
    props.addNewCat(form)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
      <input value={form.name} type="text" name="name" id="name" onChange={handleChange}></input>
      <label htmlFor="age">Age: </label>
      <input value={form.age} type="text" name="age" id="age" onChange={handleChange}></input>
      <label htmlFor="breed">Breed: </label>
      <input value={form.breed} type="text" name="breed" id="breed" onChange={handleChange}></input>
      <label htmlFor="cost">Suggested Donation: </label>
      <input value={form.cost} type="text" name="cost" id="cost" onChange={handleChange}></input>
      <label htmlFor="description">Description: </label>
      <input value={form.description} type="text" name="description" id="description" onChange={handleChange}></input>
      <label htmlFor="image">Image: </label>
      <input value={form.image} type="text" name="image" id="image" onChange={handleChange}></input>
      <input type="submit" value="Add new cat"></input>
    </form>
  )
}



export default CatForm;