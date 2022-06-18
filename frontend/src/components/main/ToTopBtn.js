import React from 'react';
import { useEffect, useState } from "react";
import "./ToTopBtn.css"

const ToTop = () => {
  const [showButton, setShowButton] = useState(false);
  const Img = process.env.PUBLIC_URL

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <img src={Img + '/img/rocket.png'} alt="toTop rocket"/>
        </button>
      )}
    </>
  );
};

export default ToTop;