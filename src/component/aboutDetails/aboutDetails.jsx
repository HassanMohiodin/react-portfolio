import React from 'react';

import data from '../../data';
import './aboutDetails.css';

function AboutDetails () {
    // const name = data.name;
    // const info = data.aboutMe;
    // const info = data.abou
    return (
        <div className="block">
            <h1 className="headding-1">Hassan Mohiodin</h1>
            <p className="about-description-short">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc..
            </p>
            <img className="image-about" src="https://static.ghost.org/v3.0.0/images/writing-posts-with-ghost.png" alt=""/>
            <h1 className="headding-1">More About Me</h1>
            <p className="about-description-short">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc..
            </p>
        </div>
    )
}

export default AboutDetails;