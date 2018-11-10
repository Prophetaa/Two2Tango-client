import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../styling/NavBar.css';
import logoWhite from '../../styling/images/logo-grey.png';

class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-sm navbar-light bg-light sticky-top">
					{this.props.currentUser && (
						<div className="container">
							<img className="" src={logoWhite} alt="logo" />
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
											<Link to={`/profiles/my-profile`} className="link-navbar">
												<i className="fas fa-user-circle" />
											</Link>
										</button>
									</li>
									<li className="nav-item">
										<button className="btn btn-outline-secondary btn-lg icons-navbar">
											<Link to="/messages" className="link-navbar">
												<i className="far fa-envelope" />
											</Link>
										</button>
									</li>
									<li className="nav-item">
										<button className="btn btn-outline-secondary btn-lg icons-navbar">
											<Link to="/setting" className="link-navbar">
												<i className="fas fa-cog" />
											</Link>
										</button>
									</li>
									<li className="nav-item">
										<button className="btn btn-outline-secondary btn-lg icons-navbar">
											<Link to="/results" className="link-navbar">
												<i className="fas fa-search" />
											</Link>
										</button>
									</li>
								</ul>
							</div>
						</div>
					)}
					{!this.props.currentUser && (
						<div className="container">
							<img className="" src={logoWhite} alt="logo" />
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
												<i className="fas fa-user-plus" />
											</Link>
										</button>
									</li>
									<li className="nav-item">
										<button className="btn btn-outline-secondary btn-lg icons-navbar">
											<Link to="/login" className="link-navbar">
												<i className="fas fa-key" />
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
		currentUser: state.currentUser
	};
};

export default connect(mapStateToProps)(Navbar);
