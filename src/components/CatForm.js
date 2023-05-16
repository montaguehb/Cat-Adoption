import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
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

  const formArr = []
  for(let key in form) {
    const newForm = (<Form.Group className='mb-3' controlId='formName' key={key}>
    {key === "cost" ?<Form.Label>Suggested Donation: </Form.Label>:<Form.Label>{[key]}: </Form.Label>}
    <Form.Control onChange={handleChange} value={form[key]}></Form.Control>
    </Form.Group>)

    formArr.push(newForm)
  }

  return (
    <Form onSubmit={handleSubmit}>
      {formArr}
      <Button variant="primary" type='submit' onSubmit={handleSubmit}>Add New Cat</Button>
    </Form>
  )
}



export default CatForm;