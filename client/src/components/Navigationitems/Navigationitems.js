import React,{Component} from 'react';
import NavigationItem from '../Navigationitem/Navigationitem'
import classes from './Navigationitems.module.css'





class NavigationItems extends Component{
    state = {
        divHeight:{
            HomeHeight: 0,
            AboutHeight: 0,
            ServiceHeight: 0,
            ContactHeight: 0
        },
        navPos: {
            HomePos: 0,
            AboutPos: 651,
            ServicePos: 1240,
            ContactPos: 2020
        }
    };
    componentDidMount(){

    }
    componentDidUpdate(){

        this.pageLoadHandler()
    }

    shouldComponentUpdate(nextProp, nextState){
       return nextState.navPos === this.state.navPos && nextState.divHeight === this.state.divHeight
    }


   pageLoadHandler = ()=> {
       const OFFSET = 100;
       let HomePosVar = document.querySelector('#home').offsetTop - OFFSET
       let AboutPosVar = document.querySelector('#About').offsetTop - OFFSET
       let ServicePosVar = document.querySelector('#Job').offsetTop - OFFSET
       let ContactPosVar = document.querySelector('#Contact').offsetTop - OFFSET -400;
       let HomeHeightVar = document.querySelector('#home').clientHeight;
       let AboutHeightVar = document.querySelector('#About').clientHeight;
       let ServiceHeightVar = document.querySelector('#Job').clientHeight;
       let ContactHeightVar = document.querySelector('#Contact').clientHeight;
       let navPos = {
           ...this.state.navPos,
           HomePos: HomePosVar,
           AboutPos: AboutPosVar,
           ServicePos: ServicePosVar,
           ContactPos: ContactPosVar
       };
       let divHeight = {
           ...this.state.divHeight,
           HomeHeight: HomeHeightVar,
           AboutHeight: AboutHeightVar,
           ServiceHeight: ServiceHeightVar,
           ContactHeight: ContactHeightVar
       }
        this.updateHandler(navPos, divHeight)

   }

   updateHandler=(navPos, divHeight)=>{

           this.setState({
               navPos: navPos, divHeight:divHeight
           });

   }

    render(){


        return(
            <ul className={classes.NavigationItems}>
                <NavigationItem Active={window.pageYOffset > this.state.navPos.AboutPos ? null : "Active"} ActiveTop="ActiveTop"
                                linkType="AnchorLink" href="#home">Home</NavigationItem>
                <NavigationItem Active={window.pageYOffset >= this.state.navPos.AboutPos && window.pageYOffset < this.state.navPos.ServicePos ? "Active" : null}
                                linkType="AnchorLink" href="#About">About</NavigationItem>
                <NavigationItem Active={window.pageYOffset >= this.state.navPos.ServicePos && window.pageYOffset < this.state.navPos.ContactPos ? "Active" : null}
                                linkType="AnchorLink" href="#Job">Services</NavigationItem>
                <NavigationItem Active={window.pageYOffset >= this.state.navPos.ContactPos ? "Active" : null}
                                linkType="AnchorLink" href="#Contact">Contact</NavigationItem>
            </ul>
        )
    }

    }



export default NavigationItems