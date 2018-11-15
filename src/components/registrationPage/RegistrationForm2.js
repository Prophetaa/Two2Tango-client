import '../../styling/RegistrationForm.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postProfile } from '../../actions/registration';
import GenderMenu from '../preferencesPage/GenderMenu'
import RoleMenu from '../preferencesPage/RoleMenu'
import Dropzone from 'react-dropzone';
import * as request from 'superagent';
import { CLOUDINARY_UPLOAD_PRESET, CLOUDINARY_UPLOAD_URL } from '../../constants'
import LocationSearchInput from './Geolocate';
import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';

class RegistrationForm2 extends Component {
  state = {
    first_name: this.props.fbState? this.props.fbState.fbName[0]  : "",
    last_name:  this.props.fbState? this.props.fbState.fbName[1]  : "",
    role: null,
    level:"beginner",
    gender: null,
    photoURL: this.props.fbState ? this.props.fbState.fbPicture : ""
  };

  handleSubmit = async e => {
    e.preventDefault();
    if(!this.state.role && !this.state.gender) return this.setState({roleError:true , genderError:true})
    if(!this.state.role) return this.setState({roleError:true})
    if(!this.state.gender) return this.setState({genderError:true})
    if(!this.state.roleError && !this.state.genderError){ 
    await this.props.postProfile(
      this.state.first_name,
      this.state.last_name,
      this.state.role,
      this.state.level,
      this.state.photoURL,
      this.state.gender,
      this.state.age,
      this.state.height,
      this.state.city
    );
    await this.props.onSubmit(this.state);
  };
}

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSelectCity = event => {
    let formatedCity = event.split(',', 1);
    this.setState({ city: `${formatedCity[0]}` });
  };

  handleButtonClick = input => {
    if (input === 'leader') this.setState({ role: 'leader' , roleError:false});
    if (input === 'follower') this.setState({ role: 'follower', roleError:false });
    if (input === 'male') this.setState({ gender: 'male' , genderError: false });
    if (input === 'female') this.setState({ gender: 'female' , genderError: false  });
    if (input === 'other') this.setState({ gender: 'other', genderError: false  });
  };

  handleLevelBar =  render => {
    let newRender = Math.round(render[1])
    if(newRender === 1) this.setState({level:"beginner"})
    if(newRender === 2) this.setState({level:"intermediate"})
    if(newRender === 3) this.setState({level:"advanced"})
    if(newRender === 4) this.setState({level:"professional"})
  };

  //image uploader
  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request
      .post(CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          photoURL: response.body.secure_url
        });
      }
    });
  }

  dropzoneStyle = () => {
    if (this.state.photoURL)
      return `background-image=url(${
        this.state.photoURL
      }); background-size:100%;`;
  };
  //image uploader

  render() {
    const mystyle = {
      backgroundImage: `url(${this.state.photoURL})`,
      backgroundSize: '100%'
    };
    const renderUploader = (
      <div className="uploader">
        <div>
          <div className="FileUpload" required>
            <Dropzone
              className={'dropZone'}
              style={this.state.photoURL ? mystyle : null}
              onDrop={this.onImageDrop.bind(this)}
              multiple={false}
              data-toggle="tooltip"
              title="add a picture"
              accept="image/*"
            />
          </div>
        </div>
      </div>
    );
    return (
      <div className="container signupContainer">
        <div className="row signup-row">
          <div className="col-lg-10 col-xl-9 mx-auto padd">
            <div className="card card-signin flex-row my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Step 2: Profile info</h5>
                <form className="form-signin" onSubmit={this.handleSubmit}>
                  <div className="photoUploader">{renderUploader}</div>
                  <hr />
                  <div className="form-group" id="firstName">
                    <input
                      type="first_name"
                      placeholder="First Name *"
                      id="inputEmail"
                      className="form-control menu2inputs boxShaddow"
                      name="first_name"
                      value={this.state.first_name || ''}
                      required
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group" id="lastName">
                    <input
                      placeholder="Last Name *"
                      type="last_name"
                      name="last_name"
                      id="inputPassword"
                      className="form-control menu2inputs boxShaddow"
                      required
                      value={this.state.last_name || ''}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group" id="firstName">
                    <input
                      required
                      type="age"
                      placeholder=" Age *"
                      id="inputEmail"
                      className="form-control menu2inputs boxShaddow"
                      name="age"
                      value={this.state.age || ''}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group" id="lastName">
                    <input
                      placeholder="Height in cms *"
                      type="height"
                      name="height"
                      id="inputPassword"
                      className="form-control menu2inputs boxShaddow"
                      required
                      value={this.state.height || ''}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <LocationSearchInput onChange={this.handleSelectCity} />
                  </div>
                  <GenderMenu
                      gender={this.state.gender}
                      handleButtonClick={this.handleButtonClick}
                    />
                    {this.state.genderError && <span className="uIError">Please select a gender.</span>}
                    <RoleMenu
                      role={this.state.role}
                      handleButtonClick={this.handleButtonClick}
                    />
                    {this.state.roleError && <span className="uIError">Please select a role.</span>}
                  <span className="levelBarName">Level: {this.state.level && this.state.level}</span>
                  <div className="levelSlider">
                  <Nouislider
                      className="sliderBar levelSliderBar"
                      range={{ min: 1, max: 4 }}
                      start={[1,1]}
                      connect
                      step={1}
                      onSlide={this.handleLevelBar}
                    />
                    </div>
                  <button
                    disabled={!this.state.photoURL}
                    className="btn btn-lg btn-primary btn-block text-uppercase finalStepBtn"
                    type="submit">
                    <span>Final Step</span>
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
    postProfile
  }
)(RegistrationForm2);
