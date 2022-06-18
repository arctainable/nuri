import React from "react";

function Type() {
  return (
  <div>
    <h1 align="left">기본타입</h1>
    <hr></hr>
    <h3 align="left">기본 타입(primitive type)</h3>
    <p align="left">타입(data type)은 해당 데이터가 메모리에 어떻게 저장되고, 프로그램에서 어떻게 처리되어야 하는지를 알려주는 역할을 합니다.</p>
    <p align="left">누리에서는 여러 형태의 타입을 미리 정의하여 제공하고 있는데, 이것을 기본 타입(primitive type)이라고 합니다.</p>
    <p align="left">누리의 기본 타입은 모두 4종류가 제공되며, 크게는 정수형, 소수형, 문자형 그리고 논리형 타입으로 나눌 수 있습니다.</p>
    <hr></hr>
    <h3 align="left">정수형 타입</h3>
    <p align="left">누리에서 정수란 부호를 가지고 있으며, 소수 부분이 없는 수를 의미 합니다.</p>
    <p align="left">누리의 기본 타입중 정수를 나타내는 타입은 다음과 같습니다.</p>
    <p align="left">- 정수</p>
    <hr></hr>
    <h3 align="left">소수형 타입</h3>
    <p align="left">누리에서 소수란 소수부가 있는 수를 가리키며, 정수보다 훨씬 더 넓은 표현 범위를 가집니다.</p>
    <p align="left">누리의 기본 타입 중 소수를 나타내는 타입은 다음과 같습니다.</p>
    <p align="left">- 소수</p>
    <hr></hr>
    <h3 align="left">문자형 타입(String 클래스)</h3>
    <p align="left">누리에서 문자형 데이터란 문자를 표현할 수 있는 타입을 의미 합니다.</p>
    <p align="left">누리의 기본 타입 중 문자를 나타내는 타입은 다음과 같습니다.</p>
    <div className="reference-contents">
      <p align="left">- 문자</p>
      <hr></hr>
      <h3 align="left">판별형 타입</h3>
      <p align="left">논리형은 참(true)이나 거짓(false) 중 한 가지 값만을 가질 수 있는 불리언 타입을 의미합니다.</p>
      <p align="left">누리의 기본 타입 중 논리형 타입은 다음과 같습니다.</p>
      <p align="left">- 참거짓</p>
    </div>
  </div>
  )
}

export default Type