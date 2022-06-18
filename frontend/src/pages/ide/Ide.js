import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import server from "../../API/server";
import Editor from "@monaco-editor/react";
import SaveModal from "../../components/ide/SaveModal";
import { AiOutlineCopy } from "react-icons/ai";
import { MdSaveAlt } from "react-icons/md";
import Spinner from "../../components/spinner/Spinner"
import "./Ide.css"

function Ide() {
    const API_BASE_URL = server.BASE_URL;
    const API_RAPID_URL = server.Rapid_URL;
    const API_RAPID_KEY = process.env.REACT_APP_RAPID_API;

    var nuriCode, input;
    const { state } = useLocation();
    nuriCode = state ? state : null;
    const [result, setResult] = useState(null);
    const [javaCode, setJavaCode] = useState(null);
    const [toggle, setToggle] = useState(true);
    const [saveShow, setSaveShow] = useState(false);
    const [spinnerCatch, setSpinnerCatch] = useState(false);
    const [saveNuriCode, setSaveNuriCode] = useState("");
    var [theme, setTheme] = useState("vs-light");

    function saveOn() {
        if (saveNuriCode.length === 0) {
            alert("코드를 작성하고 저장하기 버튼을 눌러주세요")
            return
        }
        setSaveShow(true);
    }

    function saveOff() {
        setSaveShow(false);
    }

    function spinnerOn() {
        setSpinnerCatch(true);
    }

    function spinnerOff() {
        setSpinnerCatch(false);
    }

    const decode = (bytes) => {
        var escaped = escape(atob(bytes));
        try {
            return decodeURIComponent(escaped);
        } catch {
            return unescape(escaped);
        }
    }

    function run() {
        spinnerOn();
        var data = {
            source_code: javaCode,
            language_id: 62,
            stdin: input,
        }
        const options = {
            method: 'POST',
            url: API_RAPID_URL + '/submissions',
            params: {base64_encoded: 'false', fields: '*'},
            headers: {
            'content-type': 'application/json',
            'Content-Type': 'application/json',
            'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
            'X-RapidAPI-Key': API_RAPID_KEY
            },
            data
        };

        axios.request(options).then(function (response) {
            const options = {
                method: 'GET',
                url: API_RAPID_URL + '/submissions/' + response.data.token,
                params: {base64_encoded: 'true', fields: '*'},
                headers: {
                    'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
                    'X-RapidAPI-Key': API_RAPID_KEY
                }
            };
            
            axios.request(options).then(function (response) {
                setResult(decode(response.data.stdout));
                spinnerOff();
            }).catch(function (error) {
                console.error(error);
                spinnerOff();
            });
        }).catch(function (error) {
            console.error(error);
            spinnerOff();
        });
    }

    function nuriCodeHandler(e) {
        window.copyToCode = e;
        var data = {
            id:"",
            mathGameId:"",
            userCode:e
        }
        setSaveNuriCode(e);
        axios
        .post(API_BASE_URL + "/api/v1/console/convert",
        data,{
            Headers:{
                contentType: "application/json"
            }
        })
        .then((res)=>{
            setJavaCode(res.data);
        })
    }

    function copy() {
        const text = window.copyToCode;
        if (text === undefined) {
            alert("복사할 내용이 없습니다.")
        } else {
            navigator.clipboard.writeText(text);
            alert('코드를 복사했습니다!');
        }
    }

    function toggleClick(){
        setToggle(!toggle);
        if(toggle){
            setTheme("vs-dark");
        }else{
            setTheme("vs-light");
        }
    }

    function inputValueHandler(e){
        input = e;
    }


    return (
        <div className="Ide">
            {spinnerCatch && <Spinner />}
            {saveShow && <SaveModal saveNuriCode={saveNuriCode} saveOff={saveOff} />}
            <div className="Ide-item">
                <div className="Ide-item-header">
                    <div style={{ textDecoration: "underLine 5px"}}>누리 코드</div>
                    <div className="Ide-item-button-group">
                        <button 
                            className={"Ide-theme-button " + (toggle ? "toggle-off" : "")} 
                            onClick={() => toggleClick()}
                        >
                            {toggle ? "다크모드" : "일반모드"}
                        </button>
                        <AiOutlineCopy className="Ide-item-icon" size="30" onClick={() => copy()}/>
                        <MdSaveAlt className="Ide-item-icon" size="30" onClick={() => saveOn()}/>
                        <button className="Ide-item-button" onClick={() => run()}>RUN</button>
                    </div>
                </div>
                <div className={"Ide-item-content " + (toggle ? "" : "toggle-off")}>
                    <Editor
                        id="nuriCode"
                        height="30vh"
                        defaultLanguage="java"
                        defaultValue=""
                        theme={theme}
                        value={nuriCode}
                        onChange={nuriCodeHandler}
                    />
                </div>
            </div>

            <div className="Ide-item">
                <div className="Ide-item-header" style={{ textDecoration: "underLine 5px"}}>자바 코드</div>
                <div className={"Ide-item-content " + (toggle ? "" : "toggle-off")}>
                    <Editor
                        id="javaCode"
                        height="30vh"
                        defaultLanguage="java"
                        defaultValue=""
                        theme={theme}
                        value={javaCode}
                    />
                </div>
            </div>

            <div className="Ide-item">
            <div className="Ide-item-header" style={{ textDecoration: "underLine 5px"}}>입력 값</div>
                <div className={"Ide-item-content " + (toggle ? "" : "toggle-off")}>
                    <Editor
                        id="input"
                        height="30vh"
                        defaultLanguage="java"
                        defaultValue=""
                        theme={theme}
                        value={input}
                        onChange={inputValueHandler}
                    />
                </div>
            </div>

            <div className="Ide-item">
                <div className="Ide-item-header" style={{ textDecoration: "underLine 5px"}}>실행 결과</div>
                <div className={"Ide-item-content " + (toggle ? "" : "toggle-off")}>
                    <Editor
                        id="result"
                        height="30vh"
                        defaultLanguage="java"
                        defaultValue=""
                        theme={theme}
                        value={result}
                    />
                </div>
            </div>
        </div>
    );
}

export default Ide;