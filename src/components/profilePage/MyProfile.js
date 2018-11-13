import React from 'react';
import '../../styling/ProfilePage.css';
import { Link } from 'react-router-dom';

export default function ProfilePage(props) {
	const { profile } = props;
	return (
		<div className="main-profile">
			<div className="row">
				<div className="col-12 my-profile">
					<h1>{profile.firstName}'s Profile</h1>
					<div className="image" />
				</div>
				<div className="row main-profile">
					<div className="col-xs-12 col-sm-6 col-md-4 image-column-profile">
						<img src={profile.photoUrl} className="image-profile" alt="" />
					</div>
					<div className="col-xs-12 col-sm-6 col-md-4 details-profile">
						<ul className="list-unstyled details-list-profile">
							<li className="d-flex">
								<span className="text-uppercase details-specs-profile">
									name:
								</span>
								<span className="my-details-profile">{profile.firstName}</span>
							</li>
							<li className="d-flex">
								<span className="text-uppercase details-specs-profile">
									city:
								</span>
								<span className="my-details-profile">{profile.city}</span>
							</li>
							<li className="d-flex">
								<span className="text-uppercase details-specs-profile">
									role:
								</span>
								<span className="my-details-profile">{profile.role}</span>
							</li>
							<li className="d-flex">
								<span className="text-uppercase details-specs-profile">
									level:
								</span>
								<span className="my-details-profile">{profile.level}</span>
							</li>
							<li className="d-flex">
								<span className="text-uppercase details-specs-profile">
									height:
								</span>
								<span className="my-details-profile">{profile.height} cm</span>
							</li>
							<li className="d-flex">
								<span className="text-uppercase details-specs-profile">
									age:
								</span>
								<span className="my-details-profile">{profile.age}</span>
							</li>
							<li className="d-flex">
								<span className="text-uppercase details-specs-profile">
									gender:
								</span>
								<span className="my-details-profile">{profile.gender}</span>
							</li>
						</ul>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-4 about-profile">
						<h3 className="text-uppercase">about me</h3>
						<p>{profile.about}</p>
					</div>
					<div className="row update-profile">
						<Link to="/edit-profile">
							<button className="btn update-btn-profile text-uppercase">
								modify my profile
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
