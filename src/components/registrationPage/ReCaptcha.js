import React, { Component } from 'react'
import Recaptcha from 'react-recaptcha';

export default class ReCaptcha extends Component {
    constructor(props) {
        super(props)
        this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
    
        this.state = {
          isVerified: false
        }
      }
      recaptchaLoaded() {
        console.log('capcha successfully loaded');
      }
      verifyCallback(response) {
        if (response) {
          console.log("Hey, looks like you're not a robot!")
          this.props.handleChanges()
        }
      }
      render() {
        return (
          <div className="recaptcha">
              <Recaptcha
                sitekey="6LepOXoUAAAAAHN3GTNxdcI4rZ_96K118NiJpAIj" //Change this with the key from google reCaptcha
                render="explicit"
                onloadCallback={this.recaptchaLoaded}
                verifyCallback={this.verifyCallback}
              />
            </div>
        );
      }
    }

