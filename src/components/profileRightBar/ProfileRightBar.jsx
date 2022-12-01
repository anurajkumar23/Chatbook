import React from "react";
import "./profileRightBar.scss";
import { Link } from "react-router-dom";

const ProfileRightBar = () => {
  return (
    <div className="profileRightBar">
      <div className="profileRightBarHeading">
        <span className="profileRightBarTitle"> User Information </span>
        <Link to="/profile/userId/edit" style={{ textDecoration: "none" }}>
        <span className="editButton">Edit Profile</span>
        </Link>
      </div>

      <div className="profileRightBarInfo">
        <div className="profileRightBarInfoIntem">
          <span className="profileRightBarInfoKey">Email: </span>
          <span className="profilRightBarInfoValue">amberlogan@gmail.com</span>
        </div>
        <div className="profileRightBarInfoIntem">
          <span className="profileRightBarInfoKey">Phone Number: </span>
          <span className="profilRightBarInfoValue">+4 123 456 789</span>
        </div>
        <div className="profileRightBarInfoIntem">
          <span className="profileRightBarInfoKey">Address: </span>
          <span className="profilRightBarInfoValue">
            Melwood Str. 72 Liverpool
          </span>
        </div>
        <div className="profileRightBarInfoIntem">
          <span className="profileRightBarInfoKey">Country: </span>
          <span className="profilRightBarInfoValue">United Kingdom</span>
        </div>
        <div className="profileRightBarInfoIntem">
          <span className="profileRightBarInfoKey">Relationship: </span>
          <span className="profilRightBarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="profileRightBarTitle">Close Friends</h4>
      <div className="profileRightBarFollowings">
        <div className="profileRightBarFollowing">
          <img
            src="/assets/person/friend1.jpg"
            alt=""
            className="profileRightBarFollowingImg"
          />
          <span className="profileRightBarFollowingName">Janet</span>
        </div>
        <div className="profileRightBarFollowing">
          <img
            src="/assets/person/friend2.jpg"
            alt=""
            className="profileRightBarFollowingImg"
          />
          <span className="profileRightBarFollowingName">Isabella</span>
        </div>
        <div className="profileRightBarFollowing">
          <img
            src="/assets/person/friend3.jpg"
            alt=""
            className="profileRightBarFollowingImg"
          />
          <span className="profileRightBarFollowingName">Beverly</span>
        </div>
        <div className="profileRightBarFollowing">
          <img
            src="/assets/person/friend4.jpg"
            alt=""
            className="profileRightBarFollowingImg"
          />
          <span className="profileRightBarFollowingName">Glenna</span>
        </div>
        <div className="profileRightBarFollowing">
          <img
            src="/assets/person/friend5.jpg"
            alt=""
            className="profileRightBarFollowingImg"
          />
          <span className="profileRightBarFollowingName">Alexis</span>
        </div>
        <div className="profileRightBarFollowing">
          <img
            src="/assets/person/friend6.jpg"
            alt=""
            className="profileRightBarFollowingImg"
          />
          <span className="profileRightBarFollowingName">Kate</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileRightBar;
