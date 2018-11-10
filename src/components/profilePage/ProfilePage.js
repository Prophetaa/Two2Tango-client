import React from 'react';
import '../../styling/ProfilePage.css';
import MessageForm from './MessageForm';
import { toUserId } from '../../jwt';
import { Link } from 'react-router-dom';

export default function ProfilePage(props) {
	const currentUserId = toUserId(props.currentUser.jwt);
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
					{props.profile.userId === currentUserId && (
						<Link to="/edit-profile">
							<button className="btn update text-uppercase">
								update profile
							</button>
						</Link>
					)}
				</div>
				<div className="details">
					<ul className="list-unstyled details-list">
						<li className="d-flex justify-content-between">
							<span className="text-uppercase">name: </span>
							<span>{profile.firstName}</span>
						</li>
						<li className="d-flex justify-content-between">
							<span className="text-uppercase">city: </span>
							<span>{profile.city}</span>
						</li>
						<li className="d-flex justify-content-between">
							<span className="text-uppercase">role: </span>
							<span>{profile.role}</span>
						</li>
						<li className="d-flex justify-content-between">
							<span className="text-uppercase">level: </span>
							<span>{profile.level}</span>
						</li>
						<li className="d-flex justify-content-between">
							<span className="text-uppercase">height: </span>
							<span>{profile.height}</span>
						</li>
						<li className="d-flex justify-content-between">
							<span className="text-uppercase">age: </span>
							<span>{profile.age}</span>
						</li>
						<li className="d-flex justify-content-between">
							<span className="text-uppercase">gender: </span>
							<span>{profile.gender}</span>
						</li>
					</ul>
				</div>
				<div className="about">
					<h3 className="text-uppercase">about me</h3>
					<p>
						{profile.about}
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur.
					</p>
					{props.profile.userId !== currentUserId && <MessageForm />}
				</div>
			</div>
		</div>
	);
}
