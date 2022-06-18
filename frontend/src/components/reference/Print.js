import React from "react";

function Print() {
  return(
  <div>
    <h1 align="left">입력 출력</h1>
    <hr></hr>
    <h3 align="left">입력 출력</h3>
    <p align="left">사용자가 프로그램과 대화하기 위해서는 사용자와 프로그램 사이에 입력 출력을 담당하는 수단이 필요합니다.</p>
    <p align="left">누리에서 사용하는 입력 출력문은 다음과 같습니다.</p>
    <p align="left">- 정수입력()</p>
    <p align="left">- 출력()</p>
    <hr></hr>
      <h4 align="left">정수입력()</h4>
      <p align="left">정수입력() 기능은 '입력해요'안에 있습니다.</p>
      <p align="left">입력해요.을 사용해서 불러줍니다.</p>
      <p align="left">아래는 정수입력 기능을 사용하는 예제 입니다.</p>
      <p align="left">- 변수 = 입력해요.정수입력()</p>
    <hr></hr>
      <h4 align="left">출력()</h4>
      <p align="left">출력() 기능은 ()안에 출력할 내용을 적어 줍니다.</p>
      <p align="left">아래는 출력 기능을 사용하는 예제 입니다.</p>
      <p align="left">- 변수 = 출력("안녕 누리")</p>
  </div>
  )
}

export default Print