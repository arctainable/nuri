import React, { useRef } from "react";
import InputNickname from "./InputNickname";
import "./ChangeInfo.css";
import SelectImg from "./SelectImg";

function ChangeInfo({ 
  changeInfoShow, 
  nickname,
  tempImg,
  tempBackImg,
  setNickname,
  setTempImg,
  setTempBackImg,
  changeInfoDone, 
  changeInfoOff,
  nicknameMessage,
}) {
  const profileImgRef = useRef();
  const backImgRef = useRef();

  function selectProfileImg() {
    profileImgRef.current.click();
  }

  function selectBackImg() {
    backImgRef.current.click();
  }

  function changeProfileImg(event) {
    if (event.target.files[0]) {
      setTempImg(event.target.files[0])
    }
  }

  function changeBackImg(event) {
    if (event.target.files[0]) {
      setTempBackImg(event.target.files[0])
    }
  }

  return (
    <div className="ChangeInfo-bg" style={{ visibility: changeInfoShow ? "visible" : "hidden" }}>
      <div className="ChangeInfo">
        <div className="ChangeInfo-header">
          <button className="ChangeInfo-header-button" onClick={() => changeInfoOff()}>
            취소
          </button>
          <h2>회원 정보 수정</h2>
          <button className="ChangeInfo-header-button" onClick={() => changeInfoDone()}>
            수정
          </button>
        </div>
        <ul className="ChangeInfo-content-group">
          <SelectImg 
            type="프로필"
            tempImg={tempImg} 
            selectImg={selectProfileImg} 
            imgRef={profileImgRef}
            changeImg={changeProfileImg}
            imgWidth="120px"
            imgHeight="120px"
            imgBorderRadius="50%"
          />
          <li className="ChangeInfo-content-input">
            <div style={{ marginTop: "10px", marginBottom: "10px", fontWeight: "500" }}>닉네임</div>
            <InputNickname 
              nickname={nickname} 
              setNickname={setNickname} 
              nicknameMessage={nicknameMessage}
            />
            <div style={{ fontSize: "12px" }}>한글, 영어, 숫자로 이루어진 2 ~ 20자를 입력해 주세요</div>
          </li>
          <SelectImg
            type="배경"
            tempImg={tempBackImg} 
            selectImg={selectBackImg} 
            imgRef={backImgRef}
            changeImg={changeBackImg}
            imgWidth="100%"
            imgHeight="120px"
            imgBorderRadius="15px"
          />
        </ul>
      </div>
    </div>
  )
};

export default ChangeInfo;