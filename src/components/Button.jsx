import React from 'react';
import classes from './Button.module.css'

const Button = ({onClick, inlineStyles, children}) => {
    return (
        <button className={classes.button} style={inlineStyles} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;