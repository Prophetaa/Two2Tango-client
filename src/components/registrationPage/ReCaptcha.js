import React, { Component } from 'react'
import Recaptcha from 'react-recaptcha';

import { GOOGLE_API_KEY } from '../../constants'

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
                sitekey={GOOGLE_API_KEY} //Change this with the key from google reCaptcha
                render="explicit"
                onloadCallback={this.recaptchaLoaded}
                verifyCallback={this.verifyCallback}
              />
            </div>
        );
      }
    }

