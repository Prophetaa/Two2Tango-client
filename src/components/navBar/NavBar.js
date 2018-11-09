import React, { Component, Fragment } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../../styling/NavBar.css';

class Navbar extends Component {
	render() {
		return (
			<div>
				<Nav id="main-nav">
				{!this.props.currentUser && (
						<Fragment>
							<NavItem className="navitem" eventKey={2} href="/sign">
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
								<i className="fas fa-user-friends" />
							</NavItem>
							<NavItem className="navitem" eventKey={2} href="/preferences">
								<i className="fas fa-sliders-h" />
							</NavItem>
						</Fragment>
					)}
				</Nav>
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

