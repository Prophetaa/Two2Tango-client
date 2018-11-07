import * as React from 'react';
import '../../styling/RegistrationForm.css';

export default class RegistrationForm extends React.Component {
  state = {};

  handleSubmit = ( e ) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card card-signin flex-row my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Step 1: Log in info</h5>
                <form className="form-signin" onSubmit={this.handleSubmit}>
                  <div className="form-label-group">
                    <input
                      type="email"
                      id="inputEmail"
                      className="form-control"
                      name="email"
                      value={this.state.email || ''}
                      required
                      onChange={this.handleChange}
                    />
                    <label htmlFor="inputEmail">Email address</label>
                  </div>
                  <div className="form-label-group">
                    <input
                      type="password"
                      name="password"
                      id="inputPassword"
                      className="form-control"
                      required
                      value={this.state.password || ''}
                      onChange={this.handleChange}
                    />
                    <label htmlFor="inputPassword">Password</label>
                  </div>

                  <div className="form-label-group">
                    <input
                      type="password"
                      name="confirmPassword"
                      id="inputConfirmPassword"
                      className="form-control"
                      required
                      value={this.state.confirmPassword || ''}
                      onChange={this.handleChange}
                    />
                    <label htmlFor="inputConfirmPassword">Confirm password</label>
                  </div>
                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit">
                    Next Step    >>>
                  </button>
                 <p className="d-block text-center mt-2 small" >Already a user?
                 <a className="Links singUpLink" href="#/login"> Sign In</a>.</p>
                  <hr className="my-4" />
                  <button
                    className="btn btn-lg btn-google btn-block text-uppercase"
                    type="submit">
                    <i className="fab fa-google mr-2" /> Sign up with Google
                  </button>
                  <button
                    className="btn btn-lg btn-facebook btn-block text-uppercase"
                    type="submit">
                    <i className="fab fa-facebook-f mr-2" /> Sign up with Facebook
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
