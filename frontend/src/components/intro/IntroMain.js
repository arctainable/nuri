import React from "react";
import styled from "@emotion/styled";

function IntroMain({ text }) {

  const textList = text.split("\n");

  const Whole = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
  `

  const Item = styled.div`
    align-self: ${props => props.align};
    margin-top: 10px;
    font-size: 30px;
    font-weight: bold;
  `

  return (
    <Whole>
      <Item align="flex-start">{textList[0]}</Item>
      <Item align="center">{textList[1]}</Item>
      <Item align="flex-end">{textList[2]}</Item>
    </Whole>
  )
}

export default IntroMain;