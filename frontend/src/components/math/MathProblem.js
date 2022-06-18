import React from "react";
import "./MathProblem.css";

function MathProblem({ problemData, toggle, toggleClick, ansModalOn }) {

  const problemContent = problemData.content.split("\n");

  return (
    <div className="MathProblem">
      <div className="MathProblem-header">
        <div style={{ textDecoration: "underLine 5px"}}>{problemData.title}</div>
        <div className="MathProblem-button-group">
          <button 
            className={"MathProblem-theme-button " + (toggle ? "toggle-off" : "")} 
            onClick={() => toggleClick()}
          >
            {toggle ? "다크모드" : "일반모드"}
          </button>
          <button 
            className="MathProblem-header-button" 
            onClick={() => ansModalOn()}
          >
            모범답안
          </button>
        </div>
      </div>
      <div className={"MathProblem-content " + (toggle ? "" : "toggle-off")}>
        {problemContent.map((ele, idx) => {
          return <div key={idx}>{ele}</div>
        })}
      </div>
    </div>
  )
}

export default MathProblem;