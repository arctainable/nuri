import React, { useEffect, useState, useRef } from "react";
import "./LinkGame.css";
import LinkGameItem from "./LinkGameItem";

function LinkGame({ start, finishGame }) {
  const pairArray = [
    {id: 0, pair: 0, title: "정수"},
    {id: 1, pair: 0, title: "int"},
    {id: 2, pair: 1, title: "소수"},
    {id: 3, pair: 1, title: "double"},
    {id: 4, pair: 2, title: "최대"},
    {id: 5, pair: 2, title: "max"},
    {id: 6, pair: 3, title: "최소"},
    {id: 7, pair: 3, title: "min"},
    {id: 8, pair: 4, title: "구간반복"},
    {id: 9, pair: 4, title: "for"},
    {id: 10, pair: 5, title: "조건반복"},
    {id: 11, pair: 5, title: "while"},
    {id: 12, pair: 6, title: "만약 / 아니면"},
    {id: 13, pair: 6, title: "if / else"},
    {id: 14, pair: 7, title: "무작위"},
    {id: 15, pair: 7, title: "random"},
  ]

  
  const [selected, setSelected] = useState(new Array(16).fill(false));
  const [gameArray, setGameArray] = useState(pairArray);
  const count = useRef(0);
  const beforeId = useRef(-1);
  const beforePair = useRef(-1);

  function selectCard(card) {
    count.current += 1

    if (count.current > 2) {
      // 빠르게 3개를 연속으로 누르면 setTimeout 함수가 실행되기 전에 뒤집어지는 문제가 발생
      // 따라서 count.current 가 2보다 크면 동작하지 않게 제어
      return
    }

    if (count.current === 1) {
      beforeId.current = card.id
      beforePair.current = card.pair
    }

    const newSelected = selected.map((ele, idx) => {
      if (idx === card.id || ele) {
        return true
      } else {
        return false
      }
    })
    setSelected(newSelected);

    if (count.current === 2) {
      setTimeout(() => {
        if (beforePair.current !== card.pair) {
          const newSelected = selected.map((ele, idx) => {
            if (idx === card.id || idx === beforeId.current) {
              return false
            } else {
              return ele
            }
          })
          setSelected(newSelected);
        }
        count.current = 0
        beforePair.current = -1
        beforeId.current = -1
      }, 500)
    }

    const allSelected = newSelected.every((ele) => { return ele })
    if (allSelected) {
      finishGame();
    }
  } 

  function newGame() {
    setGameArray(pairArray.sort(() => 0.5 - Math.random()));
    setSelected(new Array(16).fill(false));
    count.current = 0
    beforePair.current = -1
    beforeId.current = -1
  }

  useEffect(() => {
    newGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start])

  return (
    <div className="LinkGame">
      <ul className="LinkGame-card-group">
        {gameArray.map((pairEle) => {
          return <LinkGameItem 
          key={pairEle.id} 
          value={pairEle} 
          selectCard={selectCard}
          selected={selected}
          />
        })}
      </ul>
    </div>
  )
}

export default LinkGame;