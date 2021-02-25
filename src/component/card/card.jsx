import react from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


import './card.css';

function Card ({label, cardText, footerText, time, imageUrl}) {
    return (
        <Link to='/projects' className="link-style">
            <div className="card-container">
                <div className="poster-image" style={{ backgroundImage: `url(${imageUrl})`}}></div> 
                <h2 className="card-label">{label}</h2>
                <p className="card-text">{cardText}</p>
                <div className="card-footer">
                    <div className="grey"><FontAwesomeIcon icon={faCoffee} /> <span className="icon-text">{footerText}</span></div>
                    <p className="grey">{time} min read</p>
                </div>
            </div>
        </Link>
    )
}

export default Card;