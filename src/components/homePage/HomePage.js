import * as React from 'react';
import { Component } from 'react';
import '../../styling/HomePage.css';
import history from '../../history';

import backgroud1 from '../../styling/images/background01.jpg';
import event from '../../styling/images/event.png';
import interview from '../../styling/images/interview.png';
import laugh from '../../styling/images/laugh.png';
import Avatar4 from '../../styling/images/Avatar4.png';
import Avatar2 from '../../styling/images/Avatar2.png';
import Avatar3 from '../../styling/images/Avatar3.png';
import Avatar6 from '../../styling/images/Avatar6.png';
import Avatar7 from '../../styling/images/Avatar7.png';
import logoWhite from '../../styling/images/logo-grey.png';
import quoteLeft from '../../styling/images/quote-left.png';
import quoteRight from '../../styling/images/quote-right.png';

export class homePage extends Component {
	render() {
		return (
			<div>
				<main>
					{/* background dancers */}
					<div className="container position-fix">
						<div className="row">
							<div className="col-12">
								<div className="container position-absolute image-top">
									<h2 className="display-3">
										Find a tango partner <br />
										in your city
									</h2>
									<button
										type="button"
										className="btn btn-outline-light btn-lg"
										onClick={() => this.props.history.push(`/login`)}>
										log In
									</button>
									<button
										type="button"
										className="btn btn-primary btn-lg SignInPrmBtn"
										onClick={() => this.props.history.push(`/signup`)}>
										SignUp
									</button>
								</div>
								<img className="container" src={backgroud1} alt="background" />
							</div>
						</div>
					</div>

					{/* what you can do */}
					<div className="container wcyd position-fix">
						<div className="row text-center">
							<div className="col-12">
								<h2 className="display-4 title-home">what you can do</h2>
							</div>
						</div>
						<div className="row text-center">
							<div className="col-xs-12 col-sm-6 col-md-4">
								<img src={interview} alt="interview icon" />
								<p>Build a network of suitable partners</p>
							</div>
							<div className="col-xs-12 col-sm-6 col-md-4">
								<img src={event} alt="event icon" />
								<p>Discover tango events all over the world</p>
							</div>
							<div className="col-xs-12 col-sm-6 col-md-4">
								<img src={laugh} alt="laugh icon" />
								<p>Keep in touch with the tango community</p>
							</div>
						</div>
					</div>

					{/* new tangueros  */}
					<div className="container tangueros-home position-fix">
						<div className="row text-center">
							<div className="col-12">
								<h1 className="display-4 title-home ">New tangueros</h1>
							</div>
						</div>
						<div className="row text-center d-flex justify-content-around">
							<div className="col-xs-12 col-sm-4 col-md-4 col-lg-1 col-xl-1 avatar-box-home">
								<img src={Avatar2} className="avatar-home" alt="event-icon" />
								<p className="name">Claudio</p>
								<p className="level">Beginer</p>
							</div>
							<div className="col-xs-12 col-sm-4 col-md-4 col-lg-1 col-xl-1 avatar-box-home">
								<img src={Avatar3} className="avatar-home" alt="event-icon" />
								<p className="name-home">Claudio</p>
								<p className="level">Beginer</p>
							</div>
							<div className="col-xs-12 col-sm-4 col-md-4 col-lg-1 col-xl-1 avatar-box-home">
								<img src={Avatar4} className="avatar-home" alt="event-icon" />
								<p className="name-home">Claudio</p>
								<p className="level">Beginer</p>
							</div>
							<div className="col-xs-12 col-sm-4 col-md-4 col-lg-1 col-xl-1 avatar-box-home">
								<img src={Avatar4} className="avatar-home" alt="event-icon" />
								<p className="name-home">Claudio</p>
								<p className="level">Beginer</p>
							</div>
							<div className="col-xs-12 col-sm-4 col-md-4 col-lg-1 col-xl-1 avatar-box-home">
								<img src={Avatar4} className="avatar-home" alt="event-icon" />
								<p className="name-home">Claudio</p>
								<p className="level">Beginer</p>
							</div>
							<div className="col-xs-12 col-sm-4 col-md-4 col-lg-1 col-xl-1 avatar-box-home">
								<img src={Avatar4} className="avatar-home" alt="event-icon" />
								<p className="name-home">Claudio</p>
								<p className="level">Beginer</p>
							</div>
							<div className="col-xs-12 col-sm-4 col-md-4 col-lg-1 col-xl-1 avatar-box-home">
								<img src={Avatar4} className="avatar-home" alt="event-icon" />
								<p className="name-home">Claudio</p>
								<p className="level">Beginer</p>
							</div>
						</div>
						<div className="container text-center position-fix">
							<div className="row-12">
								<div className="col-12">
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

					{/* about */}
					<div className="container about-home position-fix">
						<div className="row">
							<div className="media position-fix">
								<img
									src={Avatar6}
									className="rounded-circle avatar-big-home m-5"
									alt="avatar"
								/>
								<div className="media-body avatar-box-home">
									<img
										src={quoteLeft}
										className="quote align-left"
										alt="quote-left"
									/>
									<h1 className="display-4 avatar-text-home">
										I was too shy to invite followers. Now I have regular
										partners and I dance a lot!
									</h1>
									<div className="container d-flex justify-content-end">
										<img src={quoteRight} className="quote" alt="quote-right" />
									</div>
								</div>
							</div>
							<div className="media position-fix">
								<div className="media-body avatar-box-home">
									<img
										src={quoteLeft}
										className="quote align-left"
										alt="quote-left"
									/>
									<h1 className="display-4 avatar-text-home">
										I missed so many events because I was alone. Now I enjoy a
										full tango life
									</h1>
									<div className="container d-flex justify-content-end position-fix">
										<img src={quoteRight} className="quote" alt="quote-right" />
									</div>
								</div>
								<img
									src={Avatar7}
									className="rounded-circle avatar-big-home m-5"
									alt="avatar"
								/>
							</div>
						</div>
					</div>

					{/* join  */}
					<div className="container background-bottom-home text-right">
						<div className="row-12">
							<div className="col-12">
								<h2 className="display-3">
									Time to dance
									<br />
									Find your partner now
								</h2>
								<button
									type="button"
									className="btn btn-primary btn-lg SignInPrmBtn"
									onClick={() => history.push(`/signup`)}>
									SignUp
								</button>
							</div>
						</div>
					</div>
					<div className="container footer-home">
						<div className="row">
							<div className="col-12">
								<img src={logoWhite} alt="logo" />
							</div>
						</div>
					</div>
				</main>
			</div>
		);
	}
}

export default homePage;
