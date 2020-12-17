import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Add from './Add';
import FilterForm from "./FilterForm";

function NavBar({ handleAdd, handleFilter }) {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>My Movie List App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Add handleAdd={handleAdd} />
                </Nav>
                <FilterForm handleFilter={handleFilter} />
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
