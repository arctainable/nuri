import React from "react";
import "./LinkGameItem.css";

function LinkGameItem({ value, selected, selectCard }) {

  function selectItem(data) {
    if (!selected[data.id]) {
      selectCard(data)
    }
  }

  return (
    <div 
      className={selected[value.id] ? "LinkGameItem-on" : "LinkGameItem"} 
      onClick={() => selectItem(value)}
    >
      <div className="front LinkGameItem-card">
        <img 
          className="LinkGameItem-card-img"
          alt="기본 이미지" 
          src={process.env.PUBLIC_URL + '/img/nurirang_carousel1.JPG'}
        />
      </div>
      <div className="back LinkGameItem-card">
        <div className="LinkGameItem-card-value">{value.title}</div>
      </div>
    </div>
  )
};

export default LinkGameItem;