import React from "react";

function Loop() {
  return(
  <div>
    <h1 align="left">반복문</h1>
    <hr></hr>
    <h3 align="left">반복문</h3>
    <p align="left">반복문이란 프로그램 내에서 똑같은 명령을 일정 횟수만큼 반복하여 수행하도록 제어하는 명령문입니다.</p>
    <p align="left">프로그램이 처리하는 대부분의 코드는 반복적인 형태가 많으므로, 가장 많이 사용되는 제어문 중 하나입니다.</p>
    <p align="left">- 구간반복</p>
    <p align="left">- 조건반복</p>
    <hr></hr>
    <h4 align="left">구간반복</h4>
    <p align="left">구간반복은 초기수부터 조건수까지 1씩 증가하며 반복 합니다.</p>
    <p align="left">누리에서 구간반복 문의 문법은 다음과 같습니다.</p>
    <p align="left">구간반복(정수=값,값)&#123;</p>
    <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;반복적으로 실행하고자 하는 명령문;</p>
    <p align="left">	&#125;</p>
    <hr></hr>
    <h4 align="left">조건반복</h4>
    <p align="left">조건반복은 특정 조건을 만족하면 계속해서 주어진 명령문을 반복 실행 합니다.</p>
    <p align="left">누리에서 조건반복 문의 문법은 다음과 같습니다.</p>
    <p align="left">조건반복(조건문)&#123;</p>
    <div className="reference-contents">
      <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;반복적으로 실행하고자 하는 명령문;</p>
      <p align="left">	&#125;</p>
    </div>
    
  </div>
  )
}

export default Loop