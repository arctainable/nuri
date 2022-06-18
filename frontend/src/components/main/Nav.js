import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiMenu, FiLogOut } from 'react-icons/fi';
import "./Nav.css"

function Nav({ userNickname, userPhoto, setUserNickname }) {
  const navigate = useNavigate();
  const userPhotoSrc = userPhoto ? 'data:image/png;base64,' + userPhoto : process.env.PUBLIC_URL + "/img/nurirang_carousel1.JPG"
  const [menuIconShow, setMenuIconShow] = useState(window.innerWidth <= 760 ? true : false);
  const [menuShow, setMenuShow] = useState(false);

  function moveLogin() {
    navigate("/user/login");
  }

  function moveMypage() {
    navigate("/mypage");
  }

  function logout() {
    localStorage.removeItem("jwt");
    setUserNickname("");
    navigate("/user/login");
  }

  function resizeHandler() {
    if (window.innerWidth <= 760) {
      setMenuIconShow(true)
    } else {
      setMenuIconShow(false)
    }
  }

  function toggleMenu() {
    setMenuShow(!menuShow)
  }

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    return function() {
      window.removeEventListener('resize', resizeHandler);
    }
  }, [menuShow, userNickname])

  return (
    <div className="Nav">
      <NavLink className="Nav-logo" to="/main" >누리</NavLink>
      <div className="Nav-content">
        {menuIconShow
        ? 
        <>
          <FiMenu size="2rem" onClick={() => toggleMenu()} style={{cursor: "pointer"}} />
          <div className="Nav-items" onClick={() => toggleMenu()} style={{ visibility: menuShow ? "visible" : "hidden" }}>
            <NavLink className="Nav-item" to="/intro" >누리소개</NavLink>
            <NavLink className="Nav-item" to="/reference"  state={{ PathStep: 0 }}>살펴보기</NavLink>
            <NavLink className="Nav-item" to="/ide" >코드짜기</NavLink>
            <NavLink className="Nav-item" to="/game" >게임하기</NavLink>
            <NavLink className="Nav-item" to="/math" >문제풀기</NavLink>
          </div>
        </>
        : 
        <div className="Nav-items">
          <NavLink className="Nav-item" to="/intro" >누리소개</NavLink>
          <NavLink className="Nav-item" to="/reference" state={{ PathStep: 0}} >살펴보기</NavLink>
          <NavLink className="Nav-item" to="/ide" >코드짜기</NavLink>
          <NavLink className="Nav-item" to="/game" >게임하기</NavLink>
          <NavLink className="Nav-item" to="/math" >문제풀기</NavLink>
        </div>}
        {userNickname !== ""
        ? 
        <div className="Nav-item-login">
          <img className="Nav-profile-img" onClick={() => moveMypage()} alt="프로필 이미지" src={userPhotoSrc} />
          <FiLogOut className="Nav-logout-button" onClick={() => logout()} size="30px"/>
        </div>
        : <button className="Nav-item-button" onClick={() => moveLogin()}>로그인</button>}
      </div>
    </div>
  )
}

export default Nav;