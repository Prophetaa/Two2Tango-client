import React, { Component } from 'react';

export default class RoleMenu extends Component {
    state={role:null}



  render() {
    return (
      <div className="dropdown">
        <button
          className="form-control dropdown-toggle boxShaddow"
          type="button"
          required
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">
          {this.props.role === null ? 'Select a Role' : this.props.role}
        </button>
        <div
          className="dropdown-menu form-control"
          aria-labelledby="dropdownMenuButton">
          <span
            className="dropdown-item item1"
            onClick={() => this.props.handleButtonClick('leader')}>
            leader
          </span>
          <span
            className="dropdown-item item3"
            onClick={() => this.props.handleButtonClick('follower')}>
            follower
          </span>
        </div>
      </div>
    );
  }
}
