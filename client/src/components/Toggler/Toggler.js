import React from 'react'
import classes from './Toggler.module.css'

const Toggler =  (props) => (
    <div onClick={props.clicked} className={classes.Toggler}>
        {!props.isToggled?<div></div>: <div className={classes.CounterClockwise}></div>}
        {!props.isToggled?<div></div>: <div className={classes.Clockwise}></div>}
        <div></div>

    </div>
);

export default Toggler