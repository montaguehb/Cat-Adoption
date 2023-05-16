import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap'

const NavSearch = (props) => {
    const [searchText, setSearchText] = useState("")
    const handleChange = e => setSearchText(e.target.value)
  return (
    <Form onSubmit={props.handleSearch}>
        <Form.Control
        type='search'
        placeholder='Search...'
        className='me-2'
        aria-label='search'
        value={searchText}
        onChange={handleChange}
        />
        <Button variant='Primary'></Button>
    </Form>
  )
}

export default NavSearch