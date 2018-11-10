import React, {Component} from 'react'
import NavContainer from '../../components/NavContainer/NavContainer'
import classes from './Header.module.css'
import Toggler from '../../components/Toggler/Toggler'
import Logo from '../../components/Logo/Logo'
import DropDown from '../../components/DropDown/DropDown'


class Header extends Component{
    state={
         isToggled: false,
        navColourBlack: false,
    };
    componentDidMount(){


        window.addEventListener('scroll', (event) => {
            window.scrollY > "70" ? this.setState({navColourBlack: true}): this.setState({navColourBlack: false})
        })
    };

    toggleHandler= ()=> {
        this.setState((prevState)=> {
            return {
                isToggled: !prevState.isToggled
            }
        })
    };
    render(){
       let headerClasses = [classes.Header, classes.Scrolled]; let headerClassesTop = [classes.Header, classes.TopScroll]
        return(
            <React.Fragment>
                <div className={this.state.navColourBlack? headerClasses.join(' '): headerClassesTop.join(' ')}>
                    <Logo/>
                    <Toggler isToggled={this.state.isToggled} clicked={this.toggleHandler}/>
                    <NavContainer/>
                </div>
                <DropDown shouldDropDown={this.state.isToggled}/>
            </React.Fragment>

        )
    }
}

export default Header