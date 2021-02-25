import React from 'react';
import { SocialIcon  } from "react-social-icons";

import socialData from '../../data';

import './socialBar.css';

function SocialBar () {
    const social = socialData.socials;
    return (
        <div className="social-bar">
            <SocialIcon className="social-icon" url={social.facebook}/>
            <SocialIcon className="social-icon" url={social.instagram}/>
            <SocialIcon className="social-icon" url={social.youtube}/>
            <SocialIcon className="social-icon" url={social.linkedin}/>
            <SocialIcon className="social-icon" url={social.twitter}/>
        </div>
    )
}

export default SocialBar;