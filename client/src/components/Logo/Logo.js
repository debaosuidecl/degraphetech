import React from 'react';
import dtlogo from '../../images/dtlogo.png'
import classes from './Logo.module.css'

const logo = props=> (
    <div className={window.scrollY>'70'?[classes.Logo, classes.LogoScrolled].join(' '): classes.Logo}>
        <img src={dtlogo} alt=""/>
    </div>

)

export default logo