import * as React from 'react';
import '../../styling/RegistrationForm.css';
import Dropzone from 'react-dropzone';
import * as request from 'superagent';


import LocationSearchInput from './Geolocate'

const CLOUDINARY_UPLOAD_PRESET = 'ieb90awf';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dg6hu5lub/image/upload';

export default class RegistrationForm2 extends React.Component{
  state = {};

  handleSubmit =  e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSelectCity = event =>{
    let formatedCity = event.split(",", 1)
    this.setState({city: formatedCity})    
  }

  //image uploader
  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
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
  //image uploader

  render() {
    const renderUploader = (  
        <div className="uploader">
        <form>
          <div className="FileUpload">
            <Dropzone
            className="dropZone"
              onDrop={this.onImageDrop.bind(this)}
              multiple={false}
              accept="image/*">
              <p className="uploaderMessage">Drop an image or click to select a file to upload.</p>
            </Dropzone>
          </div>
        </form>
        </div>
    )
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card card-signin flex-row my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Step 2: Profile info</h5>
                <form className="form-signin">
                <div className="photoUploader">
                {renderUploader}
                </div>
                  <div className="form-label-group">
                    <input
                      type="first_name"
                      id="inputEmail"
                      className="form-control"
                      name="first_name"
                      value={this.state.first_name || ''}
                      required
                      onChange={this.handleChange}
                    />
                    <label htmlFor="inputEmail">First Name</label>
                  </div>
                  <div className="form-label-group">
                    <input
                      type="last_name"
                      name="last_name"
                      id="inputPassword"
                      className="form-control"
                      required
                      value={this.state.last_name || ''}
                      onChange={this.handleChange}
                    />
                    <label htmlFor="inputPassword">Last Name</label>
                  </div>

                  <div className="form-label-group">
                      <LocationSearchInput onChange={this.handleSelectCity} />
                  </div>

                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit">
                    Final Step    >>>
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
