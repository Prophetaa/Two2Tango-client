import React from 'react';
import '../../styling/EditProfile.css';


export default function EditProfileForm(props) {
	console.log(props);
  return (
    <div className="edit-profile">
      <header>
        <h1>Modify my profile</h1>
      </header>
      <div className="container-profile">
        <main>
          <form onSubmit={props.onProfileSubmit}>
            <div className="row edit-row">
              <div className="col-sm-12 col-md-4">
			  <div className='dropZone-edit'>{props.dropZone}</div>
                <div className="form-group">
                  <label htmlFor="firstName" className="text-uppercase labels">
                    First name:
                  </label>
                  <input
                    type="text"
                    className="form-control edit-inputs"
                    id="firstName"
                    name="firstName"
                    placeholder={props.profile.firstName}
                    onChange={props.onChange}
                    value={props.firstName || ''}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName" className="text-uppercase labels">
                    Last name:
                  </label>
                  <input
                    type="text"
                    className="form-control edit-inputs"
                    id="lastName"
                    name="lastName"
                    placeholder={props.profile.lastName}
                    value={props.lastName || ''}
                    onChange={props.onChange}
                  />
                </div>
              </div>
              <div className="col-sm">
                <div className="form-group">
                  <label htmlFor="city" className="text-uppercase labels">
                    City:
                  </label>
                  <input
                    type="text"
                    className="form-control edit-inputs"
                    id="city"
                    name="city"
                    placeholder={props.profile.city}
                    value={props.city || ''}
                    onChange={props.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="height" className="text-uppercase labels">
                    Height:
                  </label>
                  <input
                    type="text"
                    className="form-control edit-inputs"
                    id="height"
                    name="height"
                    placeholder={props.profile.height}
                    value={props.height || ''}
                    onChange={props.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="age" className="text-uppercase labels">
                    Age:
                  </label>
                  <input
                    type="text"
                    className="form-control edit-inputs"
                    id="age"
                    name="age"
                    placeholder={props.profile.age}
                    value={props.age || ''}
                    onChange={props.onChange}
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="gender"
                    className="text-uppercase labels labels-edit">
                    Gender:
                  </label>
                  <select
                    name="gender"
                    className="form-control edit-select"
                    placeholder={props.profile.gender}
                    value={props.gender || ''}
                    onChange={props.onChange}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="role" className="text-uppercase labels">
                    Role:
                  </label>
                  <select
                    name="role"
                    className="form-control edit-select"
                    placeholder={props.profile.role}
                    value={props.role || ''}
                    onChange={props.onChange}>
                    <option value="leader">Leader</option>
                    <option value="follower">Follower</option>
                    <option value="both">Both</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="level" className="text-uppercase labels">
                    Level:
                  </label>
                  <select
                    name="level"
                    className="form-control edit-select"
                    placeholder={props.profile.level}
                    value={props.level || ''}
                    onChange={props.onChange}>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="professional">Professional</option>
                  </select>
                </div>
              </div>
              <div className="col-sm">
                <div className="form-group">
                  <label
                    className="text-uppercase about-edit"
                    htmlFor="about-me labels">
                    <h3 className="text-uppercase">about me</h3>
                  </label>
                  <textarea
                    className="form-control"
                    id="about-me"
                    name="about"
                    rows="10"
                    placeholder={props.profile.about}
                    value={props.about || ''}
                    onChange={props.onChange}
                  />
                  <button
                    className="btn btn-primary btn-block text-uppercase mt-5 edit-btn"
                    type="submit">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div className="parameters">
            <h2>Danger area</h2>
            <form onSubmit={props.onParametersSubmit}>
              <div className="row ">
                <div className="col-sm-4 param-form">
                  <div className="form-group">
                    <label htmlFor="password" className="text-uppercase labels">
                      Change password:
                    </label>
                    <input
                      type="text"
                      className="form-control param-input"
                      id="password"
                      name="password"
                      value={props.password || ''}
                      onChange={props.onChange}
                    />
                    <button
                      className="btn btn-primary btn-block text-uppercase param-btn"
                      type="submit">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </main>
        <div className="profile-footer edit-profile">
          <button
            className="btn btn-block text-uppercase delete-btn"
            onClick={() => props.deleteAccount()}>
            Delete my account
          </button>
        </div>
      </div>
    </div>
  );
}
