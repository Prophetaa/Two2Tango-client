import * as React from 'react'
import { Component } from 'react'
import '../../styling/HomePage.css';

import event from '../../styling/images/event.png'
import interview from '../../styling/images/interview.png'
import laugh from '../../styling/images/laugh.png'
import Avatar4 from '../../styling/images/Avatar4.png'
import Avatar2 from '../../styling/images/Avatar2.png'
import Avatar3 from '../../styling/images/Avatar3.png'

import Avatar5 from '../../styling/images/Avatar5.png'
import Avatar6 from '../../styling/images/Avatar6.png'
import Avatar7 from '../../styling/images/Avatar7.png'
import logoWhite from '../../styling/images/logo-grey.png'

export class homePage extends Component {

  render() {
    return (
      <div>
        <main>
          {/* background dancers */}
          <div className="container-fluid background-top-home">
            <div className="row">
              <div className="col-12">
                {/* <img className="container-fluid" src={background} alt="background"/> */}
                  <h2 className="display-3">Find a tango partner <br/>in your city</h2> 
                  <button type="button" className="btn btn-outline-light btn-lg">log In</button>
                  <button type="button" className="btn btn-primary btn-lg SignInPrmBtn">SignUp</button>
              </div>   
            </div>
          </div>
          {/* what you can do */}
          <div className="container-fluid wcyd">
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
          <div className="container-fluid tangueros-home">
            <div className="row text-center">
              <div className="col-12">
                <h2 className="display-4 title-home ">New tangueros</h2>
              </div>
            </div>
            <div className="row text-center">
              {/* <div className="col-sm-12 col-md-4">
                <div className="card">
                  <img src={Avatar5} className="rounded-circle card-imd-top" alt="event-icon" />
                  <div className="card-title name">Claudio</div>
                  <div className="card-body">
                    <p className="about d-flex flex-wrap">Beginer</p>            
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="card">
                  <img src={Avatar6} className="rounded-circle card-imd-top" alt="event-icon" />
                  <div className="card-title name">Claudio</div>
                  <div className="card-body">
                    <p className="about d-flex flex-wrap">I was too shy to invite followers. Now I have regular partners and I dance a lot! </p>            
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="card">
                  <img src={Avatar7} className="rounded-circle card-imd-top" alt="event-icon" />
                  <div className="card-title name">Claudio</div>
                  <div className="card-body">
                    <p className="about d-flex flex-wrap">I missed so many events because I was alone. Now I enjoy a full tango life</p>
                  </div>
                </div>
              </div> */}
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-2 avatar-box-home">
                <img src={Avatar2} className="avatar-home" alt="event-icon" />
                <p className="name">Claudio</p>
                <p className="level">Beginer</p>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-2 avatar-box-home">
                <img src={Avatar3} className="avatar-home" alt="event-icon" />
                <p className="name-home">Claudio</p>
                <p className="level">Beginer</p>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-2 avatar-box-home">
                <img src={Avatar4} className="avatar-home" alt="event-icon" />
                <p className="name-home">Claudio</p>
                <p className="level">Beginer</p>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-2 avatar-box-home">
                <img src={Avatar4} className="avatar-home" alt="event-icon" />
                <p className="name-home">Claudio</p>
                <p className="level">Beginer</p>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-2 avatar-box-home">
                <img src={Avatar4} className="avatar-home" alt="event-icon" />
                <p className="name-home">Claudio</p>
                <p className="level">Beginer</p>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-2 avatar-box-home">
                <img src={Avatar4} className="avatar-home" alt="event-icon" />
                <p className="name-home">Claudio</p>
                <p className="level">Beginer</p>
              </div>
            </div> 
            <div className="container-fluid text-center">
              <div className="row-12">
                <div className="col-12">
                  <h2 className="display-3">Join them on the dancefloor.</h2> 
                  <button type="button" className="btn btn-primary btn-lg SignInPrmBtn">SignUp</button>
                </div>   
              </div>
            </div>
          </div>
          {/* about */}
          {/* <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">   
                <p className="h1 m-5 pb-5">I was too shy to invite followers. Now I have regular partners and I dance a lot!</p>
              </div>
              <div className="col-lg-6">
                <img src={Avatar7} className="img-fluid rounded-circle" alt="avatar" />
              </div>
            </div>    
          </div> */}
          <div className="media border p-3">
          <img src={Avatar7} className="mr-3 mt-3 rounded-circle" alt="avatar" />

          </div>

          {/* join  */}
          <div className="container-fluid background-bottom-home text-right">
            <div className="row-12">
              <div className="col-12">
                <h2 className="display-3">Time to dance.<br/>Find your partner now.</h2> 
                <button type="button" className="btn btn-primary btn-lg SignInPrmBtn">SignUp</button>
              </div>   
            </div>
          </div>
          <div className="container-fluid footer-home">
              <div className="row">
                <div className="col-12">
                  <img src={logoWhite} alt="logo" />
                </div>
              </div>
          </div>
        </main>
      </div>
    )
  }
}

export default homePage
