import * as React from 'react';
// import { Link } from 'react-router-dom';
import { Nav, NavItem } from 'react-bootstrap';
import '../../styling/NavBar.css';

export default class Navbar extends React.Component {
	render() {
		return (
			<div>
				<Nav id="main-nav">
					<NavItem className="navitem logo" eventKey={1} href="/home" />

					<NavItem className="navitem" eventKey={2} href="/search">
						Find a partner
					</NavItem>
					<NavItem className="navitem" eventKey={2} href="/events">
						Promote your event
					</NavItem>
					<NavItem className="navitem" eventKey={2} href="/contact">
						Contact
					</NavItem>

					{/* Below to show only when user is true, 
        still to be done once the login is totally functionint  */}

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
					{/* {user && (<NavItem className="navitem" eventKey={2} href="/signup">
          Contact
        </NavItem>)} */}
				</Nav>
			</div>
		);
	}
}
