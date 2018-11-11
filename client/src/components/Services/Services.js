import React,{Component} from 'react'
import './Services.css'
import Service from './Service/Service'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faBuilding, faUser } from '@fortawesome/free-solid-svg-icons'
library.add(faShoppingCart, faBuilding, faUser);




class Services extends Component{
    state = {
        serviceObject : {
            corporateWebsite: {
                icon: faBuilding,
                title: 'Corporate Website Designs',
                description: 'Our creative team of graphic designers and web developers will design your responsive,' +
                ' professional and elegant website for your company with that elegant touch that\'s sure' +
                ' to leave your competitors jaw-dropped.'
            },
            ecommerce: {
                icon: faShoppingCart,
                title: 'Ecommerce Solutions',
                description: 'We create modern cutting-edge E-commerce Websites with amazing user interface\n' +
                '                and server speed encouraging your customers to always\n' +
                '                patronise your services with a smile'
            },
            personalWebsite: {
                icon: faUser,
                title: 'Personal Website Designs',
                description: 'Your personal image means the world to us. We will design your custom personal website to attract all the great names in your line of business effectively keeping your' +
                'image at high regard to the public eye'
            }
        },
        divHeight:{
            ServiceHeight: 0
        },
        navPos: {
            ServicePos: 1240,
            ContactPos: 2020,
        }
    };
    componentDidMount(){
        window.addEventListener('scroll',()=> {
            this.pageLoadHandler()
        }, false)
    }


    pageLoadHandler = ()=> {
        const OFFSET = 600;
        let ContactPosVar = document.querySelector('#Contact').offsetTop - OFFSET
        let ServicePosVar = document.querySelector('#Job').offsetTop - OFFSET -600

        let navPos = {
            ...this.state.navPos,
            ServicePos: ServicePosVar,
            ContactPos: ContactPosVar
        };

        this.updateHandler(navPos)

    }

    updateHandler=(navPos)=>{

        this.setState({
            navPos: navPos
        });

    }


    render(){



        return(
            <div id="Job" className={window.pageYOffset >= this.state.navPos.ServicePos && window.pageYOffset < this.state.navPos.ContactPos ? "ServicesCont col-12 ScrolledToServices" : "ServicesCont col-12"}>
                <div  className="Services">
                    <h1>Our Services</h1>

                    {Object.keys(this.state.serviceObject).map(s => {
                            return <Service icon={this.state.serviceObject[s].icon}
                                            title={this.state.serviceObject[s].title}
                                            description={this.state.serviceObject[s].description}
                                            key={this.state.serviceObject[s].title}/>
                        }

                    )

                    }
                </div>
            </div>

        )
    }
}
export default Services