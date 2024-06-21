import React from 'react';
import { Nav, Navbar, Container, Form, Button } from 'react-bootstrap';
import brandLogo from '../logo.svg'

const brandName = "Fourntech"

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary boder-padding">
      <Container fluid>
        <Navbar.Brand className="fw-bolder fs-3" href="#">
            <img alt="" src={brandLogo} className="brand-image"/> {' '}
            {brandName}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
          </Nav>
          <Nav className='boder-padding'>
            <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;