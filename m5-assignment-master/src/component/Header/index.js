import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
    const {total} = props
    return (
        <header className="App-header">
            <Link to="/">
                <p>Shop 2 <span className={'home-header'}>R</span>eact</p>
            </Link>
            <Link to="/cart">
                <div>
                    <FontAwesomeIcon icon={faShoppingCart}/>
                    <p>{total} items</p>
                </div>
            </Link>
        </header>
    )
}

export default Header