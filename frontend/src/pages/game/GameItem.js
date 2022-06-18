import React, { useEffect, useState } from "react";
import { useOutletContext, useParams, useNavigate } from "react-router-dom";
import Explain from "../../components/game/Explain";
import Result from "../../components/game/Result";
import Timer from "../../components/game/Timer";
import LinkGame from "../../components/game/LinkGame";
import WrongFindGame from "../../components/game/WrongFindGame";
import UpDown from "../../components/game/UpDown";
import { SaveRank, GetRank, SaveGame } from "../../components/game/GameAxios";
import "./GameItem.css";

function GameItem() {

  const { userNickname } = useOutletContext();
  const explainData = [
    { 
      id: 100, 
      title: "연결 게임", 
      img: "/img/cardconnectgamethumbnail.png", 
      content: "모든 짝이 맞게 카드를 뒤집어주세요!"
    },
    {
      id: 101, 
      title: "업다운 게임", 
      img: "/img/updowngamethumbnail.png", 
      content: `
      정수인 숫자 1~100 사이 중에서 누리랑이 마음 속으로 정한 숫자를 10번 안에 맞춰봐!
      (단, 출력 결과에 UP, DOWN 여부와 숫자를 예측하는 과정을 보여줘야 성공할 수 있어)
      `
    },
    { 
      id: 102, 
      title: "틀린 부분 찾기 게임", 
      img: "/img/finddifferentgamethumbnail.png", 
      content: `
      5개 과목에 점수를 입력 받아 평균을 구하고 평균에 따라 우수, 부족을 출력하는 코드 입니다
      누리 코드를 보고 자바 코드에서 틀린 부분을 찾아주세요!"`
      
    },
  ]

  const params = useParams().id;
  const navigate = useNavigate();
  const [start, setStart] = useState(0);
  const [time, setTime] = useState(0);
  const [timerStart, setTimerStart] = useState(false);
  const [timerEnd, setTimerEnd] = useState(false);
  const [explainShow, setExplainShow] = useState(true);
  const [resultShow, setResultShow] = useState(false);
  const [rankData, setRankData] = useState([]);

  function startGame() {
    setTimerStart(true);
    setExplainShow(false);
    saveGame(explainData[params].id, 0);
  }

  function finishGame() {
    setTimerStart(false);
    setTimerEnd(true);
    setResultShow(true);
    saveRank(explainData[params].id, time);
    saveGame(explainData[params].id, 1);
  }

  function restartGame() {
    setStart(start + 1);
    setTimerStart(true);
    setTimerEnd(false);
    setResultShow(false);
  }

  function moveAllGames() {
    navigate("/game");
    setExplainShow(true);
    setStart(0);
  }

  function saveRank(mathgameId, time) {
    const rankData = {
      mathgameId: mathgameId,
      time: time,
    }
    SaveRank(rankData)
    .then(() => {
      console.log("랭킹 저장 완료");
    })
    .then(() => {
      getRank(mathgameId);
    })
    .catch(() => {
      console.log("랭킹 저장 실패")
    })
  }

  function getRank(mathgameId) {
    GetRank(mathgameId)
    .then((response) => {
      console.log("랭킹 가져오기 완료", response.data);
      if (response.data.length <= 5) {
        const tempData = new Array(5 - response.data.length).fill({ userId: 0, userEmail: "----", time: 0 })
        setRankData(response.data.concat(tempData));
      } else {
        setRankData(response.data);
      }
    })
    .catch(() => {
      console.log("랭킹 가져오기 실패");
    })
  }

  function saveGame(mathgameId, status) {
    const data = {
      mathgameId: mathgameId,
      status: status,
    }
    SaveGame(data)
    .then(() => {
      console.log("도전/해결한 문제 등록 성공");
    })
    .catch(() => {
      console.log("도전/해결한 문제 등록 실패");
    })
  }

  useEffect(() => {
    if (localStorage.getItem("jwt") === null) {
      navigate("/user/login")
    }
  }, [navigate])

  return (
    <div className="GameItem">
      {explainShow && 
        <Explain 
          data={explainData[params]}
          startGame={startGame}
          moveAllGames={moveAllGames}
        />
      }
      {resultShow &&
        <Result
          time={time}
          rankData={rankData}
          userNickname={userNickname}
          gameData={explainData[params]}
          restartGame={restartGame}
          moveAllGames={moveAllGames}
        />
      }
      <Timer setTime={setTime} data={explainData[params]} timerStart={timerStart} timerEnd={timerEnd} />
      {params === "0" && <LinkGame start={start} finishGame={finishGame} />}
      {params === "1" && <UpDown start={start} finishGame={finishGame} />}
      {params === "2" && <WrongFindGame start={start} finishGame={finishGame} time={time}/>}

    </div>
  )
}

export default GameItem;