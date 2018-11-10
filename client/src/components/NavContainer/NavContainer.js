import React from 'react'
import NavigationItems from '../Navigationitems/Navigationitems'
import classes from './NavContainer.module.css'

const navContainerArray = [classes.NavContainer, classes.DesktopOnly]

const navContainer = props => (
    <div className={navContainerArray.join(' ')}>
        <NavigationItems/>
    </div>
);

export default navContainer