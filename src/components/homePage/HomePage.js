import * as React from 'react';
import { Component } from 'react';
import '../../styling/HomePage.css';
import history from '../../history';
import { connect } from 'react-redux';
import { getLatestProfiles } from '../../actions/results';

// import backgroud1 from '../../styling/images/background01.jpg';
import event from '../../styling/images/event.png';
import interview from '../../styling/images/interview.png';
import laugh from '../../styling/images/laugh.png';
import Avatar6 from '../../styling/images/Avatar6.png';
import Avatar7 from '../../styling/images/Avatar7.png';
// import logoWhite from '../../styling/images/logo-grey.png';
import quoteLeft from '../../styling/images/quote-left.png';
import quoteRight from '../../styling/images/quote-right.png';
import Footer from './Footer';

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
									<h2>
										Find a tango partner <br />
										in your city
									</h2>
									<button
										type="button"
										className="btn btn-outline-light btn-lg"
										onClick={() => this.props.history.push(`/login`)}>
										Log In
									</button>
									<button
										type="button"
										className="btn btn-primary btn-lg SignInPrmBtn"
										onClick={() => this.props.history.push(`/signup`)}>
										Sign Up
									</button>
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
										className="btn btn-primary btn-lg SignInPrmBtn"
										onClick={() => history.push(`/signup`)}>
										SignUp
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
							<div className="col-xs-12 col-sm-12 col-md-8">
								<img
									src={quoteLeft}
									className="quote left-home float-left"
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
								<div>Clara, 36, leader</div>
							</div>
						</div>
					</div>
					<div className="container about-home">
						<div className="row avatar-row-home">
							<div className="col-xs-12 col-sm-12 col-md-8">
								<img
									src={quoteLeft}
									className="quote left-home float-left"
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
								<div>Beth, 26, follower</div>
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
								<div>
									<p className="h2">
										Time to dance
										<br />
										Find your partner now
									</p>
									<button
										type="button"
										className="btn btn-primary btn-lg SignInPrmBtn"
										onClick={() => history.push(`/signup`)}>
										SignUp
									</button>
								</div>
							</div>
						</div>
					</div>
				</section>

				<Footer />
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

/* <div className="col-xs-12 col-sm-4 col-md-4 col-lg-1 col-xl-1 avatar-box-home">
								<img src={Avatar3} className="avatar-home" alt="avatar1" />
								<p className="name-home">Claudio</p>
								<p className="level-home">Beginer</p>
							</div>
							<div className="col-xs-12 col-sm-4 col-md-4 col-lg-1 col-xl-1 avatar-box-home">
								<img src={Avatar4} className="avatar-home" alt="avatar2" />
								<p className="name-home">Claudio</p>
								<p className="level-home">Beginer</p>
							</div>
							<div className="col-xs-12 col-sm-4 col-md-4 col-lg-1 col-xl-1 avatar-box-home">
								<img src={Avatar4} className="avatar-home" alt="avatar3" />
								<p className="name-home">Claudio</p>
								<p className="level-home">Beginer</p>
							</div>
							<div className="col-xs-12 col-sm-4 col-md-4 col-lg-1 col-xl-1 avatar-box-home">
								<img src={Avatar4} className="avatar-home" alt="avatar4" />
								<p className="name-home">Claudio</p>
								<p className="level-home">Beginer</p>
							</div>
							<div className="col-xs-12 col-sm-4 col-md-4 col-lg-1 col-xl-1 avatar-box-home">
								<img src={Avatar4} className="avatar-home" alt="avatar5" />
								<p className="name-home">Claudio</p>
								<p className="level-home">Beginer</p>
							</div>
							<div className="col-xs-12 col-sm-4 col-md-4 col-lg-1 col-xl-1 avatar-box-home">
								<img src={Avatar4} className="avatar-home" alt="avatar6" />
								<p className="name-home">Claudio</p>
								<p className="level-home">Beginer</p>
							</div> */
