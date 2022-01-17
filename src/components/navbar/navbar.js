import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css';

function Navbar() {
    return (
        <div className="container navbar">
        <div className="nav1">
            <div className="nav-content">
                <div className="hac"><a href="/">Home</a></div>
                <div className="hac">About</div>
                <div className="hac"><a href="/samsung">Samsung</a></div>
            </div>
            <div className="landie-w">
                <div className="landie">Landie</div>
            </div>
            <div className="buy">
                <div className="buy-w">Buy Now</div>
            </div>
        </div>
        </div>
    );
}

export default Navbar
