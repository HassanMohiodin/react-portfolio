import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

function Header (props) {
    return (
            <div className="large">
                <div className="topnav" id="myTopnav">
                    <Link to='/'>
                        <div>
                        <a href="#home">Home</a>
                        </div>
                    </Link>
                    <Link to='/projects'>
                        <div>
                        <a href="#news">Projects</a>
                        </div>
                    </Link>
                    <Link to="/contact">    
                        <a href="#contact">Contact</a>
                    </Link>
                    <a href="#icon" className="icon">
                        <i className="fa fa-bars"></i>
                    </a>
                </div>        
            </div>
    )
}

export default Header;