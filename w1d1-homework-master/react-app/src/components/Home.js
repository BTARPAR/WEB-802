import React from "react";
import {Button, Container} from "reactstrap";
import {Link} from "react-router-dom";
import AppNavbar from "./Navbar";

const Home = () => {
    return (
        <div>
            <AppNavbar/>
            <Container fluid>
                <Button className={'m-5 nav bg-light'}>
                    <Link to={'/inventories'} className={'nav-link'}>
                        Manage Inventory List
                    </Link>
                </Button>
            </Container>
        </div>
    )
}

export default Home