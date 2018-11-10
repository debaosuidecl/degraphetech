import React from 'react'
import './Services.css'
import Service from './Service/Service'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faBuilding, faUser } from '@fortawesome/free-solid-svg-icons'
library.add(faShoppingCart, faBuilding, faUser);
const serviceObject = {
    corporateWebsite: {
        icon: faBuilding,
        title: 'Corporate Website',
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
        title: 'Personal Website',
        description: 'Your personal image means the world to us. We will design your custom personal website to attract all the great names in your line of business effecting keeping your' +
        'image at high regard to the public eye'
    }
}

const services = ()=> (
    <div id="Job" className="ServicesCont col-12">
        <div  className="Services">
            <h1>Our Services</h1>
            {Object.keys(serviceObject).map(s => {
                   return <Service icon={serviceObject[s].icon}
                                   title={serviceObject[s].title}
                                   description={serviceObject[s].description}
                                   key={serviceObject[s].title}/>
                }

             )

            }
        </div>
    </div>

);

export default services