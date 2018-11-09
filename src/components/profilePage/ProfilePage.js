import React from 'react';
import '../../styling/ProfilePage.css';
import MessageForm from './MessageForm';

export default function ProfilePage(props) {
	const { profile } = props;
	return (
		<div className="main">
			<div className="top">
				<div className="my-profile">
					<h1>My Profile</h1>
					<div className="image" />
				</div>

				<div className="image-column">
					<img src={profile.photoUrl} className="image" alt="" />
				</div>
				<div className="details">
					<ul className="list-unstyled details-list">
						<li className="d-flex justify-content-around">
							<span className="text-uppercase">name: </span>
							<span>{profile.firstName}</span>
						</li>
						<li>CITY: {profile.city}</li>
						<li>ROLE: {profile.role}</li>
						<li>LEVEL: {profile.level}</li>
						<li>HEIGHT: {profile.height}</li>
						<li>AGE: {profile.age}</li>
						<li>GENDER: {profile.gender}</li>
					</ul>
					<button className="btn update text-uppercase">
						update my profile
					</button>
				</div>
				<div className="about">
					<h3 className="text-uppercase">ABOUT ME</h3>
					<p>
						{profile.about}
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur.
					</p>
				</div>
				<MessageForm />
			</div>
		</div>
	);
}
