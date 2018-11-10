import React, { Component, Fragment } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';
//import '../../styling/NavBar.css';
import logoWhite from '../../styling/images/logo-grey.png';

class Navbar extends Component {
	render() {
		return (
			<div>
				<nav class="navbar navbar-expand-sm navbar-light bg-light sticky-top">
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
							{/* <ul className="navbar-nav ml-auto d-inline-md">
							<li className="nav-item ">
								<button className="btn btn-outline-secondary btn-lg icon">
									<i className="fas fa-user-circle" />
								</button>
							</li>
							<li className="nav-item">
								<i className="far fa-envelope" />
							</li>
							<li className="nav-item">
								<i class="fas fa-cog"></i>
							</li>
							<li className="nav-item">
								<i className="fas fa-sliders-h" />
							</li>
						</ul> */}
							<div
								className="btn-group btn-group-toggle nav-item navbar-nav ml-auto d-inline-md"
								data-toggle="buttons">
								<label className="btn btn-secondary active">
									<input
										type="radio"
										name="options"
										id="option1"
										autocomplete="off"
										checked
									/>
									<i className="fas fa-user-circle" />
								</label>
								<label className="btn btn-secondary">
									<input
										type="radio"
										name="options"
										id="option2"
										autocomplete="off"
									/>
									<i className="far fa-envelope" />
								</label>
								<label className="btn btn-secondary">
									<input
										type="radio"
										name="options"
										id="option3"
										autocomplete="off"
									/>
									<i class="fas fa-cog" />
								</label>
								<label className="btn btn-secondary">
									<input
										type="radio"
										name="options"
										id="option3"
										autocomplete="off"
									/>
									<i className="fas fa-sliders-h" />
								</label>
							</div>
						</div>
					</div>
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
								<i className="fas fa-cog" />
							</NavItem>
							<NavItem className="navitem" eventKey={2} href="/preferences">
								<i className="fas fa-sliders-h" />
							</NavItem>
						</Fragment>
					)}
				</Nav> */
}
