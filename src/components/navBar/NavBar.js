import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../styling/NavBar.css';
import logoWhite from '../../styling/images/logo-grey.png';

class Navbar extends Component {
	render() {
		return (
			<div>
				<nav class="navbar navbar-expand-sm navbar-light bg-light sticky-top">
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
											<Link to="/my-profile">
												<i className="fas fa-user-circle" />
											</Link>
										</button>
									</li>
									<li className="nav-item">
										<button className="btn btn-outline-secondary btn-lg icons-navbar">
											<Link to="/messages">
												<i className="far fa-envelope" />
											</Link>
										</button>
									</li>
									<li className="nav-item">
										<button className="btn btn-outline-secondary btn-lg icons-navbar">
											<Link to="/setting">
												<i class="fas fa-cog" />
											</Link>
										</button>
									</li>
									<li className="nav-item">
										<button className="btn btn-outline-secondary btn-lg icons-navbar">
											<Link to="/preference">
												<i className="fas fa-sliders-h" />
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
											<Link to="/signup">
												<i className="fas fa-user-circle" />
											</Link>
										</button>
									</li>
									<li className="nav-item">
										<button className="btn btn-outline-secondary btn-lg icons-navbar">
											<Link to="/login">
												<i className="far fa-envelope" />
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

{
	/* <Nav id="main-nav">
				{!this.props.currentUser && (
						<Fragment>
							<NavItem className="navitem" eventKey={2} href="/login">
								<i className="fas fa-user-circle" />
							</NavItem>
							<NavItem className="navitem" eventKey={2} href="/messages">
								<i className="far fa-envelope" />
							</NavItem>
						</Fragment>
					)}

					{this.props.currentUser && (
						<Fragment>
							<NavItem className="navitem" eventKey={2} href="/profile">
								<i className="fas fa-user-circle" />
							</NavItem>
							<NavItem className="navitem" eventKey={2} href="/messages">
								<i className="far fa-envelope" />
							</NavItem>
							<NavItem className="navitem" eventKey={2} href="/partners">
								<i class="fas fa-cog"></i>
							</NavItem>
							<NavItem className="navitem" eventKey={2} href="/preferences">
								<i className="fas fa-sliders-h" />
							</NavItem>
						</Fragment>
					)}
				</Nav> */
}
