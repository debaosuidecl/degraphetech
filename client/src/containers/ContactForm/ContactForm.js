import React,{Component} from 'react';
import Input from '../../UI/Input'
import {checkValidity} from '../../shared/utility'
import './ContactForm.css'
import Button from '../../UI/Button/Button'
import axios from 'axios';




class ContactForm extends Component{
    state = {
        controls: {
            name: {
                elementType: 'input',

                elementConfig: {
                    type: 'name',
                    placeholder: 'Enter your name',
                    id: "name",
                    name: "name"
                },

                value: '',

                validation: {
                    required: true,
                },

                valid: false,
                touched: false,
                blurred: false,
                disabled: false,
                shouldBeValidated: true
            },

            email: {
                elementType: 'input',

                elementConfig: {
                    type: 'email',
                    placeholder: 'Enter your email',
                    id: "email",
                    name: "_replyto"
                },

                value: '',

                validation: {
                    required: true,
                    isEmail: true
                },

                valid: false,
                touched: false,
                blurred: false,
                disabled: false,
                shouldBeValidated: true

            },
            serviceType: {
                elementType: 'select',
                elementConfig: {
                    options: [{value: 'corporate', displayValue: 'Corporate Website'},
                        {value: 'e-commerce', displayValue: 'E-Commerce Website'},
                        {value: 'SEO', displayValue: 'SEO Solutions'},
                        {value: 'personal', displayValue: 'Personal Website'},

                    ],
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
                blurred: false,
                disabled: false,
                shouldBeValidated: true
            },

            message: {
                elementType: 'textarea',

                elementConfig: {
                    type: 'message',
                    placeholder: 'Enter Your message',
                    id: "message",
                    name: "message"
                },

                value: '',

                validation: {
                    required: true,
                },

                valid: false,
                touched: false,
                blurred: false,
                disabled: true,
                shouldBeValidated: false

            }
        },
        isSignUp: true,
        formValidity: false,
        mounted: false,
        messageSent: false,
        messageFailed: false,
        loading: false,
        serverProblem: false
    };


    onChangeHandler= (event, inputIdentifier)=> {
        //console.log(event.target.value);
        let controls = {
            ...this.state.controls,
            [inputIdentifier]: {
                ...this.state.controls[inputIdentifier],
                value: event.target.value,
                touched: true,
                valid: checkValidity(event.target.value, this.state.controls[inputIdentifier].validation ),
            }
        };

        let isValid = true;
        for (let inputIdentifier in controls){
            isValid = isValid && controls[inputIdentifier].valid;}
        this.setState({controls: controls, formValidity: isValid})
    };



    onBlurHandler = (event, inputIdentifier)=> {
        let controlsForBlur = {
            ...this.state.controls,
            [inputIdentifier]: {
                ...this.state.controls[inputIdentifier],
                blurred: this.state.controls[inputIdentifier].value !== ''
            }

        };
        this.setState({controls: controlsForBlur})
    };


    onSubmitHandler= (event)=> {
        event.preventDefault();
        this.setState({formValidity: false,
            messageSent: false,
            messageFailed: false,
            serverProblem: false,
            loading: true})
        const email = {
            name: this.state.controls.name.value,
            email: this.state.controls.email.value,
            message: this.state.controls.message.value,
            serviceType: this.state.controls.serviceType.value
        };
        axios.post('/send', email)

            .then(data=> {
                if(data.data.msg === "fail"){
                    this.setState({serverProblem: true, loading: false})
                } else {
                    let controls;
                let inputIdentifiers = ['name', 'email', 'message']
                inputIdentifiers.map(i=> {
                    controls = {
                        ...this.state.controls,
                        [i]: {
                            ...this.state.controls[i],
                            value: '',
                            valid: false,
                            touched: false,
                            blurred: false
                        }
                    }
                    return this.setState({controls: controls})
                })
                this.setState({messageSent: true, messageFailed: false, serverProblem: false, formValidity: false, loading: false})
                }

            })
            .catch(err=> {
                console.log(err, "there was an error");
                this.setState({messageSent: false, messageFailed: true, serverProblem: false, formValidity: false, loading: false})
            })

    };



    render(){
        let inputArray = [];

        for (let inputIdentifier in this.state.controls){

            inputArray.push({
                id: inputIdentifier,
                config: this.state.controls[inputIdentifier]
            });
        }

        let ContactFormClass = 'ContactForm col-12';
        return(
            <div className={ContactFormClass} id="Contact">
                <h1>Contact Us</h1>
                {/*<h4 className="SuccessMailMessage">

                </h4>
                <h4 className="FailureMailMessage">

                </h4>*/}
                <form className="contactform col-12" onSubmit={this.onSubmitHandler}>
                    {inputArray.map(input=> {
                        return <Input
                            key={input.id}
                            elementType={input.config.elementType}
                            value={input.config.value}
                            elementConfig={input.config.elementConfig}
                            changed={(event)=>this.onChangeHandler(event,input.id)}
                            touched={input.config.touched}
                            isBlurredOut={input.config.blurred}
                            invalid={!input.config.valid}
                            shouldBeValidated = {input.config.shouldBeValidated}
                            valueType={input.id}
                            disabled={input.config.disabled}
                            blurred={(event)=>this.onBlurHandler(event, input.id)}
                        />
                    })}
                    {this.state.messageSent?<h4 style={{color: 'green', textAlign: 'center'}}>
                        Your message has been Sent. We will reach out to you very shortly.</h4>: null}
                    {this.state.messageFailed?<h4 style={{color: 'red', textAlign: 'center'}}>
                        Your message was not sent. May be due to no network connection</h4>: null}
                    {this.state.serverProblem?<h4 style={{color: 'red', textAlign: 'center'}}>
                        Server Error, Please Try again Later</h4>: null}

                    <Button disabled={!this.state.formValidity}
                            classType="Success">Send Message {this.state.loading?
                        <h4 style={{
                            display: 'inline',
                            fontSize: '14px'
                        }}>Loading...</h4>: null}
                        </Button>
                    <input type="hidden" name="_next" value="/thanks"/>
                </form>
            </div>
        )
    }
}






export default ContactForm