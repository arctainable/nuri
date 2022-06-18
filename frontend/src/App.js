import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/main/Nav';
import { Outlet } from 'react-router-dom';
import { UserInfo } from "../src/components/user/UserAxios";
import ToTopBtn from "./components/main/ToTopBtn";


function App() {
  const [userNickname, setUserNickname] = useState("");
  const [userPhoto, setUserPhoto] = useState("");
  const [userBackImg, setUserBackImg] = useState("");

  useEffect(() => {
    const isLogin = localStorage.getItem("jwt") ? true : false;
    if (isLogin) {
      UserInfo()
      .then((response) => {
        setUserNickname(response.data.userNickname);
        setUserPhoto(response.data.userPhoto);
        setUserBackImg(response.data.userBackgroundImage);
      })
      .catch(() => {
        alert('error');
      })
    }
  }, [])

  return (
    <div className="App">
      <Nav userNickname={userNickname} userPhoto={userPhoto} setUserNickname={setUserNickname} />
      <Outlet context={{ userNickname, userPhoto, userBackImg, setUserNickname, setUserPhoto, setUserBackImg }} />

      {/* <Scrollbar /> */}
      
      <ToTopBtn />
      {/* 백그라운드 */}
    </div>
  );
}

export default App;
