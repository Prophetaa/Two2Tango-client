import React, { Component } from 'react';
import '../../styling/RegistrationForm.css';

import { connect } from 'react-redux';

import { postPreferences } from '../../actions/registration';
import LocationSearchInput from './Geolocate';
import CheckBoxes from './CheckBoxes';
class RegistrationForm3 extends Component {
  state = { cities:[], role: null, gender: null, tango_level: [], age: [] };

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
    if (event === 'remove') this.setState({ city: '' });
    let formatedCity = event.split(',', 1);
    this.setState({ city: formatedCity[0] });
  };

  removeCity = city => {
    let i = this.state.cities.findIndex(index => index === city);
    this.state.cities.splice(i, 1);
    this.setState({ cities: [...this.state.cities] });
  };

  handleButtonClick = input => {
    if (input === 'leader') this.setState({ role: 'leader' });
    if (input === 'follower') this.setState({ role: 'follower' });
    if (input === 'male') this.setState({ gender: 'male' });
    if (input === 'female') this.setState({ gender: 'female' });
    if (input === 'other') this.setState({ gender: 'other' });
  };

  selectCities = e => {
    e.preventDefault();
    if (this.state.cities.length < 4) {
      if (this.state.cities.includes(this.state.city)) return null;
      if (this.state.city)
        this.setState({ cities: [...this.state.cities, this.state.city] });
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    let error = document.getElementById('inputError');
    if (!error) {
      await this.props.postPreferences(
        this.state.cities,
        this.state.gender,
        [
          parseInt(this.state.max_height, 10),
          parseInt(this.state.min_height, 10)
        ],
        this.state.role,
        this.state.tango_level,
        [parseInt(this.state.min_age, 10), parseInt(this.state.max_age, 10)]
      );
      this.props.onSubmit();
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="container signupContainer">
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
                    <button className="citiesBtn" onClick={this.selectCities}>
                      add city
                    </button>
                  </div>
                  <div className="selectedCities">
                    {this.state.cities.map(city => (
                      <li className="citiesLi">
                        {city}{' '}
                        <div
                          className="removecitiesBtn"
                          onClick={() => this.removeCity(city)}>
                          x
                        </div>
                      </li>
                    ))}
                  </div>
                  <div className="dropdown genderMenu">
                    <button
                      className="form-control dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false">
                      {this.state.gender === null
                        ? 'Select a Gender'
                        : this.state.gender}
                    </button>
                    <div
                      className="dropdown-menu form-control"
                      aria-labelledby="dropdownMenuButton">
                      <span
                        className="dropdown-item "
                        onClick={() => this.handleButtonClick('male')}>
                        male
                      </span>
                      <span
                        className="dropdown-item"
                        onClick={() => this.handleButtonClick('female')}>
                        female
                      </span>
                      <span
                        className="dropdown-item"
                        onClick={() => this.handleButtonClick('other')}>
                        other
                      </span>
                    </div>
                  </div>
                  <div className="dropdown">
                    <button
                      className="form-control dropdown-toggle"
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
                        className="dropdown-item "
                        onClick={() => this.handleButtonClick('leader')}>
                        leader
                      </span>
                      <span
                        className="dropdown-item"
                        onClick={() => this.handleButtonClick('follower')}>
                        follower
                      </span>
                    </div>
                    <div className="heightSelection">
                      <CheckBoxes handleCheck={this.handleCheck} />
                    </div>
                    <div className="groupInputs">
                      <div className="form-group smallInput" id="minAge">
                        <input
                          placeholder="Min Age *"
                          type="number"
                          name="min_age"
                          id="inputMaxHeight"
                          className="form-control menu2inputs"
                          required
                          value={this.state.min_age || ''}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="form-group smallInput" id="maxAge">
                        <input
                          type="number"
                          placeholder="Max Age *"
                          id="inputMinHeight"
                          className="form-control menu2inputs"
                          name="max_age"
                          value={this.state.max_age || ''}
                          required
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="groupInputs bottomPadding">
                      <div className="form-group smallInput" id="minHeight">
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
                      <div className="form-group smallInput " id="maxHeight">
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
                    </div>
                    {this.state.max_age > 99 || this.state.min_age < 10 ? (
                      <span
                        id="inputError"
                        className="warningAge"
                        style={{ color: 'red' }}>
                        Please , people that age probably don't tango...
                      </span>
                    ) : null}
                    {this.state.min_height < 130 && (
                      <span
                        id="inputError"
                        className="warningAge"
                        style={{ color: 'red' }}>
                        that's too low, come on...
                      </span>
                    )}
                    {this.state.max_height > 210 && (
                      <span
                        id="inputError"
                        className="warningAge"
                        style={{ color: 'red' }}>
                        that's too high, come on...
                      </span>
                    )}
                    {this.state.min_height > this.state.max_height && (
                      <span
                        id="inputError"
                        className="warningAge"
                        style={{ color: 'red' }}>
                        minimum height can't be higher than the maximum height!
                      </span>
                    )}
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
