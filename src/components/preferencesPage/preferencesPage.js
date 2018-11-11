import '../../styling/preferencePage.css';
import React, { Component } from 'react';
import '../../styling/RegistrationForm.css';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  updatePreferences,
  fetchPreferences
} from '../../actions/registration';

import LocationSearchInput from '../registrationPage/Geolocate';
import CheckBoxes from '../registrationPage/CheckBoxes';
import GenderMenu from './GenderMenu';
import RoleMenu from './RoleMenu';

class PreferencesPage extends Component {
  async componentDidMount() {
    this.props.fetchPreferences();
  }
  state ={ cities:[], level: [] };

  updateState =  () => {
    if (this.props.currentUser) {
       this.setState({
        role: this.props.usersPreferences.role,
        cities: this.props.usersPreferences.city,
        min_age: this.props.usersPreferences.age[0],
        max_age: this.props.usersPreferences.age[1],
        gender: this.props.usersPreferences.gender,
        min_height: this.props.usersPreferences.height[1],
        max_height: this.props.usersPreferences.height[0]
      })
       this.selectLevels();
    }
  };

  selectLevels = async () => {
    let arr = await this.props.usersPreferences.level;
    if (arr.includes('beginner')) {
      let level = document.getElementById('beginner');
      level.click();
    } else if (arr.includes('intermediate')) {
      let level = document.getElementById('intermediate');
      level.click();
    } else if (arr.includes('advanced')) {
      let level = document.getElementById('advanced');
      level.click();
    } else if (arr.includes('professional')) {
      let level = document.getElementById('professional');
      level.click();
    }
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
  selectCities = e => { // adds typed city to the array
    e.preventDefault();
    if (this.state.cities.length < 4) {
      if (this.state.cities.includes(this.state.city)) return null;
      if (this.state.city) this.setState({ cities: [...this.state.cities, this.state.city] });
    }
  };

  removeCity = city => { //removes city from the list
    let i = this.state.cities.findIndex(index => index === city);
    this.state.cities.splice(i, 1);
    this.setState({ cities: [...this.state.cities] });
  };
  
  handleSelectCity = event => { // handles selection of city from the suggestted list
    let formatedCity = event.split(',', 1);
    this.setState({ city: formatedCity[0] });
  };



  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    let error = document.getElementById('inputError');
    if (!error) {
      await this.props.updatePreferences(
        this.state.cities,
        this.state.gender,
        [
          parseInt(this.state.max_height, 10),
          parseInt(this.state.min_height, 10)
        ],
        this.state.role,
        this.state.level,
        [parseInt(this.state.min_age, 10), parseInt(this.state.max_age, 10)]
      )
      window.location="/results"
    }

  };


  render() {
    if (!this.props.currentUser) return <Redirect to="/home" />;
    return (
      <div className="container signupContainer">
      {Object.keys(this.props.usersPreferences).length > 0 && Object.keys(this.state).length > 2 ?
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card card-signin flex-row my-5">
              <div className="card-body">
                <h5 className="card-title text-center">
                  Searching Preferences
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
                  <GenderMenu gender={this.state.gender} handleButtonClick={this.handleButtonClick}/>
                  <RoleMenu role={this.state.role} handleButtonClick={this.handleButtonClick}/>
                    <div className="heightSelection">
                      <CheckBoxes handleCheck={this.handleCheck} />
                    </div>
                    <div className="groupInputs">
                      <div className="form-group smallInput" id="minAge">
                        <input
                          placeholder="Min Age "
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
                          placeholder="Max Age "
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
                    <div className="buttonsContainer">
                      <Link className="Links" to={'/results'}>
                        <button className="btn btn-lg btn-block text-uppercase prefBtn cancelChanges">
                          <span>Cancel Changes</span>
                        </button>
                      </Link>
                      <button
                        className="btn btn-lg btn-block text-uppercase prefBtn acceptChanges"
                        type="submit">
                        <span>Save Changes</span>
                      </button>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div> :
      <div> 
       <h1>Loading...</h1>
       {Object.keys(this.props.usersPreferences).length > 1 ? this.updateState(): null}
    </div>}
   </div>)
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
