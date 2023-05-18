import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import NavSort from './NavSort'
import NavSearch from './NavSearch'
import { Link } from 'react-router-dom'

const Navigation = (props) => {
  return (
    <Navbar className="nav" sticky='top' style={{backgroundColor:"rgb(125, 189, 248)"}}>
      <Container>
        
        <Navbar.Brand as= {Link} to="/" className="badge fs-2 fw-bold  text-wrap text-dark "style={{fontFamily: 'Perpetua', backgroundColor: "rgb(125, 189, 248)"}} >🐈Schrödinger's Cat Adoption</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
           
              <Nav.Link as= {Link} to="/" className="fw-bold">Home</Nav.Link>
              <Nav.Link as= {Link} to="/cats/new" className="fw-bold">Add a Cat</Nav.Link>
           
            <NavSort sort={props.sort} handleClick={props.handleClick}/>
          </Nav>
          <NavSearch handleSearch={props.handleSearch}/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation