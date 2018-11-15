import '../../styling/preferencePage.css';
import React, { Component } from 'react';
import '../../styling/RegistrationForm.css';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';

import {
  updatePreferences,
  fetchPreferences
} from '../../actions/registration';

import LocationSearchInput from '../registrationPage/Geolocate';
import CheckBoxes from '../registrationPage/CheckBoxes';
import GenderMenu from './GenderMenu';
import RoleMenu from './RoleMenu';
import LoadingScreen from './LoadingScreen';

class PreferencesPage extends Component {
  async componentDidMount() {
    this.props.fetchPreferences();
  }
  state = { cities: [], level: [], error:null };

  updateState = () => {
    if (this.props.currentUser) {
      this.setState({
        role: this.props.usersPreferences.role,
        cities: this.props.usersPreferences.city,
        min_age: this.props.usersPreferences.age[0],
        max_age: this.props.usersPreferences.age[1],
        gender: this.props.usersPreferences.gender,
        min_height: this.props.usersPreferences.height[0],
        max_height: this.props.usersPreferences.height[1]
      });
      this.selectLevels();
    }
  };

  selectLevels = async () => {
    let arr = await this.props.usersPreferences.level;
    if (arr.includes('beginner')) {
      let level = document.getElementById('beginner');
      level.click();
    }
    if (arr.includes('intermediate')) {
      let level = document.getElementById('intermediate');
      level.click();
    }
    if (arr.includes('advanced')) {
      let level = document.getElementById('advanced');
      level.click();
    }
    if (arr.includes('professional')) {
      let level = document.getElementById('professional');
      level.click();
    }
  };

  handleHeightBar = render => {
    this.setState({
      min_height: render[0],
      max_height: render[1]
    });
  };

  handleAgeBar = render => {
    this.setState({ min_age: render[0], max_age: render[1] });
  };

  handleCheck = nLevel => {
    //Checks if this level is already on the react state, if it is it deletes it
    if (this.state.level.includes(nLevel)) {
      let i = this.state.level.findIndex(index => index === nLevel);
      this.state.level.splice(i, 1);
      this.setState({ level: [...this.state.level] });
    } else {
      this.setState({ level: [...this.state.level, nLevel] });
    }
  };

  handleButtonClick = input => {
    if (input === 'male') this.setState({ gender: 'male' });
    if (input === 'female') this.setState({ gender: 'female' });
    if (input === 'other') this.setState({ gender: 'other' });
    if (input === 'leader') this.setState({ role: 'leader' });
    if (input === 'follower') this.setState({ role: 'follower' });
  };

  // Cities form
  selectCities = e => {
    // adds typed city to the array
    e.preventDefault();
    if (this.state.cities.length < 4) {
      if (this.state.cities.includes(this.state.city)) return null;
      if (this.state.city)
        this.setState({ cities: [...this.state.cities, this.state.city] });
    }
  };

  removeCity = city => {
    //removes city from the list
    let i = this.state.cities.findIndex(index => index === city);
    this.state.cities.splice(i, 1);
    this.setState({ cities: [...this.state.cities] });
  };


  selectCities = e =>{
    e.preventDefault();
    if (this.state.cities.length === 4) return null
    if(this.state.cities.includes(e.target.innerHTML)) return null
     this.setState({ cities: [...this.state.cities, e.target.innerHTML],error:false });
    }
  

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  doNothing = () =>{
    return null
  }

  handleSubmit = async e => {
    e.preventDefault();
    if(this.state.cities.length === 0) this.setState({error:true})
    if(this.state.error === false){
    await this.props.updatePreferences(
      this.state.cities,
      this.state.gender,
      [
        parseInt(this.state.min_height, 10),
        parseInt(this.state.max_height, 10)
      ],
      this.state.role,
      this.state.level,
      [parseInt(this.state.min_age, 10), parseInt(this.state.max_age, 10)]
    );
    window.location = '/results';
  };
}

  render() {
    if (!this.props.currentUser) return <Redirect to="/home" />;
    return (
      <div className="container  signupContainer ">
        {Object.keys(this.props.usersPreferences).length > 1 &&
        Object.keys(this.state).length >3 ? (
          <div className="row signup-row">
            <div className="col-lg-10 col-xl-9 mx-auto col-padding">
              <div className="card card-signin flex-row my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">
                    Searching Preferences
                  </h5>
                  <form className="form-signin" onSubmit={this.handleSubmit}>
                    <div
                      className="form-group row cityInput "
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Don't forget to click add!">
                      <LocationSearchInput  onChange={this.doNothing}onClick={this.selectCities} />  
                    </div>               
                    {this.state.error && <span className="error">You have to click on the city name</span>}       
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
                    <div className="heightSelection ">
                      <CheckBoxes handleCheck={this.handleCheck} />
                    </div>
                    <span className="slideTitle">Age:</span>
                    <div className="heightSlider ageBar">
                      <span className="minValue">
                        {this.state.min_age && Math.round(this.state.min_age)}
                      </span>
                      <Nouislider
                        className="sliderBar boxShaddow"
                        range={{ min: 10, max: 99 }}
                        start={[
                          this.state.min_age && this.state.min_age,
                          this.state.max_age && this.state.max_age
                        ]}
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
                        className="sliderBar boxShaddow"
                        range={{ min: 130, max: 200 }}
                        start={[
                          this.state.min_height && this.state.min_height,
                          this.state.max_height && this.state.max_height
                        ]}
                        connect
                        step={5}
                        onSlide={this.handleHeightBar}
                      />
                      <span className="maxValue">
                        {this.state.max_height &&
                          Math.round(this.state.max_height)}
                      </span>
                    </div>
                    <div className="buttonsContainer">
                      <Link className="Links" to={'/results'}>
                        <button className="btn btn-lg btn-block text-uppercase prefBtn cancelChanges btnShaddow">
                          <span> Cancel </span>
                        </button>
                      </Link>
                      <button
                        className="btn btn-lg btn-block text-uppercase prefBtn acceptChanges btnShaddow"
                        type="submit">
                        <span> Save </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {Object.keys(this.props.usersPreferences).length > 1 ? (
              <LoadingScreen setReactState={this.updateState} />
            ) : null}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    usersPreferences: state.usersPreferences,
    currentUser: state.currentUser
  };
};
export default connect(
  mapStateToProps,
  {
    updatePreferences,
    fetchPreferences
  }
)(PreferencesPage);
