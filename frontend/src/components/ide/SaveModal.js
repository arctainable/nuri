import React, { useState } from "react";
import { SavePratice } from "./IdeAxios";
import "./SaveModal.css";

function SaveModal({ saveNuriCode, saveOff }) {

  const [message, setMessage] = useState("");
  const [codeTitle, setCodeTitle] = useState("");

  function inputTitle(event) {
    event.preventDefault();
    setCodeTitle(event.target.value);
  }

  function saveButton() {
    if (codeTitle.length === 0 || codeTitle.length > 10) {
      setMessage("제목은 1 ~ 10 자 이내로 입력해야 합니다")
      return
    }

    const practiceData = {
      code: saveNuriCode,
      title: codeTitle,
    }
    SavePratice(practiceData)
    .then(() => {
      console.log("연습 코드 저장 성공")
      saveOff()
    })
    .catch(() => {
      console.log("연습 코드 저장 실패")
    })
  }

  return (
    <div className="SaveModal-bg">
      <div className="SaveModal">
        <h3 style={{ margin: "0px" }}>제목을 입력하고 저장해 주세요</h3>
        <div>
          <input 
            className="SaveModal-input"
            type="text"
            value={codeTitle} 
            placeholder="제목을 입력하세요." 
            onChange={(event) => inputTitle(event)} 
          />
          <div className="SaveModal-input-message">{message}</div>
        </div>
        <div className="SaveModal-button-group">
          <button className="SaveModal-button" onClick={() => saveOff()}>돌아가기</button>
          <button className="SaveModal-button" onClick={() => saveButton()}>저장하기</button>
        </div>
      </div>
    </div>
  )
}

export default SaveModal;