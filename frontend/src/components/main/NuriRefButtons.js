import React from 'react';
import { Link } from "react-router-dom";
import "./NuriRefButtons.css"

function NuriRefButtons() {

  return (
  <div className="button-Contents">
    <Link to='/reference' state={{PathStep:0}} className="myButton"># 변수</Link>
    <Link to='/reference' state={{PathStep:1}} className="myButton"># 들여쓰기</Link>
    <Link to='/reference' state={{PathStep:2}} className="myButton"># 기본타입</Link>
    <Link to='/reference' state={{PathStep:3}} className="myButton"># 배열, 묶음</Link>
    <Link to='/reference' state={{PathStep:4}} className="myButton"># 자료구조</Link>
    <Link to='/reference' state={{PathStep:5}} className="myButton"># 조건문</Link>
    <Link to='/reference' state={{PathStep:6}} className="myButton"># 반복문</Link>
    <Link to='/reference' state={{PathStep:7}} className="myButton"># 수학식</Link>
    <Link to='/reference' state={{PathStep:8}} className="myButton"># 입력, 출력</Link>
  </div>
  )
}

export default NuriRefButtons;