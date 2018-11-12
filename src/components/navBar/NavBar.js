import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPreferences } from '../../actions/registration';
import '../../styling/NavBar.css';
import logoWhite from '../../styling/images/logo.png';
import partners from '../../styling/images/PARTNERS.png';
import email from '../../styling/images/EMAIL.png';
import user from '../../styling/images/USER.png';
import logoXS from '../../styling/images/logoXS.png';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-style">
        <nav className="navbar navbar-expand navbar-light sticky-top navbar-right">
          {this.props.currentUser && (
            <div className="container">
              <div className="nav-header">
                <Link to="/home">
                  <img className="tangoLogo d-none d-sm-block" src={logoWhite} alt="logo" />
                  <img className="tangoLogoXs d-block d-sm-none " src={logoXS} alt="logo" />
                </Link>
              </div>
              <div className="col-xs-12" id="navbarResponsive">
                <ul className="navbar-nav ml-auto d-inline-md">
                  <li className="nav-item">
                    <button className="btn btn-outline-light btn-lg icons-navbar">
                      <Link to="/messages" className="link-navbar">
                        <img className="nav-btn" alt="icon" src={email} />
                      </Link>
                    </button>
                  </li>
                  {/* <li className="nav-item">
                    <button className="btn btn-outline-light btn-lg icons-navbar">
                      <Link to="/preferences" className="link-navbar">
                        <i className="fas fa-cog fa-md" />
                      </Link>
                    </button>
                  </li> */}
                  <li className="nav-item">
                    <button className="btn btn-outline-light btn-lg icons-navbar">
                      <Link to="/results" className="link-navbar">
                        <img className="nav-btn" alt="icon" src={partners} />
                      </Link>
                    </button>
                  </li>
                  <li className="dropdown nav-item">
                    <div
                      className="btn-lg icons-navbar dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false">
                      <img className="nav-btn" alt="icon" src={user} />
                    </div>
                    <ul className="dropdown-menu">
                      <Link className="Links" to={'/profiles/my-profile'}>
                        <li className="dropDownLi">
                          <span className="dropDownLink">My Profile</span>
                        </li>
                      </Link>
                      <Link className="Links" to={'/preferences'}>
                        <li className="dropDownLi">
                          <span className=" dropDownLink">Preferences</span>
                        </li>
                      </Link>
                      <Link className="Links" to={'/logout'}>
                        <li className="dropDownLi">
                          <span className=" dropDownLink">Logout</span>
                        </li>
                      </Link>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {!this.props.currentUser && (
            <div className="container">
              <div className="nav-header">
                <Link to="/home">
                  <img className="tangoLogo" src={logoWhite} alt="logo" />
                  {/* <img className="tangoLogoXs d-block d-sm-none " src={logoXS} alt="logo" /> */}
                </Link>
              </div>
              <div className="col-xs-12 d-none d-sm-block ">
                <ul className="navbar-nav ml-auto d-inline-md right-align">
                  <li className="nav-item ">
                    {/* <button className="btn btn-outline-secondary btn-lg icons-navbar"> */}
                      <Link to="/signup" className="link-navbar">
                        {/* <i className="fas fa-user-plus fa-md icon-navbar" /> */}
                         <h6>Sign Up</h6>
                      </Link>
                    {/* </button> */}
                  </li>
                  <li className="nav-item">
                    {/* <button className="btn btn-outline-secondary btn-lg icons-navbar"> */}
                      <Link to="/login" className="link-navbar">
                        {/* <i className="fas fa-key fa-md icon-navbar" /> */}
                         <h6>Log In</h6>
                      </Link>
                    {/* </button> */}
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
