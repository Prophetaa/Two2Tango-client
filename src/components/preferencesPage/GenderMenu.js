import React, { Component } from 'react'

export default class GenderMenu extends Component {
    
  render() {
    return (
        <div className="dropdown genderMenu">
        <button
          className="form-control dropdown-toggle genderBtn"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">
          {this.props.gender === null
            ? 'Select a Gender'
            : this.props.gender}
        </button>
        <div
          className="dropdown-menu form-control gitems"
          aria-labelledby="dropdownMenuButton">
          <span
            className="dropdown-item item1 "
            onClick={() => this.props.handleButtonClick('male')}>
            male
          </span>
          <span
            className="dropdown-item item2"
            onClick={() => this.props.handleButtonClick('female')}>
            female
          </span>
          <span
            className="dropdown-item item3"
            onClick={() => this.props.handleButtonClick('other')}>
            other
          </span>
        </div>
      </div>
    )
  }
}
