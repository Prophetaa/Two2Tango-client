import React from 'react';
import '../../styling/EditProfile.css';

export default function EditProfileForm(props) {
	return (
		<div className="edit-profile">
			<header>
				<h1>Modify my profile</h1>
			</header>
			<div className="container">
				<main>
					<form onSubmit={props.onSubmit}>
						<div className="row">
							<div className="col-sm">
								<img src="" alt="" />
								<div className="form-group">
									<label htmlFor="firstName" className="text-uppercase">
										First name:
									</label>
									<input
										type="text"
										className="form-control"
										id="firstName"
										name="firstName"
										onChange={props.onChange}
										value={props.firstName || ''}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="lastName" className="text-uppercase">
										Last name:
									</label>
									<input
										type="text"
										className="form-control"
										id="lastName"
										name="lastName"
										value={props.lastName || ''}
										onChange={props.onChange}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="city" className="text-uppercase">
										City:
									</label>
									<input
										type="text"
										className="form-control"
										id="city"
										name="city"
										value={props.city || ''}
										onChange={props.onChange}
									/>
								</div>
							</div>
							<div className="col-sm">
								<div className="form-group">
									<label htmlFor="role" className="text-uppercase">
										Role:
									</label>
									<select
										name="role"
										className="form-control"
										value={props.role || ''}
										onChange={props.onChange}>
										<option value="leader">Leader</option>
										<option value="follower">Follower</option>
										<option value="both">Both</option>
									</select>
								</div>
								<div className="form-group">
									<label htmlFor="level" className="text-uppercase">
										Level:
									</label>
									<select
										name="level"
										className="form-control"
										value={props.level || ''}
										onChange={props.onChange}>
										<option value="beginner">Beginner</option>
										<option value="intermediate">Intermediate</option>
										<option value="advanced">Advanced</option>
										<option value="professional">Professional</option>
									</select>
								</div>
								<div className="form-group">
									<label htmlFor="height" className="text-uppercase">
										Height:
									</label>
									<input
										type="text"
										className="form-control"
										id="height"
										name="height"
										value={props.height || ''}
										onChange={props.onChange}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="age" className="text-uppercase">
										Age:
									</label>
									<input
										type="text"
										className="form-control"
										id="age"
										name="age"
										value={props.age || ''}
										onChange={props.onChange}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="gender" className="text-uppercase">
										Gender:
									</label>
									<select
										name="gender"
										className="form-control"
										value={props.gender || ''}
										onChange={props.onChange}>
										<option value="male">Male</option>
										<option value="female">Female</option>
										<option value="other">Other</option>
									</select>
								</div>
								<button
									className="btn btn-primary btn-block text-uppercase"
									type="submit">
									Update profile
								</button>
							</div>
							<div className="col-sm">
								<div className="form-group">
									<label className="text-uppercase" htmlFor="about-me">
										About me:
									</label>
									<textarea
										className="form-control"
										id="about-me"
										name="about"
										rows="10"
										value={props.about || ''}
										onChange={props.onChange}
									/>
								</div>
							</div>
						</div>
					</form>
				</main>
			</div>
		</div>
	);
}
