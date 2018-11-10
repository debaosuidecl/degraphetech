import React from 'react'
import './DirectionDown.scss'
const directionDown = props=> (
    <div className="container" onClick={props.clicked}>
        <div className="chevron"></div>
        <div className="chevron"></div>
        <div className="chevron"></div>
    </div>
)

export default directionDown