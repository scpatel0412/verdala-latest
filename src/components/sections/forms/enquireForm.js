import React, { Component } from 'react';
import Button from '../../buttons/buttons';
import DataApi from '../../../utils/data-api';
import ReactGA from 'react-ga';

class EnquireForm extends Component {

    constructor(props) {
		super(props);
		
		this.inputFieldHandler 	= this.inputFieldHandler.bind(this);
		this.sendForm 	        = this.sendForm.bind(this);
		this.validateForm 	    = this.validateForm.bind(this);

		this.state = {
            // values: {},
            validationText: "",
            submittingForm: false,
            submittedForm: false,
            renderedFields: null,
            fields: [
                // {name: "subject", type: "text", placeholder: "Working together on a project", value: null, required: false},
                {name: "name", type: "text", placeholder: "Your name*", value: null, required: true},
                {name: "surname", type: "text", placeholder: "Your Surname*", value: null, required: true},
                {name: "country", type: "text", placeholder: "Country", value: null, required: false},
                {name: "email", type: "email", placeholder: "E-Mail*", value: null, required: true},
                {name: "telephone", type: "number", placeholder: "Telephone*", value: null, required: true},
                {name: "message", type: "textarea", placeholder: "Message", value: null, required: false},
                {name: "subject", type: "text", placeholder: "", value: "Property Enquiry Form", required: false},
                // {name: "gdpr", type: "checkbox", placeholder: "I consent this website to use my submitted information to respond to my inquiry", value: null, required: true},
            ]
        }
        
        this.state.renderedFields = this.state.fields.map((field, key) => {
            if ( field.type === "textarea" ) {
                return (
                    <textarea id={field.name} onChange={this.inputFieldHandler.bind(this, key)} placeholder={field.placeholder} name={field.name} />
                )
            } else if ( field.type === "checkbox" ) {
                return (
                    <label className="checkbox-cont">
                        <input id={field.name} type="checkbox" onChange={this.inputFieldHandler.bind(this, key)} name={field.name} />{field.placeholder}
                    </label>
                )
            } else {
                return (
                    <input id={field.name} onChange={this.inputFieldHandler.bind(this, key)} placeholder={field.placeholder} name={field.name} type={field.type} />
                )
            }
        })
    }

    sendForm(e) {
		e.preventDefault();
		// console.log("clicked", this.state.submittingForm, this.validateForm());
		if ( !this.state.submittingForm && !this.state.submittedForm && this.validateForm() ) {
			this.setState({
				submittingForm: true
            })

            var valueArr = {};

            this.state.fields.map((field, key) => {
                
                if ( field.name === "subject" ) {
                    valueArr[field.name] = field.value + " - Residence " + this.props.propId;
                } else {
                    valueArr[field.name] = field.value;
                }

                return null;
            })
			
			var form = new FormData();
			form.append("message", JSON.stringify(valueArr));

			DataApi.postEndpoint("mail/", {
				method: "POST",
				// headers: {
				// 	'Accept': 'application/json',
				// 	'Content-Type': 'application/json',
				// },
				cors: true,
				body: form
			}).then( response => {
				if ( response ) {
					this.setState({
						values: [],
						submittingForm: false,
						submittedForm: true,
						validationText: "Thanks for your enquiry. We'll get back to you shortly."
                    });
                    
                    setTimeout( () => {
                        ReactGA.pageview("/thank-you-enquire");
                    }, 100);      
				}
				
				// console.log(response);

			}).catch(error => {

				// console.log(error)

				return error;
			});
		} else {
            this.setState({
                values: [],
                // submittingForm: false,
                // submittedForm: true,
                // validationText: "Fill out all fields"
            });
        }
    }
    
    validateForm() {
        var validationArr = this.state.fields.map((field, key) => {
            if ( field.required ) {
                if ( field.value === null ) {
					// console.log(field.name);
					let currElem = document.getElementById(field.name);
					currElem.classList.add("field-error");
					this.setState({
						validationText: "Fill out all fields & Tick the consent box"
					});
                    return false;
                } else if ( field.name === 'email' ) {
                    if ( !(/(.+)@(.+){2,}\.(.+){2,}/.test(field.value)) ) {
						this.setState({
							validationText: "Email not in correct format."
						});
                        return false;
                    } else {
                        return true;
                    }
                } else {
                    return true;
                }
            } else if ( field.name === 'number' && field.value !== "" ) {
                if ( !(/^[0-9]*$/.test(field.value)) ) {
                    this.setState({
                        validationText: "Please enter a valid phone number"
                    });
                    return false;
                } else {
                    return true;
                }
            } else if ( field.name === 'gdpr' && !field.value ) {
                this.setState({
                    validationText: "Kindly consent to use your information"
                });

                return false;
            } else {
                return true;
            }
        })

        if ( validationArr.includes(false) ) {
            return false;
        } else {
            return true;
        }
    }

    inputFieldHandler(key, field) {

        field.target.classList.add("field-active");

        if ( this.state.fields[key].required ) {
            if ( this.state.fields[key].name === 'email' ) {
                if ( !(/(.+)@(.+){2,}\.(.+){2,}/.test(field.target.value)) ) {
                    field.target.classList.add("field-error");
                } else {
                    field.target.classList.remove("field-error");
                }
            } else {
                if ( field.target.value === '' ) {
                    field.target.classList.add("field-error");
                } else {
                    field.target.classList.remove("field-error");
                }
            }
        }

        var fieldTmp        = this.state.fields;

        if ( field.target.name === 'gdpr') {
            fieldTmp[key].value = field.target.checked;
        } else {
            fieldTmp[key].value = field.target.value;
        }
        
        this.setState({
            fields: fieldTmp
        })
    }

	setFormValue(name, value) {
        var currValues = this.state.values;

        currValues[name] = value;
                
		this.setState({
            values: currValues
        })
	}
    
    render() {
    
        return (
            <form className={"form-container contact-form-cont " + ((this.state.submittingForm) ? " submitting-form" : "") + ((this.state.submittedForm) ? " submitted-form" : "")}>
                <div className="inner-container">
                    <div className="input-stage">
                        <div className="inner-cont">
                            <div className="text-cont">
                                <div className="contact-row">
                                    {this.state.renderedFields[0]}
                                </div>
                                <div className="contact-row">
                                    {this.state.renderedFields[1]}
                                </div>
                                <div className="contact-row">
                                    {this.state.renderedFields[2]}
                                </div>
                                <div className="contact-row">
                                    {this.state.renderedFields[3]}
                                </div>
                                <div className="contact-row">
                                    {this.state.renderedFields[4]}
                                </div>
                                
                                <div className="contact-row">
                                    {this.state.renderedFields[5]}
                                </div>

                                <div className="validation-cont">
                                    <span>{this.state.validationText}</span>                                    
                                </div>
                                
                            </div>

                            <Button
                                type 	    = "form"
                                classes 	= "solid left-align submit-button extended-button"
                                text		= "Send Enquiry"
                                position    = "form"
                                onClick		= { this.sendForm }
                            />
                        </div>
                    </div>                    
                </div>
            </form>
        );
    }
}

export default EnquireForm;