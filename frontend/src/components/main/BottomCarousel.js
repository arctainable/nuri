import React, { Component } from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./BottomCarousel.css"

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
    const testImg = process.env.PUBLIC_URL + "/logo192.png"
    return (
      <div className="Bottom-CarouselContainer">
        <Slider {...settings}>
          <div className="slides">
            <div className="contents-text">
              <h2>누리 문법은 어떻게 되어 있을까?</h2>
              <p>대한민국의</p>
              <p> 자랑스러운 언어인 한글로</p>
              <p>코드를 작성할 수 있어요!</p>
              <button className="carousel-btn">실행해보기</button>
              <image src={testImg} />
            </div>
          </div>
          <div className="slides">
            <div className="contents-text">
              <h2>JAVA와 친해질 수 있는 기회!</h2>
              <p>내가 작성한 한글 코드를</p>
              <p>JAVA 언어 코드로</p>
              <p>볼 수 있어요!</p>
              <button className="carousel-btn">살펴보기</button>
            </div>
          </div>
          <div className="slides">
            <div className="contents-text">
              <h2>이제, 누리에서 간단하게 코드를 실행해보세요!</h2>
              <p>코드의 출력 결과를</p>
              <p>하단에서 바로</p>
              <p>확인할 수 있어요!</p>
              <button className="carousel-btn">살펴보기</button>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}