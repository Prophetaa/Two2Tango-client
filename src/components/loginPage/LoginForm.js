import * as React from "react";
import "../../styling/LoginForm.css";


export default class LoginForm extends React.Component{
    state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card card-signin flex-row my-5">
           
              <div className="card-body">
                <form className="form-signin" onSubmit={this.handleSubmit}>
                  <h5 className="card-title text-center">Login</h5>
                  <div className="form-label-group">
                    <input
                      type="email"
                      id="inputEmail"
                      className="form-control"
                      placeholder="Email address"
                      name="email"
                      required
                      value={this.state.email || ''}
                      onChange={this.handleChange}
                    />
                    <label htmlFor="inputEmail">Email address</label>
                  </div>
                  <hr />
                  <div className="form-label-group">
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
                    <label htmlFor="inputPassword">Password</label>
                  </div>
                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                  >
                    Login
                  </button><span className="d-block text-center mt-2 small">Don't have an account yet? 
                  <a className="d-block text-center mt-2 small" href="#">Sign up here </a>
                  </span>
                 
                  <hr className="my-4" />
                  <button
                    className="btn btn-lg btn-google btn-block text-uppercase"
                    type="submit"
                  >
                    <i className="fab fa-google mr-2" /> Log in with Google
                  </button>
                  <button
                    className="btn btn-lg btn-facebook btn-block text-uppercase"
                    type="submit"
                  >
                    <i className="fab fa-facebook-f mr-2" /> Log in with
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
