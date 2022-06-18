import React from "react";

function Math() {
  return(
  <div>
    <h1 align="left">수학문</h1>
    <hr></hr>
    <h3 align="left">수학문</h3>
    <p align="left">누리에서 수학문이란 수학에서 자주 사용하는 문법을 미리 구현해놓은 것입니다.</p>
    <p align="left">누리에서 제공 하는 수학문은 다음과 같습니다.</p>
    <p align="left">- 무작위</p>
    <p align="left">- 최대</p>
    <p align="left">- 최소</p>
    <hr></hr>
    <h4 align="left">무작위</h4>
    <p align="left">무작위 기능은 0.0 ~ 1.0 미만 사이의 값을 반환 해줍니다.</p>
    <p align="left">무작위 기능을 응용하면 모든 무작위수를 뽑아낼 수 있습니다.</p>
    <p align="left">아래는 무작위 기능을 응용해 1부터 99까지 수를 무작위로 뽑아 내는 예제 입니다.</p>
    <p align="left">- 무작위()*99+1</p>
    <hr></hr>
    <h4 align="left">최대</h4>
    <p align="left">최대 기능은 2수 중에 큰 값을 반환 해줍니다.</p>
    <p align="left">아래는 최대 기능을 사용하는 예제 입니다.</p>
    <p align="left">- 최대(2,3)</p>
    <div className="reference-contents">
      <hr></hr>
      <h4 align="left">최소</h4>
      <p align="left">최소 기능은 2수 중에 작은 값을 반환 해줍니다.</p>
      <p align="left">아래는 최소 기능을 사용하는 예제 입니다.</p>
      <p align="left">- 최소(2,3)</p>
      <hr></hr>
    </div>

  </div>
  )
}

export default Math