import '../../styling/LoginForm.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

export default class LoginForm extends Component {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  responseFacebook = async response => {
    console.log(response);

    await this.setState({
      email: response.email,
      password: response.id,
    });
    let button = await document.getElementById('loginButton');
    button.click();
  };
  render() {
    return (
      <div className="container login">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card card-signin flex-row my-5">
              <div className="card-body">
                <form className="form-signin" onSubmit={this.handleSubmit}>
                  <h5 className="card-title text-center">Login</h5>
                  {!this.state.email && <label htmlFor="inputEmail">Email address</label>}
                  <div className="form-label-group">
                    <input
                      type="email"
                      id="inputEmail"
                      className="form-control p-3"
                      placeholder="Email address"
                      name="email"
                      required
                      value={this.state.email || ''}
                      onChange={this.handleChange}
                    />
                  </div>
                  <hr />
                  {!this.state.password && <label htmlFor="inputPassword">Password</label>}
                  <div className="form-label-group mb-5">
                    <input
                      type="password"
                      id="inputPassword"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      required
                      value={this.state.password || ''}
                      onChange={this.handleChange}
                    />
                  </div>
                  <button
					className="btn btn-lg btn-primary btn-block text-uppercase btn-login"
					id="loginButton"
                    type="submit">
                    Login
                  </button>
                  <span className="d-block text-center mt-2 small account-no">
                    Don't have an account yet?
                    <Link
                      to="/signup"
                      className="d-block text-center mt-2 small Links signup-link">
                      Sign up here
                    </Link>
                  </span>

                  <hr className="my-4" />
                  <FacebookLogin
                    appId="1052579401609037"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={this.responseFacebook}
                    render={renderProps => (
                      <button
                        className="btn btn-lg btn-facebook btn-block text-uppercase"
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
