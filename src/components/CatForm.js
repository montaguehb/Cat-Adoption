import React, {useState} from 'react'

function CatForm() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    breed: "",
    cost: "",
    description: "",
    image: ""
  })

  const handleChange = ({target: {id, value}}) => setForm({...form, [id]: value})
  return (
    <form>
      <input value={form.name} type={"text"} name={"name"} id={"name"} onChange={handleChange}></input>
      <input value={form.age} type={"text"} name={"age"} id={"age"} onChange={handleChange}></input>
      <input value={form.breed} type={"text"} name={"breed"} id={"breed"} onChange={handleChange}></input>
      <input value={form.cost} type={"text"} name={"cost"} id={"cost"} onChange={handleChange}></input>
      <input value={form.description} type={"text"} name={"description"} id={"description"} onChange={handleChange}></input>
      <input value={form.image} type={"text"} name={"image"} id={"image"} onChange={handleChange}></input>
    </form>
  )
}



export default CatForm;