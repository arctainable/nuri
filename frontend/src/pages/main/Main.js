import React from "react";
import TopCarousel from "../../components/main/TopCarousel";
import MiddleIntro from "../../components/main/MiddleIntro";
import GameList from "../../components/game/GameList";
import MathList from "../../components/math/MathList";
import Nurirang from "../../components/main/Nurirang";
import { useNavigate } from "react-router-dom";
import { FcPlus } from "react-icons/fc";


import "./Main.css"

function Main() {

  const navigate = useNavigate();

  return (
    <div className="MainContainer">
      <Nurirang />
      <TopCarousel />
      <MiddleIntro />
      <div className="Contents-title">
        <h2>누리랑 게임</h2>
        <button onClick={() => { navigate("/game") }}>
          <div style={{display: "flex", alignItems: "center"}} className="MoreButton">
            <FcPlus size="20" /> 더 보기
          </div>
        </button>
      </div>
      <GameList />
      <div className="Contents-title">
        <h2>누리랑 수학문제</h2>
        <button onClick={() => { navigate("/math") }}>
          <div style={{display: "flex", alignItems: "center"}} className="MoreButton">
            <FcPlus size="20" /> 더 보기
          </div>
        </button>
      </div>
      <MathList />
    </div>
  )
}

export default Main