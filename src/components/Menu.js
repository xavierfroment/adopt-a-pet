import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Menu.css'

function Menu() {
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand>Adopt'Un Ami</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <Nav.Item>
            <Nav.Link 
              eventKey="1" 
              as={Link} 
              className="nav-link menu-hover" 
              to="/" 
              exact="true"
            >
              Accueil
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link 
              eventKey="2" 
              as={Link} 
              className="nav-link menu-hover" 
              to="/about"
            >
              A Propos
            </Nav.Link> 
          </Nav.Item>
          <Nav.Item>
            <Nav.Link 
              eventKey="3" 
              as={Link} 
              className="nav-link menu-hover" 
              to="/adopt"
            >
              Adopter
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link 
              eventKey="4" 
              as={Link}
              className="nav-link menu-hover" 
              to="/contact"
            >
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default Menu