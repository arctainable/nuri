import React from "react";
import CodeList from "./CodeList";
import "./Record.css";

function Record({ codeData, codeIdx, setCodeIdx }) {

  const codeArray = [
    {id: 0, title: "도전한 문제"},
    {id: 1, title: "해결한 문제"},
    {id: 2, title: "도전한 게임"},
    {id: 3, title: "해결한 게임"},
    {id: 4, title: "혼자 연습",},
  ]

  function changeCodeData(idx) {
    window.scrollTo({top: 0})
    setCodeIdx(idx);
  }

  return (
    <div className="Record">
      <div className="Record-tag-group">
        {codeArray.map((codeEle, idx) => {
          return (
          <div 
            key={codeEle.id} 
            className={codeIdx === codeEle.id ? "Record-tag-on" : "Record-tag"} 
            onClick={() => changeCodeData(codeEle.id)}
          >
            {codeEle.title} {codeData[idx].length}
          </div>)
        })}
      </div>
      <CodeList codeData={codeData[codeIdx]} />
    </div>
  )
}

export default Record;