// Carousel.js
import React, { useState } from "react";
import "../src/Carousel.css";
import html5 from "./assets/html5.png";
import css3 from "./assets/css3.png";
import javascript from "./assets/javascript.png";
import react from "./assets/react.png";
import jQuery from "./assets/jQuery.png";
import sass from "./assets/sass.png";
import MaterialUI from "./assets/MaterialUI.png";
import bootstrap from "./assets/bootstrap.png";
import Nodejs from "./assets/Nodejs.png";
import java from "./assets/java.png";
import mysql from "./assets/mysql.png";
import sql from "./assets/Sql.jpg";
import git from "./assets/git.png";
import jira from "./assets/jira.png";

const icons = [
  html5,
  css3,
  javascript,
  react,
  jQuery,
  sass,
  MaterialUI,
  bootstrap,
  Nodejs,
  java,
  mysql,
  sql,
  git,
  jira,

  //   faLinkedinIn,
  // Add more icons as needed
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  //   const showSlide = (index) => {
  //     if (index >= icons.length) {
  //       setCurrentIndex(0);
  //     } else if (index < 0) {
  //       setCurrentIndex(icons.length - 1);
  //     } else {
  //       setCurrentIndex(index);
  //     }
  //   };

  //   const nextSlide = () => {
  //     showSlide(currentIndex + 1);
  //   };

  //   const prevSlide = () => {
  //     showSlide(currentIndex - 1);
  //   };

  return (
    <div className="carousel">
      {/* <div
        className="carousel-container"
        // style={{ transform: `translateX(${-currentIndex * 100}%)` }}
      > */}
      <ul className="carousel-item">
        {icons.map((icon, index) => (
          <li key={`icon-${index}`}>
            <img src={icon} alt="icon" />
          </li>
        ))}
      </ul>

      {/* </div> */}
      {/* <button className="carousel-button prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel-button next" onClick={nextSlide}>
        &#10095;
      </button> */}
    </div>
  );
};

export default Carousel;
