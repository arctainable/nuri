import React, { useState } from "react";
import axios from 'axios';
import server from "../../API/server";
import "./IntroIde.css"
import Editor from "@monaco-editor/react";
import {  } from "@mui/system";
import { AiOutlineCopy } from "react-icons/ai";

function Ide() {
  const API_BASE_URL = server.BASE_URL;
  var nuriCode;
  const [javaCode, setJavaCode] = useState(null);
  const [toggle, setToggle] = useState(true);
  var [theme, setTheme] = useState("vs-light");

    function nuriCodeHandler(e) {
      window.copyToCode = e;
      var data = {
          id:"",
          mathGameId:"",
          userCode:e
      }
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
        setToggle((prev) => !prev);
        if(toggle){
            setTheme("vs-dark");
        }else{
            setTheme("vs-light");
        }
    }

    return (
        <div className="ide-container">
            <div className="ide-contents">
                <div className="Ide-item-header">
                    <div style={{ textDecoration: "underLine 5px"}}>누리 코드</div>
                    <div className="ide-button-container">
                        <button 
                            className={"Ide-theme-button " + (toggle ? "toggle-off" : "")} 
                            onClick={() => toggleClick()}
                        >
                            {toggle ? "다크모드" : "일반모드"}
                        </button>
                        <AiOutlineCopy className="Ide-item-icon" size="30" onClick={() => copy()}/>
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

            <div className="ide-contents">
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

        </div>
    );
}

export default Ide;
