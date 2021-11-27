import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink ,Link} from 'react-router-dom';
import './Header.css' ;

const Header = () => {
    return (
        <>
            {/* <h1 className='title'>Code With Hridoy</h1> */}
            <Navbar bg="dark" fixed="top" variant='dark' expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Learn With Hridoy</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
        <Nav.Link as={Link} to="/services">Services</Nav.Link>
        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    );
};

export default Header;


