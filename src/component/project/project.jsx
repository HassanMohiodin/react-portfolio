import React from "react";
import { withRouter } from 'react-router';

import cardData  from '../../data';

import './project.css';

function Page (props) {
    let key = props.match.params.id;
    let data = cardData.data[key-1];

    return (
        <div className="image-container">
            <img className="image" src={`${data.imageUrl}`} alt="The Image url Provided is not present here."/>
            <div className="description-container">
                <h1 className="project-heading">{data.label}</h1>
                <p className="project-description-short">
                    {data.cardText}<span className="link">Gatsby.js</span>.
                </p>
                <h1 className="head-2">{data.label2}</h1>
                <p className="description">
                    {data.description}
                </p>
                <img className="image" src={`${data.imageUrl2}`} alt="The Image url Provided is not present here."/>
                <p className="description">{data.shortDescription}</p>
            </div>
        </div>
    )
}

export default withRouter(Page);