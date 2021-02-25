import react from 'react';
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
                    <Link to="/tag">    
                        <a href="#contact">Tag</a>
                    </Link>
                    <a href="javascript:void(0);" className="icon" onclick="myFunction()">
                        <i className="fa fa-bars"></i>
                    </a>
                </div>        
            </div>
    )
}

export default Header;