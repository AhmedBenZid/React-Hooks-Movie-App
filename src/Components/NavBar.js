import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Add from './Add';
import FilterForm from "./FilterForm";

function NavBar({ handleAdd, handleFilter }) {
    return (
        <div className="mb-4 bg-dark" variant="dark">
            <Navbar expand="lg" className="container" >
                <h1 >My Movie List App</h1>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Add handleAdd={handleAdd} />
                    </Nav>
                    <FilterForm handleFilter={handleFilter} />
                </Navbar.Collapse>
            </Navbar>
        </div>

    )
}

export default NavBar
