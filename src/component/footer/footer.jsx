import React from 'react';

import SocialBar from '../socialBar/socialBar';

import './footer.css';

function Footer () {
    return (
        <div className="footer">
            <SocialBar/>
            <p className="footer-text">Your Custom Portfolio © 2021 — Published with Argon</p>
        </div>
    )
}

export default Footer;