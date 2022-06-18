import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { addViews } from "../game/GameAxios";
import { AiFillEye } from 'react-icons/ai';

function CodeList({ codeData }) {

  const navigate = useNavigate();

  function imgSrc(mathgameId) {

    if (mathgameId < 100) {
      return `math${mathgameId}thumbnail.png`;
    } else if (mathgameId === 100) {
      return "cardconnectgamethumbnail.png";
    } else if (mathgameId === 101) {
      return "updowngamethumbnail.png";
    } else if (mathgameId === 102) {
      return "finddifferentgamethumbnail.png";
    } else {
      return "nurirang_carousel1.JPG";
    }
  }

  function moveMathGame(mathgameId, code) {

    if (mathgameId < 100) {
      addViews(mathgameId)
      navigate(`/math/${mathgameId - 1}`, { state: code});
    } else if (mathgameId <= 102) {
      addViews(mathgameId)
      navigate(`/game/${mathgameId - 100}`);
    } else {
      navigate("/ide", { state: code});
    }
  }

  function date(createdData) {
    return `${createdData.slice(0, 4)}-${createdData.slice(5, 7)}-${createdData.slice(8, 10)}`
  }

  const CodeSet = styled.ul`
    width: 100%;
    display: flex;
    row-gap: 20px;
    padding-left: 0px;
    align-items: flex-start;
    column-gap: 2%;
    flex-wrap: wrap;
  `

  const CodeItem = styled.li`
    box-sizing: border-box;
    width: 32%;
    height: 200px;
    border-radius: 20px;
    border-style: solid;
    list-style: none;
    padding-left: 0px;
    transition: all 0.1s;
    &:hover {
      cursor: pointer;
      transform: translate(0%, -10px);
    }
    @media (max-width: 500px) {
      width: 100%
    }
  `
  
  const CodeImg = styled.img`
    box-sizing: border-box;
    padding: 20px 10px;
    width: 100%;
    height: 140px;
    border-style: none none solid;
    border-width: 2px;
  `

  const CodeContent = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    display: flex;
    padding: 0% 5%;
    justify-content: space-between;
    align-items: center;
  `

  const CodeButton = styled.div`
    height: 25px;
    display: flex;
    align-items: center;
    column-gap: 10px;
    font-weight: bold;
  `

  return (
    <CodeSet>
      {codeData.map(( code ) => {
        return (
          <CodeItem key={code.title} onClick={() => moveMathGame(code.mathgameId, code.code)}>
            <CodeImg alt="게임/문제 썸네일 이미지" src={process.env.PUBLIC_URL + `/img/${imgSrc(code.mathgameId)}`}/>
            <CodeContent>
              <CodeButton>{code.title}</CodeButton>
              {code.mathgameId 
                ? 
                <CodeButton><AiFillEye size="25px" />{code.views}</CodeButton> 
                : 
                <CodeButton>작성시간 : {date(code.createdAt)}</CodeButton>
              }
            </CodeContent>
          </CodeItem>
        )
      })}
    </CodeSet>
  )
}

export default CodeList;