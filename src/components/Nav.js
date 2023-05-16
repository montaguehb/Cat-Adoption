import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
const Nav = () => {
  return (
    <Navbar className="nav" sticky='top'>
      <Container>
        <Navbar.Brand href="#home">Schrödinger's Cat Adoption</Navbar.Brand>
        
      </Container>
    </Navbar>
  )
}

export default Nav