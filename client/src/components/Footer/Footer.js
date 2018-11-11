import React from 'react'
import './Footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faPhoneSquare} from '@fortawesome/free-solid-svg-icons'
library.add(faEnvelope, faPhoneSquare);


const Footer = props => (
    <div className="Footer col-12">

        <ul>
            <li><a href="https://web.facebook.com/Degraphe-Tech-328551374622040/" target="_blank"
                   className="fa fa-facebook" rel="noopener noreferrer">

            </a>
            </li>
            <li> <a href= "https://twitter.com/DegrapheT" target="_blank" id="popup3" className="fa fa-twitter" rel="noopener noreferrer">

            </a></li>
            <li> <a href= "https://www.instagram.com/degraphetechng/?hl=en" target="_blank" id="popup2" className="fa fa-instagram" rel="noopener noreferrer">

            </a></li>
        </ul>
        <div className="Contacts">
            <FontAwesomeIcon className="MailIcon"  color="#f05a28" icon={faEnvelope} size="3x" style={{
                textAlign: 'center'
            }}/>
            <a href="mailto:info@degraphetech.com.ng">info@degraphetech.com.ng</a>
        </div>
        <div className="Contacts">
            <FontAwesomeIcon className="PhoneIcon"  color="#f05a28" icon={faPhoneSquare} size="3x" style={{
                textAlign: 'center'
            }}/>
            <a href="tel:+2348126209586">+234 812 6209 586</a>
        </div>
        <p>Copyright © 2018 Degraphe Tech - All Rights Reserved</p>
    </div>
)

export default Footer