import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { AiFillEye, AiOutlineForward } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import server from "../../API/server";

import "./GameList.css"

export default function GameListCard() {
  const API_BASE_URL = server.BASE_URL;
  const GameImg = process.env.PUBLIC_URL + "img/"
  const navigate = useNavigate();

  function viewUpdate(number) {
    const id = number;
    axios
    .patch(API_BASE_URL + '/api/v1/mathgame/' + id)
    .then((res) => {
        navigate("/game/" + id);
    })
  }

  const viewsArr = []

  async function getViews() {
    const viewsList = [];
    await axios
    .get(API_BASE_URL + "/api/v1/mathgame/0")
    .then((res) => {
      for (let i = 0; i < 3; i++) {
        viewsList.push(res.data[i].views)
      }
      window.viewsArr = viewsList;
    })
  }

  return (
    <div className="GameList-Container">
      <div className="Card-Contents">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="GameImg"
            height="140"
            image={GameImg+"updowngamethumbnail.png"}
          />
          <CardActions>
            <Button size="small" onClick={() => {viewUpdate(1)}}>업다운 게임 <AiOutlineForward /></Button>
              <div style={{display: "flex", alignItems: "center"}}>
                <AiFillEye size="15"/>
                {viewsArr[1]}
              </div>
          </CardActions>
        </Card>
      </div>
      <div className="Card-Contents">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="GameImg"
            height="140"
            image={GameImg+"cardconnectgamethumbnail.png"}
          />
          <CardActions>
            <Button size="small" onClick={() => {viewUpdate(0)}}>연결 게임 <AiOutlineForward /></Button>
              <div style={{display: "flex", alignItems: "center"}}>
                <AiFillEye size="15"/>
                {viewsArr[0]}
              </div>
          </CardActions>
        </Card>
      </div>
      <div className="Card-Contents">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="GameImg"
            height="140"
            image={GameImg+"finddifferentgamethumbnail.png"}
          />
          <div className="Card-Footer">
          <CardActions>
            <Button size="small" onClick={() => {viewUpdate(2)}}>틀린 부분 찾기! <AiOutlineForward /></Button>
              <div style={{display: "flex", alignItems: "center"}}>
                <AiFillEye size="15"/>
                {viewsArr[2]}
              </div>
          </CardActions>
          </div>
        </Card>
      </div>
    </div>
  );
}