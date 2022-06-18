import React, { useEffect, useState, useRef } from "react";
import "./Timer.css";

function Timer({ setTime, data, timerStart, timerEnd }) {

  const [minute, setMinute] = useState(0);
  const [sec, setSec] = useState(0);
  const [milliSec, setMilliSec] = useState(0);
  const unit = useRef(0);
  const timer = useRef();

  useEffect(() => {
    if (timerStart) {
      timer.current = setInterval(() => {
        unit.current += 1
        const newMin = parseInt(unit.current / 6000)
        const newSec = parseInt((unit.current / 100) % 60);
        const newMilli = unit.current % 100;
        setMinute(newMin);
        setSec(newSec);
        setMilliSec(newMilli);
        setTime(unit.current / 100);
      }, 10);
      return () => clearInterval(timer.current);
    } else {
      unit.current = 0
    }
  }, [timerStart, setTime]);

  function addZero(time) {
    if (time < 10) {
      return `0${time}`
    } else {
      return time
    }
  }

  useEffect(() => {
    if (unit.current >= 30000) {
      clearInterval(timer.current)
    }
  }, [milliSec])

  if (timerEnd) {
    clearInterval(timer.current);
  }

  return (
    <div className="Timer">
      <div className="Timer-header">{data.title}</div>
      <div className="Timer-header">{addZero(minute)} 분 {addZero(sec)} 초 {addZero(milliSec)}</div>
    </div>
  )
};

export default Timer;