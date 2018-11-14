import * as React from 'react';
import { Component } from 'react';
import '../../styling/HomePage.css';
import history from '../../history';
import { connect } from 'react-redux';
import { getLatestProfiles } from '../../actions/results';
import { Link } from 'react-router-dom';

import event from '../../styling/images/event.svg';
import interview from '../../styling/images/interview.svg';
import laugh from '../../styling/images/laugh.svg';
import Avatar6 from '../../styling/images/Avatar6.png';
import Avatar7 from '../../styling/images/Avatar7.png';
import quoteLeft from '../../styling/images/quote-left.svg';
import quoteRight from '../../styling/images/quote-right.svg';

export class homePage extends Component {
	componentDidMount() {
		this.props.getLatestProfiles();
	}

	render() {
		return (
			<div className="home">
				<div className="background-top-home">
					<div className="container ">
						<div className="row">
							<div className="col-12">
								<div className="background-dancers-text">
									<h2 className="font-home">
										Find a tango partner <br />
										in your city
									</h2>
									{/* <button
										type="button"
										className="btn btn-outline-light btn-lg"
										onClick={() => this.props.history.push(`/login`)}>
										Log In
									</button> */}
									<button
										type="button"
										className="btn btn-primary btn-lg SignInPrmBtn"
										onClick={() => this.props.history.push(`/signup`)}>
										Sign Up
									</button>

									<div className="login-container">
										Already a member?
										<Link to="/login" className="login-home">
											&nbsp;Log In
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<section className="what-you-can-do">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h2 className="text-center display-4 title-home">
									What you can do
								</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-4">
								<img
									src={interview}
									alt="interview icons-home"
									className="icons-home"
								/>
								<div className="text-center">
									Build a network of suitable partners
								</div>
							</div>
							<div className="col-xs-12 col-sm-12 col-md-4">
								<img
									src={event}
									alt="event icons-home"
									className="icons-home "
								/>
								<div className="text-center">
									Discover tango events all over the world
								</div>
							</div>
							<div className="col-xs-12 col-sm-12 col-md-4">
								<img
									src={laugh}
									alt="laugh icons-home"
									className="icons-home "
								/>
								<div className="text-center">
									Keep in touch with the tango community
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="new-tangueros">
					<div className="container tangueros-home">
						<div className="row text-center">
							<div className="col-12">
								<p className="display-4 title-home ">New tangueros</p>
							</div>
						</div>
						<div className="row text-center d-flex justify-content-around">
							{this.props.latestProfiles &&
								this.props.latestProfiles.map((profile, i) => (
									<div
										key={i}
										className="col-4 col-sm-4 col-md-4 col-lg-1 col-xl-1 avatar-box-home">
										<img
											src={profile.photoUrl}
											className="avatar-home m-4"
											alt="avatar0"
										/>
										<p className="name-home">{profile.firstName}</p>
										<p className="level-home-home">{profile.level}</p>
									</div>
								))}
						</div>
						<div className="container text-center position-fix">
							<div className="row-xs-12">
								<div className="col-xs-12">
									<h4 className="display-4">Join them on the dancefloor</h4>
									<button
										type="button"
										className="btn btn-primary btn-lg SignInPrmBtn boxShaddow"
										onClick={() => history.push(`/signup`)}>
										Sign Up
									</button>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="testimonials">
					<div className="container about-home">
						<div className="row avatar-row-home">
							<img
								className="rounded-circle avatar-big-home mx-auto"
								src={Avatar7}
								alt="avatarBig"
							/>
							<div className="col-xs-12 col-sm-12 col-md-8 avatar-col-home">
								<img
									src={quoteLeft}
									className="quote left-home pr-3 float-left"
									alt="quote-left"
								/>
								<p className="h1 avatar-text-home">
									I was too shy to invite followers. Now I have regular partners
									and I dance a lot!
								</p>
								<img
									src={quoteRight}
									className="quote right-home float-right"
									alt="quote-right"
								/>
								<div className="testimonail-name-home">Clara, 36, leader</div>
							</div>
						</div>
					</div>
					<hr />
					<div className="container about-home">
						<div className="row avatar-row-home">
							<div className="col-xs-12 col-sm-12 col-md-8 avatar-col-home">
								<img
									src={quoteLeft}
									className="quote left-home pr-3 float-left"
									alt="quote-left"
								/>
								<p className="h1 avatar-text-home">
									I missed so many events because I was alone. Now I enjoy a
									full tango life
								</p>
								<img
									src={quoteRight}
									className="quote right-home float-right"
									alt="quote-right"
								/>
								<div className="testimonail-name-home">Beth, 26, follower</div>
							</div>
							<img
								className="rounded-circle avatar-big-home mx-auto"
								src={Avatar6}
								alt="avatarBig"
							/>
						</div>
					</div>
				</section>

				<section className="find-your-partner">
					<div className="container background-bottom-home text-right">
						<div className="row">
							<div className="col-12">
								<div className="partner-text">
									<p className="h2 font-home">
										Time to dance
										<br />
										Find your partner now
									</p>
									<button
										type="button"
										className="btn btn-primary btn-lg SignInPrmBtn "
										onClick={() => history.push(`/signup`)}>
										Sign Up
									</button>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

const mapStateToProps = function(state) {
	return {
		currentUser: state.currentUser,
		latestProfiles: state.latestProfiles
	};
};

export default connect(
	mapStateToProps,
	{ getLatestProfiles }
)(homePage);
