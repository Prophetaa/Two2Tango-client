import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPreferences } from '../../actions/registration';
import '../../styling/NavBar.css';
import logoWhite from '../../styling/images/logo-grey.png';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-style">
        <nav className="navbar navbar-expand-sm navbar-light bg-light sticky-top">
          {this.props.currentUser && (
            <div className="container">
              <div className="nav-header">
                <Link to="/home">
                  <img className="tangoLogo img-responsive" src={logoWhite} alt="logo" />
                </Link>
              </div>
              <div className="col-xs-12" id="navbarResponsive">
                <ul className="navbar-nav ml-auto d-inline-md">
                  <li className="dropdown nav-item">
                    <div
                      className="btn-lg icons-navbar dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false">
                      <i className="fas fa-user-circle fa-md" />
                    </div>
                    <ul className="dropdown-menu">
                      <Link className="Links" to={'/profiles/my-profile'}>
                        <li className="dropDownLi">
                          <span className="dropDownLink">My Profile</span>
                        </li>
                      </Link>
                      <Link className="Links" to={'/logout'}>
                        <li className="dropDownLi">
                          <span className=" dropDownLink">Logout</span>
                        </li>
                      </Link>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-outline-light btn-lg icons-navbar">
                      <Link to="/messages" className="link-navbar">
                        <i className="far fa-envelope fa-md" />
                      </Link>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-outline-light btn-lg icons-navbar">
                      <Link to="/preferences" className="link-navbar">
                        <i className="fas fa-cog fa-md" />
                      </Link>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-outline-light btn-lg icons-navbar">
                      <Link to="/results" className="link-navbar">
                        <i className="fas fa-search fa-md" />
                      </Link>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {!this.props.currentUser && (
            <div className="container-fluid">
              <div className="nav-header">
                <Link to="/home">
                  <img className="" src={logoWhite} alt="logo" />
                </Link>
              </div>
              <div className="col-xs-12">
                <ul className="navbar-nav ml-auto d-inline-md right-align">
                  <li className="nav-item ">
                    <button className="btn btn-outline-secondary btn-lg icons-navbar">
                      <Link to="/signup" className="link-navbar">
                        <i className="fas fa-user-plus fa-md" />
                      </Link>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-outline-secondary btn-lg icons-navbar">
                      <Link to="/login" className="link-navbar">
                        <i className="fas fa-key fa-md" />
                      </Link>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </nav>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    currentUser: state.currentUser,
    usersPreferences: state.usersPreferences
  };
};

export default connect(
  mapStateToProps,
  { fetchPreferences }
)(Navbar);
