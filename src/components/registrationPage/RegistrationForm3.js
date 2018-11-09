import React, { Component } from 'react';
import '../../styling/RegistrationForm.css';
import '../../styling/RegistrationForm3.css';
import { connect } from 'react-redux'

import { postPreferences } from '../../actions/registration'
import LocationSearchInput from './Geolocate';
import CheckBoxes from './CheckBoxes';
class RegistrationForm3 extends Component {
  state = { role: null,gender:null,  tango_level: [] };

  handleCheck = level => {
    //Checks if this level is already on the react state, if it is it deletes it
    if (this.state.tango_level.includes(level)) {
      let i = this.state.tango_level.findIndex(index => index === level);
      this.state.tango_level.splice(i, 1);
      this.setState({ tango_level: [...this.state.tango_level] });
    } else {
      this.setState({ tango_level: [...this.state.tango_level, level] });
    }
  };
  
  
  handleSelectCity = event => {
    let formatedCity =  event.split(',', 1);
    this.setState({ city: formatedCity[0] });
  };

  
  handleButtonClick = input => {
    if(input === "Leader") this.setState({role: "Leader"})
    if(input === "Follower") this.setState({role: "Follower"})
    if(input === "male") this.setState({gender:"male"})
    if(input === "female") this.setState({gender:"female"})
    if(input === "other") this.setState({gender:"other"})
    }

  handleSubmit = async(e) => {
    e.preventDefault();
    await this.props.postPreferences(this.state.city,this.state.gender, [parseInt(this.state.max_height,10), parseInt(this.state.min_height,10)], this.state.role, this.state.tango_level)
    this.props.onSubmit();
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card card-signin flex-row my-5">
              <div className="card-body">
                <h5 className="card-title text-center">
                  Step 3: Matching Preferences
                </h5>
                <form className="form-signin" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <LocationSearchInput onChange={this.handleSelectCity} />
                  </div>
                  <div class="dropdown genderMenu">
                    <button
                      class="form-control dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false">
					{this.state.gender === null ? "Gender": this.state.gender}
                    </button>
                    <div
                      className="dropdown-menu form-control"
                      aria-labelledby="dropdownMenuButton">
                      <span class="dropdown-item " onClick={()=> this.handleButtonClick("male")}>
                        male
                      </span>
                      <span class="dropdown-item" onClick={()=> this.handleButtonClick("female")}>
                        female
                      </span>
                      <span class="dropdown-item" onClick={()=> this.handleButtonClick("other")}>
                        other
                      </span>
                    </div>
                    </div>
                  <div class="dropdown">
                    <button
                      class="form-control dropdown-toggle"
                      type="button"
                      required
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false">
                      {this.state.role === null
                        ? 'Select a Role'
                        : this.state.role}
                    </button>
                    <div
                      className="dropdown-menu form-control"
                      aria-labelledby="dropdownMenuButton">
                      <span
                        class="dropdown-item "
                        onClick={() => this.handleButtonClick('Leader')}>
                        Leader
                      </span>
                      <span
                        class="dropdown-item"
                        onClick={() => this.handleButtonClick('Follower')}>
                        Follower
                      </span>
                    </div>
                    <div className="heightSelection">
                      <CheckBoxes handleCheck={this.handleCheck} />
                    </div>
                    <div className="form-group" id="firstName">
                      <input
                        type="number"
                        placeholder="Min Height *"
                        id="inputMinHeight"
                        className="form-control menu2inputs"
                        name="min_height"
                        value={this.state.min_height || ''}
                        required
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group" id="lastName">
                      <input
                        placeholder="Max Height *"
                        type="number"
                        name="max_height"
                        id="inputMaxHeight"
                        className="form-control menu2inputs"
                        required
                        value={this.state.max_height || ''}
                        onChange={this.handleChange}
                      />
                    </div>
                    <button
                    className="btn btn-lg btn-block text-uppercase finalStepBtn"
                    type="submit">
                    <span>Let's find a Partner!</span>
                  </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  {
    postPreferences
  }
)(RegistrationForm3);
