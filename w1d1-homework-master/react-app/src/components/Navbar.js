import React from "react";
import {Navbar, NavbarBrand} from "reactstrap";
import {Link} from "react-router-dom";

const AppNavbar = () => {

    return (
        <Navbar className={'navbar-dark bg-dark px-5'} expand={'md'}>
            <NavbarBrand tag={Link} to={"/"}>Home</NavbarBrand>
        </Navbar>
    )
}

export default AppNavbar