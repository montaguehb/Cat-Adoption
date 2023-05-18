import React, { useState, useEffect } from 'react'
import {Form} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import emailJS from "@emailjs/browser"
import secret from '../secret'
import CatCard from './CatCard'

function ApplicationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    cat: {}
  })

  const {id} = useParams()

  useEffect(() => {
      fetch(`http://localhost:3001/cats/${id}`)
        .then(response => response.json())
        .then(cat => setForm({...form, cat}))
    
    }, [id])

  const [service_id, template_id] = secret()
  const handleChange = ({target: {id, value}}) => setForm({...form, [id]: value})
  const sendEmail = async e => {
    e.preventDefault()
    try {
      const resp = await emailJS.sendForm(service_id, template_id, form)
      if(resp.status !== 200) {
        throw new Error(resp.status)
      }
      alert("Purr-fect! Please check your email for the adoption information")
    }
    catch(error) {
      console.error(error)
      alert("Meow-nexpected Error: Paws-ibly Fatal Exception!")
    }
    
  }
  return (
    <>
      <Form onSubmit={sendEmail} className='mb-3'>
        <Form.Group controlId='name'>
          <Form.Label>Name: </Form.Label>
          <Form.Control type='text' placeholder='name' value={form.name} onChange={handleChange}></Form.Control>
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>Email: </Form.Label>
          <Form.Control type='text' placeholder='email' value={form.email} onChange={handleChange}></Form.Control>
        </Form.Group>
        <Form.Group controlId='phone'>
          <Form.Label>Phone: </Form.Label>
          <Form.Control type='text' placeholder='phone' value={form.phone} onChange={handleChange}></Form.Control>
        </Form.Group>
      </Form>
      <CatCard {...form.cat}/>
    </>
  )
}

export default ApplicationForm;
