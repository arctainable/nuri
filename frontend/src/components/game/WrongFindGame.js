import React, { useEffect, useState, useRef } from "react";
import "./WrongFindGame.css";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";


function WrongFindGame({ start, finishGame, time }) {
    const nuriCode = "/img/nuriCode.png"
    const javaCode = "/img/javaCode.png"
    const [cnt, setCnt] = useState(0);
    const [q1, setQ1] = useState(false);
    const [q2, setQ2] = useState(false);
    const [q3, setQ3] = useState(false);
    const [q4, setQ4] = useState(false);
    const [q5, setQ5] = useState(false);
    const [check1, setCheck1] = useState({display:'none'});
    const [check2, setCheck2] = useState({display:'none'});
    const [check3, setCheck3] = useState({display:'none'});
    const [check4, setCheck4] = useState({display:'none'});
    const [check5, setCheck5] = useState({display:'none'});
    const [ans1, setAns1] = useState(null);
    const [ans2, setAns2] = useState(null);
    const [ans3, setAns3] = useState(null);
    const [ans4, setAns4] = useState(null);
    const [ans5, setAns5] = useState(null);
    const timer = useRef(null);
    // gameSound(BGM,1,2000);


    useEffect(() => {
        newGame();
    }, [start])

    function newGame() {
        setCnt(0);
        setQ1(false);
        setCheck1({display:'none'});
        setAns1({color:'black'});
        setQ2(false);
        setCheck2({display:'none'});
        setAns2({color:'black'});
        setQ3(false);
        setCheck3({display:'none'});
        setAns3({color:'black'});
        setQ4(false);
        setCheck4({display:'none'});
        setAns4({color:'black'});
        setQ5(false);
        setCheck5({display:'none'});
        setAns5({color:'black'});
    }

    function click(e){
        var x = e.nativeEvent.offsetX;
        var y = e.nativeEvent.offsetY;
    
        if(x>=270 && x<=280 && y>=100 && y<=112 && !q1){
            setCnt(cnt+1);
            setQ1(true);
            setCheck1({display:'block'});
            setAns1({color:'red'});
            if(cnt === 4){
                finishGame();
            }
        }

        if(x>=155 && x<=170 && y>=120 && y<=130 && !q2){
            setCnt(cnt+1);
            setQ2(true);
            setCheck2({display:'block'});
            setAns2({color:'red'});
            if(cnt === 4){
                finishGame();
            }
        }

        if(x>=255 && x<=263 && y>=178 && y<=186 && !q3){
            setCnt(cnt+1);
            setQ3(true);
            setCheck3({display:'block'});
            setAns3({color:'red'});
            if(cnt === 4){
                finishGame();
            }
        }

        if(x>=107 && x<=136 && y>=424 && y<=435 && !q4){
            setCnt(cnt+1);
            setQ4(true);
            setCheck4({display:'block'});
            setAns4({color:'red'});
            if(cnt === 4){
                finishGame();
            }
        }

        if(x>=274 && x<=302 && y>=440 && y<=452 && !q5){
            setCnt(cnt+1);
            setQ5(true);
            setCheck5({display:'block'});
            setAns5({color:'red'});
            if(cnt === 4){
                clearInterval(timer.current);
                finishGame();
            }
        }
    }
    
    return (
    <div onClick={click}>
        <br></br>
        <span className="nuriPicture">
            <img alt="nuri code" src={process.env.PUBLIC_URL + nuriCode}/>
        </span>
        <span>
        <div className="javaPicture">
            <img alt="nuri code" src={process.env.PUBLIC_URL + javaCode}/>
            <span className="findCheck1">
                <p style={check1}>O</p>
            </span>
            <span className="findCheck2">
                <p style={check2}>O</p>
            </span>
            <span className="findCheck3">
                <p style={check3}>O</p>
            </span>
            <span className="findCheck4">
                <p style={check4}>O</p>
            </span>
            <span className="findCheck5">
                <p style={check5}>O</p>
            </span>
            <br></br>
            <br></br>
        </div>
        </span>
        
        <div>
            <Progress className="progressBar" percent={time / 3} status="success" style={{width:1200}}/>
            <div>
                <br></br>
                <span className="res">
                    <span  style={ans1}> O </span>
                    <span  style={ans2}>O </span>
                    <span  style={ans3}>O </span>
                    <span  style={ans4}>O </span>
                    <span  style={ans5}>O </span>
                </span>

            </div>
            
        </div>
    </div>
    )
}

export default WrongFindGame