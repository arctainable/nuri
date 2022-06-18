import React from "react";
import Background from "../../components/intro/Background";
import IntroHeader from "../../components/intro/IntroHeader";
import IntroMain from "../../components/intro/IntroMain";
import IntroContent from "../../components/intro/IntroContent";
import IntroIde from "../../components/intro/IntroIde";
import IntroMascot from "../../components/intro/IntroMascot";
import "./Intro.css";

function Intro() {

  const text1 = `우리의 자랑스러운 '한글'

  전세계에서 우수함을 인정하는 한글의 자음은 사람의 발성기관을 본떠 만들어졌고,
  모음은 세계의 근간인 천지인을 본떠 하늘, 땅, 사람을 담고 있습니다.

  세계에서 유일하게 계획적, 독창적으로 만들어진 문자이며
  배우기가 쉬워 문맹자가 생기지 않습니다
  한글은 세계에서 가장 뛰어난 문자로 평가받고 있습니다.`

  const text2 = `프로그래밍 언어로서의 '한글'

  2015 개정교육과정에 의해 2018년부터
  초중고등학교에서 코딩교육을 전면적으로 시행하고 있습니다.

  하지만, 아이들이 프로그래밍 언어를 배우기엔 언어 자체가 '영어'이기 때문에 어려움이 따릅니다.
  블록 코딩에서 텍스트 코딩으로 넘어가는 시점에 있어,
  '한글' 프로그래밍은 아이들에게 더 쉽고 재미있는 프로그래밍을 경험하게 해줍니다.`

  const text3 = `누리는 프로그래밍 학습을
  이해하기 쉽고 다가가기 쉬운
  '한글'로 할 수 있습니다
  `

  const content2 = {
    text: '누리 문법을 학습하고, 게임과 수학 문제를 통해 쉽게 코딩을 배울 수 있습니다',
    img: ["/img/nurirang_carousel2.png", "/img/updownproblem.png", "/img/nurirang_carousel3.png"],
    imgW: "32%",
  }

  const mascot = {
    name: "누리랑",
    img: "/img/nurirang_carousel1.png",
  }

  return (
    <div className="Intro">
      <Background />
      <IntroHeader text={text1} alignItems="flex-start"/>
      <IntroHeader text={text2} alignItems="flex-end"/>
      <IntroMain text={text3}/>
      <IntroIde />
      <IntroContent content={content2}/>
      <IntroMascot content={mascot}/>
    </div>
  )
}

export default Intro