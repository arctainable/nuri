import React from "react";
import InputNickname from "./InputNickname";
import "./ChangeNickname.css";
import { MdClose } from "react-icons/md";

function ChangeNickname({ 
  nickname, 
  changeNicknameShow, 
  nicknameMessage,
  setNickname, 
  changeInfoDone, 
  changeInfoOff 
}) {

  return (
    <div className="ChangeNickname-bg" style={{ visibility: changeNicknameShow ? "visible" : "hidden" }}>
      <div className="ChangeNickname">
        <MdClose className="ChangeNickname-cancel-icon" size="30px" onClick={() => changeInfoOff()}/>
        <div style={{ fontSize: "20px", fontWeight: "bold" }}>닉네임 변경</div>
        <InputNickname 
          nickname={nickname} 
          setNickname={setNickname} 
          nicknameMessage={nicknameMessage}
        />
        <div>한글, 영어, 숫자로 이루어진 2 ~ 20자를 입력해 주세요</div>
        <button className="ChangeNickname-button" onClick={() => changeInfoDone()}>저장</button>
      </div>
    </div>
  )
}

export default ChangeNickname;