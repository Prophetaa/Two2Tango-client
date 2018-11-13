import React from 'react';
import '../../styling/ProfilePage.css';
import MessageForm from './MessageForm';

export default function ProfilePage(props) {
	const { profile } = props;
	return (
		<section className="profile-page">
			<header>
				<div className="container">
					<h1>My profile</h1>
				</div>
			</header>
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-4">
						<img src={profile.photoUrl} alt="" />
					</div>
					<div className="col-sm-12 col-md-4 profile-details">
						<h3 className="pb-4">Personalia</h3>
						<div className="row">
							<div className="col-6 col-md-5 text-uppercase mb-3">Name:</div>
							<div className="col-6 col-md-6">{profile.firstName}</div>
						</div>
						<div className="row">
							<div className="col-6 col-md-5 text-uppercase mb-3">City:</div>
							<div className="col-6 col-md-6">{profile.city}</div>
						</div>
						<div className="row">
							<div className="col-6 col-md-5 text-uppercase mb-3">Role:</div>
							<div className="col-6 col-md-6">{profile.role}</div>
						</div>
						<div className="row">
							<div className="col-6 col-md-5 text-uppercase mb-3">Level:</div>
							<div className="col-6 col-md-6">{profile.level}</div>
						</div>
						<div className="row">
							<div className="col-6 col-md-5 text-uppercase mb-3">Height:</div>
							<div className="col-6 col-md-6">{profile.height}</div>
						</div>
						<div className="row">
							<div className="col-6 col-md-5 text-uppercase mb-3">Age</div>
							<div className="col-6 col-md-6">{profile.age}</div>
						</div>
						<div className="row">
							<div className="col-6 col-md-5 text-uppercase mb-3">Gender:</div>
							<div className="col-6 col-md-6">{profile.gender}</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-4">
						<h3 className="pb-4">About me:</h3>
						<p>{profile.about}</p>
						<MessageForm />
					</div>
				</div>
			</div>
		</section>
	);
}
