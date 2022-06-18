import React from "react";

function Array() {
  return(
  <div>
    <h1 align="left">배열, 묶음</h1>
    <hr></hr>
    <h3 align="left">배열(array)</h3>
    <p align="left">배열(array)은 같은 타입의 변수들로 이루어진 유한 집합으로 정의할 수 있습니다.</p>
    <p align="left">배열을 구성하는 각각의 값을 배열 요소(element)라고 하며, 배열에서의 위치를 가리키는 숫자를 인덱스(index)라고 합니다.</p>
    <p align="left">누리에서 인덱스는 언제나 0부터 시작하며, 0을 포함한 양의 정수만을 가질 수 있습니다.</p>
    <p align="left">배열은 같은 종류의 데이터를 많이 다뤄야 하는 경우에 사용할 수 있는 가장 기본적인 자료 구조입니다.</p>
    <p align="left">누리는 1차원 배열만 제공 합니다.</p>
    <br></br>
    <h3 align="left">1차원 배열</h3>
    <p align="left">1차원 배열은 가장 기본적인 배열로 다음과 같은 문법에 따라 선언합니다.</p>
    <p align="left">- (타입)들 배열이름</p>
    <p align="left">타입은 배열 요소로 저장되는 변수의 타입을 명시합니다</p>
    <br></br>
    <p align="left">다음 예제는 정수형 데이터를 3개 저장할 수 있는 배열을 선언하고 인덱스를 이용해 값을 초기화 합니다.</p>
    <p align="left">- 정수들 숫자[3]</p>
    <p align="left">- 숫자[0] = 10</p>
    <p align="left">- 숫자[1] = 22</p>
    <p align="left">- 숫자[2] = 30</p>
    
    <div className="reference-contents">
      <hr></hr>
      <h3 align="left">묶음</h3>
      <p align="left">묶음은 배열과 비슷하지만 삽입 삭제가 용의하며 크기를 정하지 않고 값을 자유롭게 넣을수 있다.</p>
      <p align="left">누리는 접근이 빠른 자바에 ArrayList 기능만 제공 한다.</p>
      <p align="left">묶음은 다음과 같은 문법에 따라 선언합니다.</p>
      <p align="left">- 묶음 &lt;타입&gt;&nbsp;&nbsp;묶어요;</p>
      <p align="left">타입은 묶음 요소로 저장되는 변수의 타입을 명시합니다</p>
      <br></br>
      <p align="left">다음 예제는 묶음을 선언하고 값을 넣고 빼는 방법을 보여줍니다.</p>
      <p align="left">- 묶음 &lt;정수&gt;&nbsp;&nbsp;묶어요;</p>
      <p align="left">- 묶어요.넣기(1);</p>
      <p align="left">- 묶어요.가져오기(0);</p>
    </div>
  </div>
  )
}

export default Array