import React from "react";
import styled from "@emotion/styled";

function Background() {

  const letters = [
    {id: 0, value: "ㄱ", top: 0 , right: 100},
    {id: 1, value: "ㄴ", top: 30 , right: 20},
    {id: 2, value: "ㄷ", top: 60 , right: 80},
    {id: 3, value: "ㅏ", top: 90 , right: 20},
  ]

  const BackGroup = styled.div`
    position: absolute;
    right: 10%;
    top: 40px;
  `

  const BackItem = styled.div`
    position: absolute;
    font-size: 70px;
    line-height: 70px;
    top: ${props => props.top}px;
    right: ${props => props.right}px;
    &:after {
      position: absolute;
      content: "";
      width: 120px;
      height: 120px;
      border-radius: 50%;
      transform: translate(-80%, -10%);
      opacity: 20%;
      background-color: #FFD644;
    }
  `

  return (
    <BackGroup>
      {letters.map((letter) => {
        return (
          <BackItem key={letter.id} top={letter.top} right={letter.right}>
            {letter.value}
          </BackItem>
        )
      })}
    </BackGroup>
  )
}

export default Background;