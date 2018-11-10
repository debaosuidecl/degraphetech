import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Service.css'


const service = (props)=> (
    <div className="ServiceCont col-4">
        <div className="Service ">
            <FontAwesomeIcon className="FontClass"  color="#f05a28" icon={props.icon} size="3x" style={{
                textAlign: 'center'
            }}/>
            <h4 className="col-12">
                {props.title}
            </h4>
            <p>
                {props.description}
            </p>
        </div>

    </div>
);

export default service