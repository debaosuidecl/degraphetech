import React,{Component} from 'react'
import classes from './CodingImage.module.css'
import DirectionDown from '../../UI/DirectionDown'
import AnchorLink from 'react-anchor-link-smooth-scroll'
class CodingImage extends Component{

    state= {
        showContent: false,
        words: ['Web Development', 'SEO Solutions', 'Graphics Design', 'Personal Branding'],
        txt: '',
        wordIndex: 0,
        wait: parseInt(2000),
        isDeleting: false,
    };

    componentDidMount(){

        setTimeout(()=> {
            this.setState({showContent: true})
        }, 500)

        setTimeout(()=> {
            this.typeWriter()
        }, 600)


    }
    typeWriter = () => {
        let typeSpeed = 200;
        //current index of word
        const current = this.state.wordIndex % this.state.words.length;
        //Get full text of current word
        const fullTxt = this.state.words[current]
        // Check if deleting
        if(this.state.isDeleting){
            this.setState({txt: fullTxt.substring(0, this.state.txt.length - 1)})
            typeSpeed /= 3

        }else{
            //Add a character to the txt in the span tag
            this.setState({txt: fullTxt.substring(0, this.state.txt.length + 1)})
        }
            // if word is complete
        if(!this.state.isDeleting && this.state.txt === fullTxt){
            // Make it pause at end
            typeSpeed = this.state.wait;
            this.setState({isDeleting: true})

        } else if(this.state.isDeleting && this.state.txt === ''){ //else if it is done deleting the words
            //set Deleting to false and go to the next value of the words array by increasing word index
            this.setState((prevState)=>{
               return  {
                    isDeleting: false,
                    wordIndex: prevState.wordIndex + 1
                }
            })
            //type speed should also paused
            typeSpeed = 300 // wait 300 milliseconds

        }



        setTimeout(()=> this.typeWriter(), typeSpeed)
    }

      onClickedHandler=()=> {

      }


    render(){

           let codingText=(
               <div className={this.state.showContent?[classes.CodingText, classes.CodingShowText].join(' '): classes.CodingText}>
                   <h1>Welcome to <span style={{
                       color: '#f03313'
                   }}>DegrapheTech!</span></h1>
                   <h6>The #1 Brand in <span className={classes.TypeWriter}>{this.state.txt}</span></h6>
               </div>
           )
           let codingButton=(
               <div className={this.state.showContent?[classes.CodingButton, classes.CodingButtonShow].join(' '): classes.CodingButton}>
                   <AnchorLink style={{
                       textDecoration: 'none'
                   }} href="#Contact" offset="100"> <button className={classes.GetInTouch}>Get in Touch</button></AnchorLink>
                   <AnchorLink style={{
                       textDecoration: 'none'
                   }} href="#About"><button className={classes.About}>About</button></AnchorLink>
               </div>
           )

        return(

            <div className={classes.CodingImage} id="home">
                {codingText}
                {codingButton}
                <AnchorLink href="#Job" offset="100">
                    <DirectionDown clicked={this.onClickedHandler}/>
                </AnchorLink>
            </div>
        )
    }
}

export default CodingImage