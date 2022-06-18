import React from "react";
import "./Explain.css";

function Explain({ data, startGame, moveAllGames }) {

  const contentArray = data.content.split("\n");

  return (
    <div className="Explain-bg">
      <div className="Explain">
        <h1>{data.title}</h1>
        <img className="Explain-img" alt="게임 설명 gif / 이미지" src={process.env.PUBLIC_URL + data.img}/>
        <div>
          {contentArray.map((content, idx) => {
            return <div key={idx} >{content}</div>
          })}
        </div>
        <div className="Explain-button-group">
          <button className="Explain-button" onClick={() => moveAllGames()}>다른 게임 보기</button>
          <button className="Explain-button" onClick={() => startGame()}>시작하기</button>
        </div>
      </div>
    </div>
  )
};

export default Explain;