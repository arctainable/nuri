import React, { Component } from "react";
import { Link } from "react-router-dom"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./TopCarousel.css"

export default class SimpleSlider extends Component {
  
  render() {
    // carousel settings
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };

    const Img = process.env.PUBLIC_URL

    return (
      <div className="CarouselContainer">
        <Slider {...settings}>
          <div className="slides">
            <div className="contents-text">
              <h2>누리 문법은 어떻게 되어 있을까?</h2>
              <p>문법을 각 카테고리 별로 보기 쉽게,</p>
              <p>예시 코드로 이해하기 쉽게</p>
              <p>누리 문법을 공부해 보세요</p>
              <button className="carousel-btn">
                <Link to='/reference' state={{PathStep:0}}>살펴보기</Link>
              </button>
            </div>
              <img src={Img + 'img/nurirang_carousel2.png'} alt="carousel1" />
          </div>
          <div className="slides2">
            <div className="contents-text">
              <h2>코딩을 게임으로 배울 수 있다고?</h2>
              <p>다양한 게임을 통해 </p>
              <p>학습하고, 즐기며 </p>
              <p>친해지는 시간을 가져보세요!</p>
              <button className="carousel-btn">
                <Link to='/game'>살펴보기</Link>
              </button>
            </div>
              <img src={Img + 'img/nurirang_carousel3.png'} alt="carousel2" />
          </div>
          <div className="slides3">
            <div className="contents-text">
              <h2>귀찮게 손으로 풀 필요가 없다고?</h2>
              <p>x = -b +-(b^2-4ac)/2 .....?</p>
              <p>이제 코딩을 통해</p>
              <p>컴퓨터로 풀어보세요!</p>
              <button className="carousel-btn">
                <Link to='/math'>살펴보기</Link>
              </button>
            </div>
              <img src={Img + 'img/nurirang_carousel4.png'} alt="carousel3" />
          </div>
        </Slider>
      </div>
    );
  }
}