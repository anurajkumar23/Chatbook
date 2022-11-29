import React from "react";
import Online from "../online/Online";
import "./rightbarhome.scss";
import { Usersonline } from "../../data"

const Rightbarhome = () => {
  return (
    <div className="rightbarhome">
      <div className="birthdayContainer">
        <img
          src="/assets/birthdaygifts/gift.png"
          alt=""
          className="birthdayImg"
        />
        <span className="birthdayText">
          <b>Sarah Dane</b> and <b>other friends</b> have a birthday today
        </span>
      </div>
      <img src="assets/ads/adv.jpg" alt="" className="rightbarAdvert" />

      <span className="rightbarTitle">Online Friends</span>

      <ul className="rightbarFriendList">
        {Usersonline.map((u) =>(
          <Online key={u.id} onlineuser={u}/>
        ))}
        
      </ul>
    </div>
  );
};

export default Rightbarhome;
