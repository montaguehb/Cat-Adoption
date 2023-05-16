import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import NavSort from './NavSort'
import NavSearch from './NavSearch'

const Navigation = (props) => {
  return (
    <Navbar className="nav" sticky='top' bg='light'>
      <Container>
        <Navbar.Brand href="#home">Schrödinger's Cat Adoption</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id="navbarScroll">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Add a Cat</Nav.Link>
          <NavSort sort={props.sort} handleClick={props.handleClick}/>
          <NavSearch handleSearch={props.handleSearch}/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation