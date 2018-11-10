
import React from 'react'
import {Link} from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'


import classes from './Navigationitem.module.css'
const navigationItem = (props)=> {
    switch(props.linkType){
        case 'ReactLink':
            return(
                <li className={classes.NavigationItem}>
                    <Link to={props.to}>{props.children}</Link>
                </li>
            );
        case 'AnchorLink':
            return(
                <li className={classes.NavigationItem}>
                    <AnchorLink className={window.scrollY < "70"?
                        [classes[props.Active], classes[props.ActiveTop], classes.TopLinks].join(' ')
                        :classes[props.Active]} offset="50" href={props.href}>{props.children}</AnchorLink>
                </li>
            );
        default:
            return
    }
};



export default navigationItem