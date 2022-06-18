import React from "react";
import styled from "@emotion/styled";

function IntroMascot({ content }) {

  const Mascot = styled.div`
    padding-bottom: 40px;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `

  const Name = styled.div`
    align-self: flex-start;
    font-size: 20px;
    font-weight: bold;
  `

  const Img = styled.img`
    align-self: center;
    width: 500px;
    height: 500px;
  `

  return (
    <Mascot>
      <Name>누리의 마스코트 '{content.name}'</Name>
      <Img alt="마스코트" src={process.env.PUBLIC_URL + content.img}/>
    </Mascot>
  )
}

export default IntroMascot;