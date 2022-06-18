import React from "react";
import styled from "@emotion/styled";

function IntroContent({ content }) {
  
  const Whole = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
  `

  const ImgGroup = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `

  const Img = styled.img`
    box-sizing: border-box;
    width: ${content.imgW};
    height: 300px;
    border-radius: 20px;
    border-style: solid;
    border-color: black;
  `

  return (
    <Whole>
      <h3>{content.text}</h3>
      <ImgGroup>
        {content.img.map((imgItem, idx) => {
          return <Img key={idx} alt="이미지" src={process.env.PUBLIC_URL + imgItem}/>
        })}
      </ImgGroup>
    </Whole>
  )
}

export default IntroContent;