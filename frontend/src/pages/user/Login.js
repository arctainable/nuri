import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/user/Input";
import Button from "../../components/user/Button";
import { UserLogin } from "../../components/user/UserAxios";
import "./User.css";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const navigate = useNavigate();

  function moveSignUp(event) {
    event.preventDefault();
    navigate("/user/signup");
  }
  
  function login(event) {
    event.preventDefault();
    const userData = {
      userEmail: email,
      userPassword: password,
    }
    UserLogin(userData)
    .then((response) => {
      console.log("로그인 성공");
      localStorage.setItem("jwt", response.data.accessToken);
      window.location.replace("/main");
    })
    .catch(() => {
      console.log("로그인 실패")
      setLoginMessage("올바른 이메일과 비밀번호를 입력하세요");
    })
  }

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      navigate("/main")
    }
  }, [navigate])

  return (
    <div className="User">
      <div style={{ fontSize: "30px", fontWeight: "500" }}>로그인</div>
      <form>
        <Input 
          type="text" 
          title="이메일 입력" 
          setInput={setEmail} 
          value={email} 
          message={loginMessage}
          placeholder="이메일을 입력해 주세요" 
        />
        <Input 
          type="password" 
          title="비밀번호 입력" 
          setInput={setPassword} 
          value={password}
          message=""
          placeholder="비밀번호를 입력해 주세요" 
        />
        <div className="User-button-group">
          <Button clickFunction={moveSignUp} title="누리 회원가입" type="cancel" />
          <Button clickFunction={login} title="누리 로그인" type="success" />
        </div>
      </form>
    </div>
  )
}

export default Login