import React from "react";
import { RiPencilFill, RiSettings5Fill } from "react-icons/ri";
import "./Profile.css";

function Profile({ profileImgSrc, userNickname, changeInfoOn, changeNicknameOn }) {
  return (
    <div className="Profile">
      <div className="Profile-content">
        <img 
          className="Profile-img"
          src={profileImgSrc} 
          alt="" 
        />
        <div className="Profile-text">
          {userNickname}
          <RiPencilFill className="Profile-nickname-icon" size="30px" color="white" onClick={() => changeNicknameOn()}/>
        </div>
      </div>
      <div className="Profile-text">
        회원 정보 변경
        <RiSettings5Fill className="Profile-info-icon" size="30px" color="#FFD644" onClick={() => changeInfoOn()}/>
      </div>
    </div>
  )
}

export default Profile;