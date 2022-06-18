import React from "react";
import "./ResultModal.css";

function ResultModal({ result, answerResult, setResultShow, setIsSuccess }) {

  const isSuccess = result === answerResult ? true : false;

  function cancelButton() {
    if (isSuccess) {
      setIsSuccess(true);
    } else {
      setIsSuccess(false);
    }
    setResultShow(false)
  }

  return (
    <div className="ResultModal-bg">
      <div className="ResultModal">
        <h3 style={{ margin: "0px" }}>{isSuccess ? "정답입니다!!!" : "오답입니다...."}</h3>
        <p style={{ margin: "0px", fontSize: "14px" }}>{isSuccess ? "저장 버튼을 눌러 지금 코드를 저장하세요" : "다시 한 번 풀어보세요"}</p>
        <button className="ResultModal-button-cancel" onClick={() => cancelButton()}>돌아가기</button>
      </div>
    </div>
  )
}

export default ResultModal;