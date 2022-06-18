import React from "react";
import "./InputNickname.css";

function InputNickname({ nickname, setNickname, nicknameMessage }) {

  function inputChange(event) {
    event.preventDefault();
    setNickname(event.target.value.replace(" ", ""));
  }

  return (
    <div className="InputNickname">
      <input 
        className="InputNickname-input" 
        value={nickname} 
        onChange={(event) => inputChange(event)}
      />
      <div className="InputNickname-message">{ nicknameMessage }</div>
    </div>
  )
}

export default InputNickname;