import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap'

const NavSearch = (props) => {
    const [searchText, setSearchText] = useState("")
    const handleChange = e => setSearchText(e.target.value)
    const handleSubmit = e => {
        e.preventDefault()
        props.handleSearch(searchText)
    }
  return (
    <Form onSubmit={handleSubmit} className='d-flex'>
        <Form.Control
        type='search'
        placeholder='Search...'
        className='me-2'
        aria-label='search'
        value={searchText}
        onChange={handleChange}
        />
        <Button variant='primary' onClick={() => props.handleSearch(searchText)}>Search</Button>
    </Form>
  )
}

export default NavSearch