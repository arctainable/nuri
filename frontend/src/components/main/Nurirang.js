import React from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Nurirang.css"



const Nurirang = () => {
  const [showButton, setShowButton] = useState(true);
  const navigate = useNavigate();
  const Img = process.env.PUBLIC_URL

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset < 500) {
        setShowButton(true);
      } else if (window.pageYOffset === 0 ) {
        setShowButton(true);
      }
      else {
        setShowButton(false);
      }
    });
  }, []);

  return (
    <>
      {showButton && (
        <button onClick={() => { navigate("/intro") }} className="Nurirang">
          <img src={Img + '/img/nuriintroduce.png'} alt="toTop rocket"/>
        </button>
      )}
    </>
  );
};


export default Nurirang;