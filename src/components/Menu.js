import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Menu.css'

function Menu() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand>Adopt'Un Ami</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <NavLink className="nav-link menu-hover" to="/" exact>Accueil</NavLink>
          <NavLink className="nav-link menu-hover" to="/about">A Propos</NavLink>            
          <NavLink className="nav-link menu-hover" to="/adopt">Adopter</NavLink>
          <NavLink className="nav-link menu-hover" to="/contact">Contact</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default Menu