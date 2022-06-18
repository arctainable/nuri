import React, { useEffect, useState } from "react";
import { ImSpinner6 } from "react-icons/im";
import "./Result.css";

function Result({ time, gameData, userNickname, rankData, restartGame, moveAllGames }) {
  const [rankIdx, setRankIdx] = useState(-1);

  function calcTime(inputTime) {
    const totalTime = inputTime * 100
    const minute = parseInt(totalTime / 6000);
    const sec = parseInt((totalTime / 100) % 60);
    const milliSec = parseInt(totalTime % 100);
    return [minute, sec, milliSec]
  }

  function checkRank() {
    const idx = rankData.findIndex((rank) => rank.userNickname === userNickname);
    setRankIdx(idx + 1)
  }

  useEffect(() => {
    checkRank();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rankData])

  return (
    <div className="Result-bg">
      <div className="Result">
        <h1>{gameData.title} 클리어!!</h1>
        <div>내 클리어 타임 : {calcTime(time)[0]}분 {calcTime(time)[1]}초 {calcTime(time)[2]}</div>
        {rankData.length === 0
        ? <div className="Result-rank-loading">
          <ImSpinner6 className="Result-rank-loading-icon" size="150px" color="#FFD644"/>
        </div> 
        : <ul className="Result-rank-list">
          {rankData.map((rank, idx) => {
            return (
              <li className={idx + 1 === rankIdx ? "Result-rank-on" : "Result-rank"} key={idx}>
                <div className="Result-rank-num">{idx + 1}</div>
                <div className="Result-rank-name">{rank.userNickname}</div>
                <div>{calcTime(rank.time)[0]}분 {calcTime(rank.time)[1]}초 {calcTime(rank.time)[2]}</div>
              </li>
            )
          })}
        </ul>}
        <div className="Result-button-group">
          <button className="Result-button" onClick={() => moveAllGames()}>다른 게임 하기</button>
          <button className="Result-button" onClick={() => restartGame()}>다시하기</button>
        </div>
      </div>
    </div>
  )
}

export default Result;