import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { AiFillEye, AiOutlineForward } from 'react-icons/ai';
import axios from 'axios';
import server from "../../API/server";
import "./AllMathList.css"

export default function ImgMediaCard() {
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <Button size="small" onClick={() => { viewUpdate(0) }}>통나무 자르기 <AiOutlineForward /></Button>
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
            <Button size="small" onClick={() => { viewUpdate(1) }}>원주율 구하기 <AiOutlineForward /></Button>
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
      <div className="Card-Contents">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            alt="MathImg3"
            height="140"
            image= {Img + "math4thumbnail.png"}
          />
          <div className="Card-Footer">
          <CardActions>
            <Button size="small" onClick={() => { viewUpdate(3) }}>원의 넓이 구하기 <AiOutlineForward /></Button>
            { views.length >= 1 &&
                <div style={{display: "flex", alignItems: "center"}}>
                <AiFillEye size="15"/>
                {views[3].views}
              </div>
            }
          </CardActions>
          </div>
        </Card>
      </div>
      {/* <div className="Card-Contents">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            alt="MathImg3"
            height="140"
            image= {Img + "math5thumbnail.png"}
          />
          <div className="Card-Footer">
          <CardActions>
            <Button size="small" onClick={() => { viewUpdate(4) }}>백분율 구하기 <AiOutlineForward /></Button>
            { views.length >= 1 &&
                <div style={{display: "flex", alignItems: "center"}}>
                <AiFillEye size="15"/>
                {views[4].views}
              </div>
            }
          </CardActions>
          </div>
        </Card>
      </div> */}
      <div className="Card-Contents">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            alt="MathImg3"
            height="140"
            image= {Img + "math6thumbnail.png"}
          />
          <div className="Card-Footer">
          <CardActions>
            <Button size="small" onClick={() => { viewUpdate(5) }}>출력 해보기 <AiOutlineForward /></Button>
            { views.length >= 1 &&
                <div style={{display: "flex", alignItems: "center"}}>
                <AiFillEye size="15"/>
                {views[5].views}
              </div>
            }
          </CardActions>
          </div>
        </Card>
      </div>
      {/* <div className="Card-Contents">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            alt="MathImg3"
            height="140"
            image= {Img + "math7thumbnail.png"}
          />
          <div className="Card-Footer">
          <CardActions>
            <Button size="small" onClick={() => { viewUpdate(6) }}>덧셈 프로그램 만들기 <AiOutlineForward /></Button>
            { views.length >= 1 &&
                <div style={{display: "flex", alignItems: "center"}}>
                <AiFillEye size="15"/>
                {views[6].views}
              </div>
            }
          </CardActions>
          </div>
        </Card>
      </div> */}
      {/* <div className="Card-Contents">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            alt="MathImg3"
            height="140"
            image= {Img + "math8thumbnail.png"}
          />
          <div className="Card-Footer">
          <CardActions>
            <Button size="small" onClick={() => { viewUpdate(7) }}>더 큰 숫자 구하기 <AiOutlineForward /></Button>
            { views.length >= 1 &&
                <div style={{display: "flex", alignItems: "center"}}>
                <AiFillEye size="15"/>
                {views[7].views}
              </div>
            }
          </CardActions>
          </div>
        </Card>
      </div> */}
      <div className="Card-Contents">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            alt="MathImg3"
            height="140"
            image= {Img + "math9thumbnail.png"}
          />
          <div className="Card-Footer">
          <CardActions>
            <Button size="small" onClick={() => { viewUpdate(8) }}>반복문 활용하기 <AiOutlineForward /></Button>
            { views.length >= 1 &&
                <div style={{display: "flex", alignItems: "center"}}>
                <AiFillEye size="15"/>
                {views[8].views}
              </div>
            }
          </CardActions>
          </div>
        </Card>
      </div>
      <div className="Card-Contents">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            alt="MathImg3"
            height="140"
            image= {Img + "math10thumbnail.png"}
          />
          <div className="Card-Footer">
          <CardActions>
            <Button size="small" onClick={() => { viewUpdate(9) }}>숫자 뽑기 <AiOutlineForward /></Button>
            { views.length >= 1 &&
                <div style={{display: "flex", alignItems: "center"}}>
                <AiFillEye size="15"/>
                {views[9].views}
              </div>
            }
          </CardActions>
          </div>
        </Card>
      </div>
      <div className="Card-Contents">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            alt="MathImg3"
            height="140"
            image= {Img + "math11thumbnail.png"}
          />
          <div className="Card-Footer">
          <CardActions>
            <Button size="small" onClick={() => { viewUpdate(10) }}>과목 평균 구하기 <AiOutlineForward /></Button>
            { views.length >= 1 &&
                <div style={{display: "flex", alignItems: "center"}}>
                <AiFillEye size="15"/>
                {views[10].views}
              </div>
            }
          </CardActions>
          </div>
        </Card>
      </div>
    </div>
  );
}