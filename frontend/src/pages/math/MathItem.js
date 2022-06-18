import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MathProblem from "../../components/math/MathProblem";
import MathIde from "../../components/math/MathIde";
import AnswerModal from "../../components/math/AnswerModal";
import Answer from "../../components/math/Answer";
import { GetAllMath } from "../../components/math/MathAxios";
import "./MathItem.css";

function MathItem() {

  const params = useParams().id;
  const [mathData, setMathData] = useState();
  const [toggle, setToggle] = useState(true);
  const [theme, setTheme] = useState("vs-light");
  const [ansModalShow, setAnsModalShow] = useState(false);
  const [ansShow, setAnsShow] = useState(false);

  function toggleClick(){
    setToggle(!toggle);
    if(toggle){
      setTheme("vs-dark");
    }else{
      setTheme("vs-light");
    }
  }

  function ansModalOn() {
    setAnsModalShow(true);
  }

  function ansModalOff() {
    setAnsModalShow(false);
  }

  function ansOn() {
    setAnsShow(true);
    setAnsModalShow(false);
  }

  function ansOff() {
    setAnsShow(false);
    setAnsModalShow(false);
  }

  useEffect(() => {
    GetAllMath()
    .then((response) => {
      console.log("수학 문제 가져오기 성공", response.data)
      setMathData(response.data)
    })
    .catch(() => {
      console.log("수학 문제 가져오기 실패");
    })
  }, [])

  return (
    <div className="MathItem">
      {mathData && 
        <MathProblem 
          problemData={mathData[params]} 
          toggle={toggle}
          toggleClick={toggleClick} 
          ansModalOn={ansModalOn}
        />
      }
      {mathData && <MathIde theme={theme} toggle={toggle} problemData={mathData[params]}/>}
      {ansModalShow && <AnswerModal ansModalOff={ansModalOff} ansOn={ansOn} />}
      {ansShow && <Answer theme={theme} toggle={toggle} problemData={mathData[params]} ansOff={ansOff}/>}
    </div>
  )
}

export default MathItem;