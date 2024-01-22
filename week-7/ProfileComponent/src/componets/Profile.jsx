import React from "react";
import "./Profile.css";

const Profile = ({name, city, followers, likes, photos, profileImg,}) => {

  return (
    <div>
      <div id="main-container">
        <div id="main">
          <div id="top">
            <img
              id="profile-Img"
              src={profileImg}
              alt=""
            />
          </div>
          <div id="bottom">
            <div id="name" className="flex">
              <h2>{name}</h2>
              <h3>{city}</h3>
            </div>
            <div id="details">
              <div className="flex">
                <h3>{followers}K</h3>
                <h4>Followers</h4>
              </div>
              <div className="flex">
                <h3>{likes}K</h3>
                <h4>Likes</h4>
              </div>
              <div className="flex">
                <h3>{photos}K</h3>
                <h4>Photos</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
