
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {Redirect} from 'react-router-dom'
import { login } from '../../actions/users';
import LoginForm from './LoginForm';


class LoginPage extends Component {
    handleSubmit = (data) => {
      this.props.login(data.email, data.password);
    };
  
    render() {
      // if (this.props.currentUser) return <Redirect to="" />;
  
      return (
        <div>
          <LoginForm onSubmit={this.handleSubmit} />
            <span style={{ color: "red" }}>{this.props.login.error}</span>
        </div>
      );
    }
  }
  const mapStateToProps = function(state) {
    return {
      login : state.login,
      currentUser: state.currentUser
    };
  };
  
  export default connect(
    mapStateToProps,
    { login }
  )(LoginPage);
  

