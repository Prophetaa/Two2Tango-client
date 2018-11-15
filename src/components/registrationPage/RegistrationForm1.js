import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../styling/RegistrationForm.css';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import ReCaptcha from './ReCaptcha';


import { FACEBOOK_API_KEY } from '../../constants';
class RegistrationForm extends Component {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.facebookSubmition) this.props.facebookSubmit(this.state);
    this.props.onSubmit(this.state);
  };

  handleCaptcha = () => {
    this.setState({
      isVerified: true
    });
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  responseFacebook = async response => {
    if (response.email) {
      await this.setState({
        email: response.email,
        facebookSubmition: true,
        password: response.id,
        fbName: response.name.split(' ', 2),
        confirmPassword: response.id,
        fbPicture: response.picture.data.url,
        isVerified: true
      });
      let button = await document.getElementById('profileBtn');
      button.click();
    }
    return null;
  };

  responseInstagram = async response => {
    console.log(response);
  };

  render() {
    return (
      <div className="container registration-form-1 signupContainer">
        <div className="row signup-row">
          <div className="col-lg-10 col-xl-9 mx-auto padd">
            <div className="card card-signin flex-row my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Step 1: Log in info</h5>
                <form className="form-signin" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Email *"
                      id="inputEmail"
                      className="form-control boxShaddow"
                      name="email"
                      value={this.state.email || ''}
                      required
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      id="inputPassword"
                      className="form-control boxShaddow"
                      placeholder="Password *"
                      required
                      value={this.state.password || ''}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="confirmPassword"
                      id="inputConfirmPassword"
                      placeholder="Confirm Password *"
                      className="form-control boxShaddow"
                      required
                      value={this.state.confirmPassword || ''}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="errors">
                    {this.state.password
                      ? this.state.password.length < 6 && (
                          <p style={{ color: 'red' }}>
                            Password needs to be 6 characters or longer!
                          </p>
                        )
                      : null}
                    {this.state.password &&
                      this.state.confirmPassword &&
                      this.state.password !== this.state.confirmPassword && (
                        <p style={{ color: 'red' }}>
                          The passwords have to match!
                        </p>
                      )}
                    <ReCaptcha handleChanges={this.handleCaptcha} />
                  </div>
                  <button
                    disabled={this.state.isVerified === true ? false : true}
                    className="btn btn-lg btn-primary btn-block text-uppercase finalStepBtn btnShaddow"
                    id="profileBtn"
                    type="submit">
                    <span> Next Step </span>
                  </button>
                  <p className="d-block text-center mt-2 small account-no">
                    Already a user?
                    <Link
                      to={'/login'}
                      className="d-block text-center mt-2 small Links signup-link">
                      {' '}
                      Log In
                    </Link>
                  </p>
                  <hr className="my-4" />
                  <FacebookLogin
                    appId={FACEBOOK_API_KEY}
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={this.responseFacebook}
                    render={renderProps => (
                      <button
                        className="btn btn-lg btn-facebook btn-block text-uppercase fbButton btnShaddow"
                        onClick={renderProps.onClick}>
                        <i className="fab fa-facebook-f mr-2" /> Sign up with
                        Facebook
                      </button>
                    )}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps)(RegistrationForm);
