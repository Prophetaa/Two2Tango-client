import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPreferences } from '../../actions/registration'
import '../../styling/NavBar.css';
import logoWhite from '../../styling/images/logo-grey.png';

class Navbar extends Component {
	render() {
		return (
			<div className="navbar-style">
				<nav className="navbar navbar-expand-sm navbar-light bg-light sticky-top">
					{this.props.currentUser && (
						<div className="container">
							<Link to="/home">
								<img className="tangoLogo" src={logoWhite} alt="logo" />
							</Link>
							<button
								className="navbar-toggler"
								type="button"
								data-toggle="collapse"
								data-target="#navbarResponsive">
								<span className="navbar-toggler-icon" />
							</button>
							<div className="collapse navbar-collapse" id="navbarResponsive">
								<ul className="navbar-nav ml-auto d-inline-md">
									<li className="nav-item ">
										<button className="btn btn-outline-light btn-lg icons-navbar">
											<Link to={`/profiles/my-profile`} className="link-navbar">
												<i className="fas fa-user-circle fa-lg" />
											</Link>
										</button>
									</li>
									<li className="nav-item">
										<button className="btn btn-outline-light btn-lg icons-navbar">
											<Link to="/messages" className="link-navbar">
												<i className="far fa-envelope fa-lg" />
											</Link>
										</button>
									</li>
									<li className="nav-item">
										<button className="btn btn-outline-light btn-lg icons-navbar">
											<Link to="/preferences" className="link-navbar">
												<i className="fas fa-cog fa-lg" />
											</Link>
										</button>
									</li>
									<li className="nav-item">

										<button className="btn btn-outline-light btn-lg icons-navbar">
											<Link to="/results" className="link-navbar">
												<i className="fas fa-search fa-lg" />

											</Link>
										</button>
									</li>
								</ul>
							</div>
						</div>
					)}
					{!this.props.currentUser && (
						<div className="container">
							<Link to="/home">
								<img className="" src={logoWhite} alt="logo" />
							</Link>
							<button
								className="navbar-toggler"
								type="button"
								data-toggle="collapse"
								data-target="#navbarResponsive">
								<span className="navbar-toggler-icon" />
							</button>
							<div className="collapse navbar-collapse" id="navbarResponsive">
								<ul className="navbar-nav ml-auto d-inline-md">
									<li className="nav-item ">
										<button className="btn btn-outline-secondary btn-lg icons-navbar">
											<Link to="/signup" className="link-navbar">
												<i className="fas fa-user-plus fa-lg" />
											</Link>
										</button>
									</li>
									<li className="nav-item">
										<button className="btn btn-outline-secondary btn-lg icons-navbar">
											<Link to="/login" className="link-navbar">
												<i className="fas fa-key fa-lg" />
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

export default connect(mapStateToProps, {fetchPreferences})(Navbar);
