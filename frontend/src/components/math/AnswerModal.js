import React from "react";
import "./AnswerModal.css";

function AnswerModal({ ansModalOff, ansOn }) {
  return (
    <div className="AnswerModal-bg">
      <div className="AnswerModal">
        <h2 style={{ margin: "0px" }}>누리</h2>
        <div className="AnswerModal-content">
          <div>문제풀이에서 가장 중요한 것은</div>
          <div>문제를 해결하는 것보다 과정입니다.</div>
          <div>모범답안을 보기 전에 무엇을 모르는지</div>
          <div>어디서 막히는지를 구체적으로 충분하게</div>
          <div>고민하고 확인하시기를 권장합니다.</div>
        </div>
        <div className="AnswerModal-button-group">
          <button className="AnswerModal-button-cancel" onClick={() => ansModalOff()}>돌아가기</button>
          <button className="AnswerModal-button" onClick={() => ansOn()}>답안보기</button>
        </div>
      </div>
    </div>
  )
}

export default AnswerModal;