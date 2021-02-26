import React from 'react';

import './label.css';

function Label ({name}) {
    return (
        <label className="label-style" >{name}</label>
    ) 
}

export default Label;