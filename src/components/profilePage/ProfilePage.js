import React from "react";
import "../../styling/ProfilePage.css";
import MessageForm from "./MessageForm";
import { toUserId } from "../../jwt";
import { Link } from "react-router-dom";
import Avatar7 from '../../styling/images/Avatar7.png';

export default function ProfilePage(props) {
  const currentUserId = toUserId(props.currentUser.jwt);
  const { profile } = props;

  return (
    <div className="main">
      <div className="row">
        <div className="col-12 my-profile">
          <h1>My Profile</h1>
          <div className="image"/>
        </div>
        <div className="row main">
          <div className="col-xs-12 col-sm-6 col-md-4 image-column">
            <img src={Avatar7} className="image" alt="" />
			{/* <img src={profile.photoUrl} className="image" alt="" /> */}
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 details">
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
          <div className="col-xs-12 col-sm-6 col-md-4 about">
            <h3 className="text-uppercase">about me</h3>
            <p>
              {profile.about}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
			{props.profile.userId !== currentUserId && <MessageForm />}
			
			
          </div>
		  <div className="row update">
		  {/* {props.profile.userId === currentUserId && (
              <Link to="/edit-profile">
                <button className="btn update-btn text-uppercase">
                  modify my profile
                </button>
              </Link>
			)} */}
			</div>
        </div>
      </div>
    </div>
  );
}
