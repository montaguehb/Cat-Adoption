import React, { useRef, useEffect, useState } from 'react'
import {Form, Button} from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom'
import emailJS from "@emailjs/browser"
import CatCard from './CatCard'

function ApplicationForm({handleAdoptClick}) {
  const form = useRef()
  const {id} = useParams()
  const [cat, setCat] = useState({})
  useEffect(() => {
      fetch(`http://localhost:3001/cats/${id}`)
        .then(response => response.json())
        .then(data => setCat(data))
    }, [id])

    const [service_id,template_id] = ["service_rmmixya", "template_oa2ugx8"]
  const sendEmail = async e => {
    e.preventDefault()
    try {
      const resp = await emailJS.sendForm(service_id, template_id, form.current,'ebIeoiOeAkxtO7l3p')
      if(resp.status !== 200) {
        throw new Error(resp.status)
      }
      alert("Purr-fect! Please check your email for the adoption information")
      handleAdoptClick(id)
    }
    catch(error) {
      console.error(error)
      alert("Meow-nexpected Error: Paws-ibly Fatal Exception!")
    }
    
  }
  return (
    <>
      <Form onSubmit={sendEmail} className='mb-3' ref={form}>
        <Form.Group controlId='name'>
          <Form.Label>Name: </Form.Label>
          <Form.Control type='text' placeholder='name' name='name'></Form.Control>
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>Email: </Form.Label>
          <Form.Control type='email' placeholder='email' name='email'></Form.Control>
        </Form.Group>
        <Form.Group controlId='phone'>
          <Form.Label>Phone: </Form.Label>
          <Form.Control type='text' placeholder='phone' phone='phone'></Form.Control>
        </Form.Group>
        <Link to={`/`}>
          <Button variant='primary' onClick={sendEmail}>Adopt Cat</Button>
        </Link>{' '}
      </Form>
      <CatCard {...cat} />
    </>
  )
}

export default ApplicationForm;
