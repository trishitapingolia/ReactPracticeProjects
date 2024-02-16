import Button from 'react-bootstrap/Button';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function TopNav() {
  return (
    <Navbar expand="lg" className="bg-white">
      <Container className='d-flex'>
        <img src='brand_logo.png' alt='logo'/>
        <Nav>
        <Nav.Link href="#home">Menu</Nav.Link>
        <Nav.Link href="#link">Location</Nav.Link>
        <Nav.Link href="#link">About</Nav.Link>
        <Nav.Link href="#link">Contact</Nav.Link>
        </Nav>
        <Button variant="danger">Login</Button>{' '}
      </Container>
    </Navbar>
  );
}

export default TopNav;