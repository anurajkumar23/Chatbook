import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 

import React from "react";
import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth, db, storage } from "../../firebase";


const Register = () => {
  const [img, setImg] = useState(null);
  const [error, setError] = useState(false);
  const navigate =useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    // const confirmPassword = e.target[2].value;
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

const storageRef = ref(storage,"usersImages/" + displayName);

const uploadTask = uploadBytesResumable(storageRef, img);

uploadTask.on(

  (error) => {
    setError(true)
  }, 
  () => {

    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
     await updateProfile(res.user, {
         displayName,
         photoURL: downloadURL,

      })

      await setDoc(doc(db, "users", res.user.uid), {
        uid:res.user.uid,
        displayName,
        email,
        photoURL:downloadURL,
      });

      setDoc(doc(db,"usersPosts", res.user.uid),{messages: [] })
    });
  }
);

    } catch (e) {
      setError(true);
    }
    navigate("/login")
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Chatbook</h3>
          <span className="registerDesc">
            Connect with friends and the world around you on Chatbook.
          </span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <div className="top">
              <img
                src={
                  img
                    ? URL.createObjectURL(img)
                    : "/assets/profileCover/DefaultProfile.jpg"
                }
                alt=""
                className="profileImg"
              />
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlined className="icon" />
                  <input
                    type="file"
                    name="file"
                    id="file"
                    accept=".png,.jpeg,.jpg"
                    style={{ display: "none" }}
                    onChange={(e) => setImg(e.target.files[0])}
                  />
                </label>
              </div>
            </div>
            <div className="bottom">
              <form onSubmit={handleRegister} className="bottomBox">
                <input
                  type="text"
                  placeholder="Username"
                  id="username"
                  className="registerInput"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  className="registerInput"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  className="registerInput"
                  minLength={6}
                  required
                />
                {/* <input
                  type="password"
                  placeholder="Confirm Password"
                  id="confirmPassword"
                  className="registerInput"
                  required
                /> */}
                <button type="submit" className="registerButton">
                  Sign up
                </button>
                <Link to="/login">
                  <button className="loginRegisterButton">
                    Log into Account
                  </button>
                </Link>
                {error && <span>Something went wrong</span>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
