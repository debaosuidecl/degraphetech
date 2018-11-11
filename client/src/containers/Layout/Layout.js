import React, {Component} from 'react'
import Header from '../Header/Header'
import CodingImage from '../../components/CodingImage/CodingImage'
import About from '../../components/About/About'
import classes from './Layout.module.css'
import Services from '../../components/Services/Services'
import ContactForm from '../../containers/ContactForm/ContactForm'
import BrandImage from '../../components/BrandImage/BrandImage'
import Footer from '../../components/Footer/Footer'

class Layout extends Component{

    state = {
        isHoveredOne: false,
        isHoveredTwo: false,
        brandImageOne: {
            preContent: 'With ',
            spanContent: 'Degraphe Tech ',
            postContent: 'its all about Quality with a touch of elegance!'
        },
        brandImageTwo: {
            preContent: 'Get in touch ',
            spanContent: 'Today! ',
            postContent: 'and assert your brand\'s online dominance Globally!',
            content: 'Broaden your horizons'
        }
    }
    mouseOverOneHandler = (e)=> {
        this.setState({isHoveredOne: true})
    }
    mouseLeaveOneHandler = (e)=> {
        this.setState({isHoveredOne: false})
    }
    mouseOverTwoHandler = (e)=> {

        this.setState({isHoveredTwo: true})
    }
    mouseLeaveTwoHandler = (e)=> {
        this.setState({isHoveredTwo: false})
    }

    render(){
        return(
            <div className={classes.Layout}>
                <Header/>
                <CodingImage/>
                <About/>
                <BrandImage onMouseOverHandler={this.mouseOverOneHandler}
                            isHovered = {this.state.isHoveredOne}
                            onMouseLeaveHandler={this.mouseLeaveOneHandler}
                            pictureUrl='BrandImagePicOne'
                            preContent={this.state.brandImageOne.preContent}
                            spanContent ={this.state.brandImageOne.spanContent}
                            postContent ={this.state.brandImageOne.postContent}
                />
                <Services/>
                <BrandImage pictureUrl='BrandImagePicTwo'
                            preContent={this.state.brandImageTwo.preContent}
                            spanContent ={this.state.brandImageTwo.spanContent}
                            postContent ={this.state.brandImageTwo.postContent}
                            onMouseLeaveHandler={this.mouseLeaveTwoHandler}
                            onMouseOverHandler={this.mouseOverTwoHandler}
                            isHovered = {this.state.isHoveredTwo}


                />
                <ContactForm/>
                <Footer/>
            </div>
        )
    }
}

export default Layout