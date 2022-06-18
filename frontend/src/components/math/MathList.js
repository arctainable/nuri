import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { AiFillEye, AiOutlineForward } from 'react-icons/ai';
import axios from 'axios';
import server from "../../API/server";
import "./MathList.css"

export default function GameListCard() {
  const API_BASE_URL = server.BASE_URL;
  const Img = process.env.PUBLIC_URL + "img/"

  const navigate = useNavigate();

  function viewUpdate(number) {
    const id = number + 1;
    const pathId = number
    axios
    .patch(API_BASE_URL + '/api/v1/mathgame/' + id)
    .then((res) => {
        navigate("/math/" + pathId);
    })
  }

  const [views, setViews] = useState([]);

  useEffect(() => {
    (async () => {
      await axios
        .get(
          API_BASE_URL + "/api/v1/mathgame/1"
        )
        .then(
          ({data}) => setViews(data)
        );
    })();
  }, []);

  return (
    <div className="GameList-Container">
      <div className="Card-Contents">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="MathImg1"
            height="140"
            image= {Img + "math1thumbnail.png"}
          />
          <CardActions>
            <Button size="small"  onClick={() => { viewUpdate(0) }}>통나무 자르기 <AiOutlineForward /></Button>
            { views.length >= 1 &&
                <div style={{display: "flex", alignItems: "center"}}>
                <AiFillEye size="15"/>
                {views[0].views}
              </div>
            }
          </CardActions>
        </Card>
      </div>
      <div className="Card-Contents">
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
            component="img"
            alt="MathImg2"
            height="140"
            image= {Img + "math2thumbnail.png"}
          />
          <CardActions>
            <Button size="small"  onClick={() => { viewUpdate(1) }}>원주율 구하기 <AiOutlineForward /></Button>
            { views.length >= 1 &&
                <div style={{display: "flex", alignItems: "center"}}>
                <AiFillEye size="15"/>
                {views[1].views}
              </div>
            }
          </CardActions>
        </Card>
      </div>
      <div className="Card-Contents">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            alt="MathImg3"
            height="140"
            image= {Img + "math3thumbnail.png"}
          />
          <div className="Card-Footer">
          <CardActions>
            <Button size="small" onClick={() => { viewUpdate(2) }}>원의 원주 구하기 <AiOutlineForward /></Button>
            { views.length >= 1 &&
                <div style={{display: "flex", alignItems: "center"}}>
                <AiFillEye size="15"/>
                {views[2].views}
              </div>
            }
          </CardActions>
          </div>
        </Card>
      </div>
    </div>
  );
}
