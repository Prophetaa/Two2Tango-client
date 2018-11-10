import * as React from 'react';
import { Component } from 'react';
import '../../styling/HomePage.css';
import history from '../../history';

import backgroud1 from '../../styling/images/background01.jpg';
import event from '../../styling/images/Event.png';
import interview from '../../styling/images/interview.png';
import laugh from '../../styling/images/laugh.png';
import Avatar4 from '../../styling/images/Avatar4.png';
import Avatar2 from '../../styling/images/Avatar2.png';
import Avatar3 from '../../styling/images/Avatar3.png';
import Avatar6 from '../../styling/images/Avatar6.png';
import Avatar7 from '../../styling/images/Avatar7.png';
// import logoWhite from '../../styling/images/logo-grey.png';
import quoteLeft from '../../styling/images/quote-left.png';
import quoteRight from '../../styling/images/quote-right.png';
import Footer from './Footer'

export class homePage extends Component {
	render() {
		return (
			<div>
				<main>
					{/* background dancers */}
					<div className="container background-top-home">
						<div className="row">
							<div className="col-12">
								<div className="background-dancers-text">
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
							</div>
						</div>
					</div>

					{/* what you can do */}
					<div className="container wcyd position-fix">
						<div className="row text-center">
							<div className="col-12">
								<h2 className="display-4 title-home">What you can do</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-xs-12 col-sm-6 col-md-4">
								<img src={interview} alt="interview icons-home" className="icons-home" />
								<div className="align-baseline">Build a network of suitable partners</div>
							</div>
							<div className="col-xs-12 col-sm-6 col-md-4">
								<img src={event} alt="event icons-home" className="icons-home "/>
								<div className="align-baseline">Discover tango events all over the world</div>
							</div>
							<div className="col-xs-12 col-sm-6 col-md-4">
								<img src={laugh} alt="laugh icons-home" className="icons-home "/>
								<div className="text-center">Keep in touch with the tango community</div>
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
								<img src={Avatar2} className="avatar-home" alt="avatar0" />
								<p className="name-home">Claudio</p>
								<p className="level-home-home">Beginer</p>
							</div>
							<div className="col-xs-12 col-sm-4 col-md-4 col-lg-1 col-xl-1 avatar-box-home">
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
							</div>
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

					{/* about */}
					<div className="container about-home">
						<div className="row avatar-row-home">
						<img className="rounded-circle avatar-big-home mx-auto" src={Avatar7} alt="avatarBig" />
							<div className="col-xs-12 col-sm-8 col-md-8">
								<img src={quoteLeft} className="quote left-home float-left" alt="quote-left"/>
								<h1 className="avatar-text-home">
									I was too shy to invite followers. Now I have regular
									partners and I dance a lot!
								</h1>
								<img src={quoteRight} className="quote right-home float-right" alt="quote-right" />
								<div>Clara, 36, leader</div>
							</div>	
						</div>
					</div>
					<div className="container about-home">
						<div className="row avatar-row-home">
							<div className="col-xs-12 col-sm-8 col-md-8">
								<img src={quoteLeft} className="quote left-home float-left" alt="quote-left"/>
								<h1 className="avatar-text-home">
									I missed so many events because I was alone. Now I enjoy a
									full tango life
								</h1>
								<img src={quoteRight} className="quote right-home float-right" alt="quote-right" />
								<div>Beth, 26, follower</div>
							</div>
							<img className="rounded-circle avatar-big-home mx-auto" src={Avatar6} alt="avatarBig" />	
						</div>
					</div>

					{/* join  */}
					<div className="container background-bottom-home text-right">
						<div className="row">
							<div className="col-12">
								<div>
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
					</div>
				</main>
				<Footer />
			</div>
		);
	}
}

export default homePage;
