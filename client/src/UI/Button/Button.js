import React from 'react'
import './Button.css';



const Button = props=> {
    let customButton;
    switch(props.classType){
        case 'Success':
            customButton = <button disabled={props.disabled} onClick={props.clicked} className="Success">
                {props.children}
            </button>;
            break;
        case 'Danger':
            customButton= <button disabled={props.disabled} onClick={props.clicked} className="Danger">
                {props.children}
            </button>;
            break;
        default:
            customButton= null;
    }
    return customButton;
};

export default Button