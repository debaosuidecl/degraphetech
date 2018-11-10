import React from 'react'
import NavigationItems from '../Navigationitems/Navigationitems'
import classes from './DropDown.module.css'

const dropForMobile = [classes.DropDown, classes.MobileOnly]
const shouldDropArray = dropForMobile.concat(classes.Dropped);

const dropDown = (props)=> (
    <div className={props.shouldDropDown ? shouldDropArray.join(' '): dropForMobile.join(' ')}>
        <NavigationItems/>
    </div>
);

export default dropDown