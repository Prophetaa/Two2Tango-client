import * as React from "react";
import { Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap'
import "../../styling/NavBar.css";


 export default class Navbar extends React.Component{
   render(){ 
    return(
       <div>
       <Nav id='main-nav'>
        <a href="/login"><NavItem className="navitem logo" eventKey={1} href="/home"></NavItem></a>
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
          <i class="fas fa-user-circle"></i>
        </NavItem>
        <NavItem className="navitem" eventKey={2} href="/messages">
        <i class="far fa-envelope"></i>
        </NavItem>
        <NavItem className="navitem" eventKey={2} href="/partners">
        <i class="fas fa-user-friends"></i>
        </NavItem>
        <NavItem className="navitem" eventKey={2} href="/preferences">
        <i class="fas fa-sliders-h"></i>
        </NavItem>
       </Nav>
       </div>
    )
  }
}