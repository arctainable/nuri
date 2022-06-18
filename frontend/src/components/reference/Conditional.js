import React from "react";

function Conditional() {
  return(
  <div>
    <h1 align="left">조건문</h1>
    <hr></hr>
    <h3 align="left">조건문(conditional)</h3>
    <p align="left">조건문은 주어진 조건식의 결과에 따라 별도의 명령을 수행하도록 제어하는 명령문입니다.</p>
    <p align="left">누리에서 사용하는 조건문의 형태는 다음과 같습니다.</p>
    <p align="left">- 만약</p>
    <p align="left">- 만약/아니면</p>
    <p align="left">- 상황</p>
    <hr></hr>
    <h4 align="left">만약</h4>
    <p align="left">만약 문은 조건식의 결과가 참(true)이면 주어진 명령문을 실행하며, 거짓(false)이면 아무것도 실행하지 않습니다.</p>
    <p align="left">누리에서 만약 문의 문법은 다음과 같습니다.</p>
    <p align="left">만약(조건식)&#123;</p>
    <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;조건식의 결과가 참일 때 실행하고자 하는 명령문;</p>
    <p align="left">	&#125;</p>
    <hr></hr>
    <h4 align="left">만약/아니면</h4>
    <p align="left">만약/아니면 문은 조건식의 결과가 참(true)이면 주어진 명령문을 실행하며, 거짓(false)이면 아니면 명령문을 실행 합니다.</p>
    <p align="left">누리에서 만약/아니면 문의 문법은 다음과 같습니다.</p>
    <div className="reference-contents">
    <p align="left">만약(조건식)&#123;</p>
    <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;조건식의 결과가 참일 때 실행하고자 하는 명령문;</p>
    <p align="left">	&#125;아니면&#123;</p>
    <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;조건식의 결과가 거짓일 때 실행하고자 하는 명령문;</p>
    <p align="left">	&#125;</p>
    <hr></hr>
    <h4 align="left">상황</h4>
    <p align="left">상황문은 만약/아니면 문과 마찬가지로 주어진 조건 값의 결과에 따라 프로그램이 다른 명령을 수행하도록 하는 조건문 입니다.</p>
    <p align="left">상황문은 만약/아니면 문보다 읽기가 편하며 속도 또한 빠릅니다.</p>
    <p align="left">누리에서 상황문의 문법은 다음과 같습니다.</p>
    <p align="left">상황(값)&#123;</p>
    <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;선택 값:</p>
    <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;명령문;</p>
    <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;멈춤;</p>
    <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;선택 값:</p>
    <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;명령문;</p>
    <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;멈춤;</p>
    <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;기본:</p>
    <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;조건이 어떤 선택에도 해당하지 않을때 실행할 명령문;</p>
    <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;멈춤;</p>
    <p align="left">	&#125;</p>
    </div>
  </div>
  )
}

export default Conditional