import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { PersonCircle } from 'react-bootstrap-icons';
import "./navbar.css"

function Topbar() {
  return (
    <div className="container">
      <Navbar>
      <Container>
        <Navbar.Brand href="#home"><h2><span className="yamak">Yamak</span>.ai</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto ms-auto me-auto" style={{fontSize:"18px", color:"#707070"}}>
            <Nav.Link href="#home" style={{marginRight:"20px",}}>Home</Nav.Link>
            <Nav.Link href="#link" style={{marginRight:"20px"}}>Marketing</Nav.Link>
            <Nav.Link href="#link" style={{marginRight:"20px"}}>Media</Nav.Link>
            <Nav.Link href="#link" style={{marginRight:"20px"}}>Sales Copy</Nav.Link>
            <Nav.Link href="#link" style={{marginRight:"20px"}}>Blogs</Nav.Link>
            <Nav.Link href="#link">Others</Nav.Link>
          </Nav>
            <PersonCircle style={{fontSize:"25px"}}/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Topbar;