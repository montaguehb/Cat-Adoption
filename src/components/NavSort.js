import React from 'react'
import { NavDropdown } from 'react-bootstrap'
const NavSort = ({sort, handleClick}) => {
    
  return (
    <>
        <NavDropdown title={sort} className="fw-bold">
            <NavDropdown.Item onClick={handleClick}>Name ↑</NavDropdown.Item>
            <NavDropdown.Item onClick={handleClick}>Name ↓</NavDropdown.Item>
            <NavDropdown.Item onClick={handleClick}>Age ↑</NavDropdown.Item>
            <NavDropdown.Item onClick={handleClick}>Age ↓</NavDropdown.Item>
        </NavDropdown>
    </>   
  )
}

export default NavSort