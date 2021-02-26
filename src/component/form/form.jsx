import React from 'react';

import Input from '../input/input';
import Label from '../label/label';

import './form.css';

function Form () {
    return (
        <div className="contact-container">
             <div className="form">
                <div className="name-section">
                    <div className="flex-column">
                        <Label name="First Name"/>
                        <Input class="input" />
                    </div>
                    <div className="flex-column">
                        <Label name="Second Name"/>
                        <Input class="input"/>
                    </div>
                    <div className="flex-column">
                        <Label name="Email"/>
                        <Input class="input"/>
                    </div>
                    <div className="flex-column">
                        <Label name="Address"/>
                        <Input class="input"/>
                    </div>
                    <div className="flex-column">
                        <Label name="Message"/>
                        <textarea rows="10" className="input"/>
                    </div>
                    <button className="btn">
                        Contact Us
                    </button>
                </div>
            </div>
            <div className="contact-info" id="#overlay">
                <h1 className="heading-contact">Contact Us</h1>
                <p className="class-desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <h1 className="heading-contact">Address</h1>
                <p className="class-desc">
                    155-C Argon Technologies.
                </p>
                <h1 className="heading-contact">Contact Email</h1>
                <p className="class-desc">
                    argon@gmail.com
                    (92) 232 234242244
                </p>
            </div>
        </div>
       
    ) 
}

export default Form;