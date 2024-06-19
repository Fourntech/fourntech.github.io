import React from 'react';
import { Nav, Navbar, Container, Form, Button } from 'react-bootstrap';
import brandLogo from '../logo.svg'

const brandName = "Fourntech"

class Navigation extends React.Component {
    render() {
        return (
        <Navbar className="navbar bg-white shadow">
            <Container fluid> 
                <Navbar.Brand className="fw-bolder fs-4" href="#">
                    <img alt="" src={brandLogo} className="brand-image"/> {' '}
                    {brandName}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav variant="underline" className="mr-auto" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                    <Nav className="mr-auto justify-content-end">
                        <Form className="d-flex me-3">
                            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        );
    }
}

export default Navigation;