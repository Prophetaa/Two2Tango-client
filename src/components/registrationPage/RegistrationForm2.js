import React, { Component } from 'react';
import '../../styling/RegistrationForm.css';
import Dropzone from 'react-dropzone';
import * as request from 'superagent';

import LocationSearchInput from './Geolocate';
import CheckBoxes from './CheckBoxes'

const CLOUDINARY_UPLOAD_PRESET = 'ieb90awf';
const CLOUDINARY_UPLOAD_URL =
  'https://api.cloudinary.com/v1_1/dg6hu5lub/image/upload';

export default class RegistrationForm2 extends Component {
  state = {role:null};

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSelectCity = event => {
    let formatedCity = event.split(',', 1);
    this.setState({ city: formatedCity });
  };

  handleButtonClick = input => {
	if(input === "Leader") this.setState({role: "Leader"})
	if(input === "Follower") this.setState({role: "Follower"})
  }

  handleCheck = level => {
	this.setState({tango_level:level})
  }

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

  dropzoneStyle = () =>{
	if(this.state.photoURL) return `background-image=url(${this.state.photoURL}); background-size:100%;`
  }
  //image uploader


  render() {
    const mystyle={backgroundImage:`url(${this.state.photoURL})`, backgroundSize:"100%"}
    const renderUploader = (
      <div className="uploader">
        <form>
          <div className="FileUpload">
            <Dropzone
			      className={"dropZone"}
			        style={this.state.photoURL ? mystyle:null}
              onDrop={this.onImageDrop.bind(this)}
              multiple={false}
              accept="image/*">
            </Dropzone>
          </div>
        </form>
      </div>
    );
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
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
                      className="form-control menu2inputs"
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
                      className="form-control menu2inputs"
                      required
                      value={this.state.last_name || ''}
                      onChange={this.handleChange}
                    />
                  </div>
				  <div className="form-group" id="firstName">
                    <input
					  type="age"
					  placeholder=" Age (optional)"
                      id="inputEmail"
                      className="form-control menu2inputs"
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
                      className="form-control menu2inputs"
                      required
                      value={this.state.height || ''}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <LocationSearchInput onChange={this.handleSelectCity}/>
                  </div>
                  <div class="dropdown">
                    <button
                      class="form-control dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false">
					{this.state.role === null ? "Select a Role": this.state.role}
                    </button>
                    <div
                      className="dropdown-menu form-control"
                      aria-labelledby="dropdownMenuButton">
                      <span class="dropdown-item " onClick={()=> this.handleButtonClick("Leader")}>
                        Leader
                      </span>
                      <span class="dropdown-item" onClick={()=> this.handleButtonClick("Follower")}>
                        Follower
                      </span>
                    </div>
                  </div>
				  <CheckBoxes handleCheck={this.handleCheck} />
                  <button
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
