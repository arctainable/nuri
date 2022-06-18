import React from "react";
import Editor from "@monaco-editor/react";
import { MdClose } from "react-icons/md";
import "./Answer.css";

function Answer({ theme, toggle, problemData, ansOff }) {

  return (
    <div className="Answer-bg">
      <div className={toggle ? "Answer" : "Answer-dark"}>
        <div className="Answer-header">
          <div className="Answer-header-title">{problemData.title} 모범답안</div>
          <MdClose className="Answer-header-icon" size="30px" onClick={() => ansOff()}/>
        </div>
        <Editor
          id="nuriCode"
          height="85%"
          defaultLanguage="java"
          defaultValue=""
          theme={theme}
          value={problemData.codes[0].code}
        />
      </div>
    </div>
  )
}

export default Answer;