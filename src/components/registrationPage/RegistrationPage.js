import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup, login } from '../../actions/users';
import { postProfile } from '../../actions/registration';
// import { submitRegistration } from '../../actions/registration'
import { Redirect } from 'react-router-dom';

import RegistrationForm1 from './RegistrationForm1';
import RegistrationForm2 from './RegistrationForm2';
import RegistrationForm3 from './RegistrationForm3';

import {
  resetRegPage,
  goToSecondPage,
  goToThirdPage,
  goToResults
} from '../../actions/registration';
import currentRegPage from '../../reducers/index';
class SignupPage extends Component {
  state = { logged: false };

  componentDidMount() {
    if (this.props.currentUser) this.isLogged();
    this.props.resetRegPage();
  }

  handlePageChange = async stateUpdate => {
    if (this.props.currentRegPage === 1) {
      this.setState({
        email: stateUpdate.email,
        password: stateUpdate.password
      });
      await this.props.postSignup(stateUpdate.email, stateUpdate.password);
      await this.props.login(stateUpdate.email, stateUpdate.password);
      this.props.goToSecondPage();
    }
  };
  handlePageChange2 = async () => {
    await this.props.goToThirdPage();
  };
  handlePageChange3 = async () => {
    await this.props.goToResults();
  };

  isLogged = async () => {
    await this.setState({ logged: true });
  };

  facebookSubmit = async(fbState) => {
    this.setState({fbState})
  }

  componentWillUnmount() {
    this.props.resetRegPage();
  }


  render() {
    if (this.props.currentUser && this.state.logged === true)
      return <Redirect to="/results" />;
    return (
      <div>
        {this.props.currentRegPage === 1 && (
          <div>
            <RegistrationForm1 onSubmit={this.handlePageChange} facebookSubmit={this.facebookSubmit}/>
            <p style={{ color: 'red' }}>{this.props.signup.error}</p>{' '}
          </div>
        )}
        {this.props.currentRegPage === 2 && (
          <div>
            <RegistrationForm2 fbState={this.state.fbState} onSubmit={this.handlePageChange2} />
            <p style={{ color: 'red' }}>{this.props.signup.error}</p>{' '}
          </div>
        )}
        {this.props.currentRegPage === 3 && (
          <div>
            <RegistrationForm3 onSubmit={this.handlePageChange3} />
            <p style={{ color: 'red' }}>{this.props.signup.error}</p>{' '}
          </div>
        )}
        {this.props.currentRegPage === 4 && <Redirect to={'/results'} />}
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    signup: state.signup,
    currentUser: state.currentUser,
    currentRegPage: state.currentRegPage
  };
};

export default connect(
  mapStateToProps,
  {
    postSignup: signup,
    currentRegPage,
    resetRegPage,
    goToSecondPage,
    goToThirdPage,
    postProfile,
    login,
    goToResults
  }
)(SignupPage);
