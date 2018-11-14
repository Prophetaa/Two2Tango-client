import React from 'react';
import '../../styling/ProfilePage.css';
import { toUserId } from '../../jwt';

export default function ProfilePage(props) {
	const { profile, matchUser, currentUser, matches } = props;
	return (
		<section className="profile-page">
			<header>
				<div className="container">
					<h1>{`${profile.firstName}'s profile`}</h1>
				</div>
			</header>
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-4">
						<img src={profile.photoUrl} alt="" />
					</div>
					{console.log(profile)}
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
							<div className="col-6 col-md-6">{profile.height} cm</div>
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
						{matches && !matches.includes(`[${toUserId(currentUser.jwt)},${profile.userId}]`) && matches && !matches.includes(`[${profile.userId},${toUserId(currentUser.jwt)}]` )&& 
						<a href="/messages"><button className="btn matchBtn" onClick={()=> matchUser(profile.userId)}>Match this Person</button></a>
						}
					</div>
				</div>
			</div>
		</section>
	);
}
