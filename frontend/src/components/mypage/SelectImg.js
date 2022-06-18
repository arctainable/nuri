import React from "react";
import styled from "@emotion/styled";

function SelectImg({
  type,
  tempImg, 
  selectImg, 
  imgRef, 
  changeImg,
  imgWidth,
  imgHeight,
  imgBorderRadius,
}) {

  const SelectImg = styled.li`
    width: 100%;
    height: 250px;
    padding-bottom: 10px;
    border-style: none none solid;
    border-width: 1px;
    border-color: rgb(219, 219, 219);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    row-gap: 10px;
  `

  const Title = styled.p`
    margin: 10px 0px;
    font-weight: 500;
  `

  const Img = styled.img`
    width: ${imgWidth};
    height: ${imgHeight};
    border-radius: ${imgBorderRadius};
    border-style: solid;
    border-width: 2px;
    border-color: rgb(219, 219, 219);
  `

  const BackImg = styled.div`
    width: ${imgWidth};
    height: ${imgHeight};
    border-radius: ${imgBorderRadius};
    border-style: solid;
    border-width: 2px;
    border-color: rgb(219, 219, 219);
    background-image: url(${typeof(tempImg) === "string" ? tempImg : URL.createObjectURL(tempImg)});
    background-size: 100%;
    background-position: 50% 50%;
    text-align: center;
  `

  const Button = styled.button`
    font-weight: 500;
    width: 200px;
    height: 30px;
    border-radius: 10px;
    background-color: white;
    border-style: solid;
    border-width: 2px;
    border-color: rgb(219, 219, 219);
    font-family: 'Noto Sans KR', sans-serif;
    &:hover {
      cursor: pointer;
      color: #FFD644;
      border-color: #FFD644;
    }
  `

  return (
    <SelectImg>
      <Title>{type} 이미지</Title>
      {type === "프로필" ?
        <Img 
          src={typeof(tempImg) === "string" ? tempImg : URL.createObjectURL(tempImg)}
          alt="프로필 이미지" 
        /> :
        <BackImg/>
      }
      <Button onClick={() => selectImg()}>
        {type} 이미지 고르기
      </Button>
      <input 
        ref={imgRef}
        onChange={(event) => changeImg(event)}
        type="file" 
        accept="image/*" 
        style={{ display: "none" }}
      />
    </SelectImg>
  )
}

export default SelectImg;