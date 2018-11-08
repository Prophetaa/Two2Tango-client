import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/users';
import { Redirect } from 'react-router-dom';

import RegistrationForm1 from './RegistrationForm1';
import RegistrationForm2 from './RegistrationForm2';
import RegistrationForm3 from './RegistrationForm3';

import {
  resetRegPage,
  goToSecondPage,
  goToThirdPage
} from '../../actions/registration';
import currentRegPage from '../../reducers/index';
class SignupPage extends Component {
  state = {};

  // handleSubmit = (data:IUser) => {
  // 	this.props.postSignup(data.email, data.password)
  // }
  handlePageChange = stateUpdate => {
    if (this.props.currentRegPage === 1) {
      this.setState({
        email: stateUpdate.email,
        password: stateUpdate.password
      });
      this.props.goToSecondPage();
    }
    if (this.props.currentRegPage === 2) {
      this.setState({
        ...this.state,
        city: stateUpdate.city,
		photoURL: stateUpdate.photoURL,
		first_name:stateUpdate.first_name,
		last_name:stateUpdate.last_name,
		age:stateUpdate.age,
		height:stateUpdate.height,
		role:stateUpdate.role,
		level:stateUpdate.level
      });
      this.props.goToThirdPage();
    }
  };

  render() {
    if (this.props.signup.success) return <Redirect to="/login" />;

    return (
      <div>
        {this.props.currentRegPage === 1 && (
          <div>
            {' '}
            <RegistrationForm1 onSubmit={this.handlePageChange} />
            <p style={{ color: 'red' }}>{this.props.signup.error}</p>{' '}
          </div>
        )}
        {this.props.currentRegPage === 2 && (
          <div>
            {' '}
            <RegistrationForm2 onSubmit={this.handlePageChange} />
            <p style={{ color: 'red' }}>{this.props.signup.error}</p>{' '}
          </div>
        )}
        {this.props.currentRegPage === 3 && (
          <div>
            {' '}
            <RegistrationForm3 onSubmit={this.handlePageChange} />
            <p style={{ color: 'red' }}>{this.props.signup.error}</p>{' '}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    signup: state.signup,
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
    goToThirdPage
  }
)(SignupPage);
