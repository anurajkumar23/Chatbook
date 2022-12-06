import {
  Close,
  EmojiEmotions,
  PermMedia,
  VideoCameraFront,
} from "@mui/icons-material";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
import{ v4 as uuid } from "uuid" 
import React, { useContext, useState } from "react";
import "./share.scss";
import {AuthContext} from "./../../context/AuthContext"

const Share = () => {
  const[error, setError] =useState(false)
  const {currentUser} =useContext(AuthContext)
  const[input,setInput] =useState("")
  const [img, setImg] =useState(null);
 
  const  handlePost=()=>{
    if(img){
      const storageRef = ref(storage, uuid() );
      
      const uploadTask = uploadBytesResumable(storageRef, img);
      
      uploadTask.on(

        (error) => {
        setError(true)
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
         
          });
        }
      );
    }else{
    
    }
  }
  const handleKey = (e) =>{
  e.code==="Enter" && handlePost()
  }

  const removeImage = () =>{
    setImg(null);
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
            onKeyDown ={handleKey}
          />
        </div>
        <hr className="shareHr" />
        {img && <div className="shareImgContainer">
          <img src={URL.createObjectURL(img)} alt="" className="shareImg" />
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
                onChange ={(e) => setImg(e.target.files[0])}
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
