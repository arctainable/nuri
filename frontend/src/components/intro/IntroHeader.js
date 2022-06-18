import React from "react";
import styled from "@emotion/styled";

function IntroHeader({ text, alignItems }) {

  const textList = text.split("\n");

  const Whole = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${alignItems};
    width: 80%;
  `

  const Title = styled.p`
    margin: 0px;
    font-size: 20px;
    font-weight: bold;
  `

  const Content = styled.p`
    margin: 10px 0px 0px;
  `

  return (
    <Whole>
      <Title>{textList[0]}</Title>
      {textList.slice(1).map((textItem, idx) => {
        return <Content key={idx}>{textItem}</Content>
      })}
    </Whole>
  )
}

export default IntroHeader;