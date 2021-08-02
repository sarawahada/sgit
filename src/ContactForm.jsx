import React, { Component } from 'react'
import emailjs from "emailjs-com";
import Recaptcha from "react-recaptcha";
export default class ContactForm extends Component {
    constructor(props) {
        super(props)
        this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
        this.sendEmail = this.sendEmail.bind(this)
        this.handleSubscribe = this.handleSubscribe.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
        this.state = { isVerified: false }
    }
    recaptchaLoaded() { }
    sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('gmail123', 'template_e1thf6m', e.target, 'user_0uk1UxSp0X7y64PLYAdnY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    handleSubscribe(e) {
        if (this.state.isVerified) { this.sendEmail(e) }

        else { alert('Vérifier votre forme'); e.preventDefault(); }
    }
    verifyCallback(response) {
        if (response) {
            this.setState({ isVerified: true })
        }

    }
    render() {
        return (
            <div className='part-1'>
                <div className="form-container">
                    <div className="contact">
                        <form onSubmit={(e) => { this.handleSubscribe(e) }} className="contact-form">
                            <h1>Contactez nous!</h1>
                            <label>Nom*</label>
                            <input type="text" className="inp-element" name="name" required />
                            <label>Prénom</label>
                            <input type="text" className="inp-element" name="pre" />
                            <label>Téléphone*</label>
                            <input type="tel" className="inp-element" name="tel" required />
                            <label>Email*</label>
                            <input type="email" className="inp-element" name="mail" required />
                            <label for="sujet-select" >Sujet:</label>
                            <select id="monselect" name="sujet">
                                <option value=""  ></option>
                                <option value="Commercial"  >Commercial</option>
                                <option value="Technique"  >Technique</option>
                                <option value="Autre"  >Autre</option>
                            </select>
                            <label>Message*</label>
                            <textarea className="inp-message" cols='33' rows='20' placeholder="..." name="message" required></textarea>

                            <input type="submit" className="Recaptchafunction" value="envoyer" />

                            <Recaptcha
                                sitekey="6Lf7-MkbAAAAALoH3r-9jB9W_Vs-PRE3cMcsESHw"
                                render="explicit"
                                onloadCallback={this.recaptchaLoaded}
                                verifyCallback={this.verifyCallback} />
                        </form>
                    </div>
                </div>
            </div >
        )
    }
}
