import React, { Component } from 'react';
import '../../styling/RegistrationForm.css';
import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';

import { connect } from 'react-redux';

import { postPreferences } from '../../actions/registration';
import LocationSearchInput from './Geolocate';
import CheckBoxes from './CheckBoxes';
import GenderMenu from '../preferencesPage/GenderMenu';
import RoleMenu from '../preferencesPage/RoleMenu';
class RegistrationForm3 extends Component {
  state = { cities: [], role: null, gender: null, tango_level: [], age: [] , min_age:10, max_age:99, min_height:130, max_height:200};

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

  handleHeightBar = async render => {
    await this.setState({
      min_height: render[0],
      max_height: render[1]
    });
  };

  handleAgeBar = async render => {
    await this.setState({ min_age: render[0], max_age: render[1] });
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

    await this.props
      .postPreferences(
        this.state.cities,
        this.state.gender,
        [
          parseInt(this.state.min_height, 10),
          parseInt(this.state.max_height, 10)
        ],
        this.state.role,
        this.state.tango_level,
        [parseInt(this.state.min_age, 10), parseInt(this.state.max_age, 10)]
      )
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
        <div className="row signup-row">
          <div className="col-lg-10 col-xl-9 mx-auto padd">
            <div className="card card-signin flex-row my-5">
              <div className="card-body">
                <h5 className="card-title text-center">
                  Step 3: Matching Preferences
                </h5>
                <form className="form-signin" onSubmit={this.handleSubmit}>
                  <span className="centerText">Type a city name and click add.</span>
                    <div
                      className="form-group row cityInput "
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Don't forget to click add!">
                      <LocationSearchInput onChange={this.handleSelectCity} />
                      <div className="input-group-btn">
                        <button
                          className="citiesBtn text-uppercase btnShaddow align-center btn-lg"
                          onClick={this.selectCities}>
                          add city
                        </button>
                      </div>            
                    </div>                  
                    <div className="citiesContainer container row">
                      {this.state.cities.map(city => (
                        <span key={city} className="citiesLi">
                          <span
                            className="far fa-times-circle deleteIcon"
                            onClick={() => this.removeCity(city)}
                          />
                          {city}
                        </span>
                      ))}
                    </div>
                  <GenderMenu
                    gender={this.state.gender}
                    handleButtonClick={this.handleButtonClick}
                  />
                  <RoleMenu
                    role={this.state.role}
                    handleButtonClick={this.handleButtonClick}
                  />
                  <CheckBoxes handleCheck={this.handleCheck} />
                  <span className="slideTitle">Age:</span>
                  <div className="heightSlider ageBar">
                    <span className="minValue">
                      {this.state.min_age && Math.round(this.state.min_age)}
                    </span>
                    <Nouislider
                      className="sliderBar"
                      range={{ min: 10, max: 99 }}
                      start={[10, 99]}
                      connect
                      step={5}
                      onSlide={this.handleAgeBar}
                    />
                    <span className="maxValue">
                      {this.state.max_age && Math.round(this.state.max_age)}
                    </span>
                  </div>
                  <span className="slideTitle">Height:</span>
                  <div className="heightSlider heightBar">
                    <span className="minValue">
                      {this.state.min_height &&
                        Math.round(this.state.min_height)}
                    </span>
                    <Nouislider
                      className="sliderBar"
                      range={{ min: 130, max: 200 }}
                      start={[130, 200]}
                      connect
                      step={5}
                      onSlide={this.handleHeightBar}
                    />
                    <span className="maxValue">
                      {this.state.max_height &&
                        Math.round(this.state.max_height)}
                    </span>
                  </div>
                  <button
                    className="btn btn-lg btn-block text-uppercase finalStepBtn"
                    type="submit">
                    <span>Let's find a Partner!</span>
                  </button>
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
