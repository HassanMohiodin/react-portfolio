import React from 'react';

import './input.css';

function Input (props) {
    return (
        <input className={`${props.class} input-style`}  type="text"/>
    ) 
}

export default Input;