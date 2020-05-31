import React from 'react';
import './Button.css';

const Button = ({children, btnType, clicked}) => {
    let btnClass = null;

    if(btnType === 'success') {
         btnClass = 'Button Success';
    } else {
         btnClass = 'Button Danger';
    }

    return(
        <button className={btnClass} onClick={clicked}>{children}</button>
    )
}

export default Button;