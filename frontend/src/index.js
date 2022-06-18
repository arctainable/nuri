import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// routing
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Landing from './pages/landing/Landing'
import Main from './pages/main/Main'
import Intro from './pages/intro/Intro'
import Math from './pages/math/Math'
import Game from './pages/game/Game'
import GameItem from './pages/game/GameItem'
import Reference from './pages/reference/Reference'
import MyPage from './pages/myPage/MyPage'
import SignUp from './pages/user/SignUp'
import Login from './pages/user/Login'
import Ide from './pages/ide/Ide'
import TGame from './components/game/TGame'
import MathItem from './pages/math/MathItem';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/"  element={<App />}>
        <Route path="main" element={<Main />}></Route>
        <Route path="intro" element={<Intro />}></Route>
        <Route path="math" element={<Math />}></Route>
        <Route path="math/:id" element={<MathItem />} />
        <Route path="game" element={<Game />}></Route>
        <Route path="game/:id" element={<GameItem />}></Route>
        <Route path="reference" element={<Reference />}></Route>
        <Route path="mypage" element={<MyPage />}></Route>
        <Route path="user/signup" element={<SignUp />}></Route>
        <Route path="user/login" element={<Login />}></Route>
        <Route path="ide" element={<Ide />}></Route>
        <Route path="TGame" element={<TGame />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
