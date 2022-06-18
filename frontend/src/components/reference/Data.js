import React from "react";

function Data() {
  return(
  <div>
    <h1 align="left">자료구조</h1>
    <hr></hr>
    <h3 align="left">자료구조(data structure)</h3>
    <p align="left">자료구조는 효율적인 접근 및 수정을 가능케 하는 자료의 조직, 관리, 저장을 의미</p>
    <p align="left">누리에서 제공하는 자료구조는 다음과 같습니다.</p>
    <hr></hr>
    <h4 align="left">1. 쌓기</h4>
    <p align="left">쌓기 구조는 나중에 들어온 데이터가 먼저 나오는 자료구조 입니다.</p>
    <p align="left">쌓아넣기()를 통해 데이터를 저장하고 빼기()를 통해 가장 나중에 들어온 데이터를 빼옵니다.</p>
    <br></br>
    <p align="left">다음 예제는 쌓기를 이용해 데이터를 넣고 빼는 과정을 보여줍니다.</p>
    <p align="left">- 쌓기 &lt;정수&gt;&nbsp;&nbsp;쌓아요;</p>
    <p align="left">- 쌓아요.쌓아넣기(1);</p>
    <p align="left">- 쌓아요.빼기();</p>
    <hr></hr>
    <h4 align="left">1. 줄세우기</h4>
    <p align="left">줄세우기 구조는 먼저 들어온 데이터가 먼저 나오는 자료구조 입니다.</p>
    <p align="left">세우기()를 통해 데이터를 저장하고 줄빼기()를 통해 가장 먼저 들어온 데이터를 빼옵니다.</p>
    <br></br>
    <div className="reference-contents">
      <p align="left">다음 예제는 줄세우기를 이용해 데이터를 넣고 빼는 과정을 보여줍니다.</p>
      <p align="left">- 줄세우기 &lt;정수&gt;&nbsp;&nbsp;줄세워요;</p>
      <p align="left">- 쌓아요.세우기(1);</p>
      <p align="left">- 쌓아요.줄빼기();</p>
    </div>

  </div>
  )
}

export default Data