import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../../styling/RegistrationForm.css';
import { Link } from 'react-router-dom';

import ReCaptcha from './ReCaptcha';


class RegistrationForm extends Component {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  handleCaptcha = () =>{
    this.setState({
      isVerified: true
    })
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="container registration-form-1 signupContainer">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card card-signin flex-row my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Step 1: Log in info</h5>
                <form className="form-signin" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Email *"
                      id="inputEmail"
                      className="form-control"
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
                      className="form-control"
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
                      className="form-control"
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
                   <ReCaptcha handleChanges={this.handleCaptcha}/>
                  </div>
                  <button
                    disabled={this.state.isVerified=== true ? false : true}
                    className="btn btn-lg btn-primary btn-block text-uppercase finalStepBtn"
                    type="submit">
                    Next Step
                  </button>
                  <p className="d-block text-center mt-2 small">
                    Already a user?
                    <Link to={'/login'}> Sign In</Link>
                  </p>
                  <hr className="my-4" />
                  <button
                    disabled
                    data-toggle="tooltip"
                    title="Not yet available"
                    className="btn btn-lg btn-google btn-block text-uppercase"
                    type="submit">
                    <i className="fab fa-google mr-2" /> Sign up with Google
                  </button>
                  <button
                    disabled
                    data-toggle="tooltip"
                    title="Not yet available"
                    className="btn btn-lg btn-facebook btn-block text-uppercase"
                    type="submit">
                    <i className="fab fa-facebook-f mr-2"  /> Sign up with
                    Facebook
                  </button>
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

export default connect(mapStateToProps)(RegistrationForm)