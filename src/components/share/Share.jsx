import {
  Close,
  EmojiEmotions,
  PermMedia,
  VideoCameraFront,
} from "@mui/icons-material";
import React, { useContext, useState } from "react";
import "./share.scss";
import {AuthContext} from "./../../context/AuthContext"

const Share = () => {
  const {currentUser} =useContext(AuthContext)
  const[input,setInput] =useState("")
  const [file, setFile] =useState(null);

  const removeImage = () =>{
    setFile(null);
  }
  // console.log(currentUser)
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={currentUser.photoURL}
            alt=""
            className="shareProfileImg"
          />
          <textarea
            type="text"
            rows={2}
            style={{resize:"none",overflow:"hidden"}}
            placeholder={"What's on your mind " + currentUser.displayName + "?"}
            value ={input}
            className="shareInput"
            onChange={(e) =>setInput(e.target.value)}
          />
        </div>
        <hr className="shareHr" />
        {file && <div className="shareImgContainer">
          <img src={URL.createObjectURL(file)} alt="" className="shareImg" />
          <Close className="shareCancelImg" onClick ={removeImage} />
          </div>}
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <VideoCameraFront
                className="shareIcon"
                style={{ color: "#bb0000f2" }}
              />
              <span className="shareOptionText">Live Video</span>
            </div>
            <label htmlFor="file" className="shareOption">
              <PermMedia className="shareIcon" style={{ color: "#2e0196f1" }} />
              <span className="shareOptionText">Photo/Video</span>
              <input
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                style={{ display: "none" }}
                onChange ={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="shareOption">
              <EmojiEmotions
                className="shareIcon"
                style={{ color: "#bfc600ec" }}
              />
              <span className="shareOptionText">Feelings/Activity</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
