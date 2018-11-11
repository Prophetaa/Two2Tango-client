import '../../styling/preferencePage.css'
import React, { Component } from 'react';
import '../../styling/RegistrationForm.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  updatePreferences,
  fetchPreferences
} from '../../actions/registration';

import LocationSearchInput from '../registrationPage/Geolocate';
import CheckBoxes from '../registrationPage/CheckBoxes';

class PreferencesPage extends Component {
  async componentDidMount() {
    await this.props.fetchPreferences()
    }
  state = { level:[]
  };

  updateState = async() =>{
    console.log("fetching", this.props.usersPreferences)
      await this.setState({
        role: this.props.usersPreferences.role,
        city: this.props.usersPreferences.city,
        min_age: this.props.usersPreferences.age[0],
        max_age: this.props.usersPreferences.age[1],
        gender: this.props.usersPreferences.gender,
        min_height:this.props.usersPreferences.height[1],
        max_height: this.props.usersPreferences.height[0]
      });
      await this.selectLevels()
  }

  selectLevels = async() =>{
      let arr = await this.props.usersPreferences.level
      if(arr.includes("beginner")){
          let level = document.getElementById("beginner")
          level.click()
      } else if (arr.includes("intermediate")){
        let level = document.getElementById("intermediate")
        level.click()
      }else if (arr.includes("advanced")){
        let level = document.getElementById("advanced")
        level.click()
      }else if (arr.includes("professional")){
        let level = document.getElementById("professional")
        level.click()
      }
  }
  
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

  handleSelectCity = event => {
    let formatedCity = event.split(',', 1);
    this.setState({ city: formatedCity[0] });
  };

  handleButtonClick = input => {
    if (input === 'leader') this.setState({ role: 'leader' });
    if (input === 'follower') this.setState({ role: 'follower' });
    if (input === 'male') this.setState({ gender: 'male' });
    if (input === 'female') this.setState({ gender: 'female' });
    if (input === 'other') this.setState({ gender: 'other' });
  };

  handleSubmit = async e => {
    e.preventDefault();
    let error = document.getElementById('inputError');
    if (!error) {
      await this.props.updatePreferences(
        this.state.city,
        this.state.gender,
        [
          parseInt(this.state.max_height, 10),
          parseInt(this.state.min_height, 10)
        ],
        this.state.role,
        this.state.level,
        [parseInt(this.state.min_age, 10), parseInt(this.state.max_age, 10)]
      );
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    if(this.state.boolean !== false)this.updateState()
    return (
      <div className="container signupContainer">
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

const mapStateToProps = function(state) {
  return {
    usersPreferences: state.usersPreferences
  };
};
export default connect(
  mapStateToProps,
  {
    updatePreferences,
    fetchPreferences
  }
)(PreferencesPage);
