import React from "react";
import "./mainContents.css";

function Variable() {
  return (
  <div>
    <h1 align="left">변수</h1>
    <hr></hr>
    <h3 align="left">변수(variable)</h3>
    <p align="left">변수(variable)란 데이터(data)를 저장하기 위해 프로그램에 의해 이름을 할당받은 메모리 공간을 의미합니다.</p>
    <p align="left">즉, 변수란 데이터(data)를 저장할 수 있는 메모리 공간을 의미하며, 이렇게 저장된 값은 변경될 수 있습니다.</p>
    <hr></hr>
    <p align="left">누리에서는 변수 이름을 짓는데 반드시 지켜야 하는 공통된 규칙이 있습니다.</p>
    <p align="left">누리에서 이름을 생성할 때에 반드시 지켜야 하는 규칙은 다음과 같습니다.</p>
    <br></br>
    <p align="left">1. 변수의 이름은 한글, 영문자(대소문자), 숫자, 언더스코어(_), 달러($)로만 구성할 수 있습니다.</p>
    <p align="left">2. 변수의 이름은 숫자로 시작할 수 없습니다.</p>
    <p align="left">3. 변수의 이름 사이에는 공백을 포함할 수 없습니다.</p>
    <p align="left">4. 변수의 이름으로 누리에서 미리 정의된 키워드(keyword)는 사용할 수 없습니다.</p>
    <hr></hr>
    <h3 align="left">변수의 종류</h3>
    <p align="left">숫자형 : 정수, 소수</p>
    <p align="left">문자형 : 문자열</p>
    <p align="left">판별형 : 참거짓</p>
    <hr></hr>
    <div className="reference-contents">
      <h3 align="left">변수의 선언</h3>
      <p align="left">타입 변수이름;</p>
    </div>

  </div>
  )
}

export default Variable