import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Form, FormControl, Button, Nav } from 'react-bootstrap';
import logo from '../assets/game-knight-logo.png';


function Navigation() {
    return (
        <Navbar bg="light" variant="light" >
            <Navbar.Brand><img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />GameKnight</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Scoreboard">Scoreboard</Nav.Link>
            <Nav.Link href="/Dice">Dice</Nav.Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
            </Form>
        </Navbar>

    )
}

export default Navigation;