// Carousel.js
import React from "react";
import "./CarouselComopnent.css";
import html5 from "../assets/html5.png";
import css3 from "../assets/css3.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import jQuery from "../assets/jQuery.png";
import sass from "../assets/sass.png";
import MaterialUI from "../assets/MaterialUI.png";
import bootstrap from "../assets/bootstrap.png";
import Nodejs from "../assets/Nodejs.png";
import java from "../assets/java.png";
import mysql from "../assets/mysql.png";
import sql from "../assets/Sql.jpg";
import git from "../assets/git.png";
import jira from "../assets/jira.png";
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
];

const CarouselComopnent = () => {
  // const carouselref = useRef(null);

  // useEffect(() => {
  //   const handleAnimationEnd = () => {
  //     carouselref.current.style.animation = "none";
  //     carouselref.current.offsetHeight = {}; /* Trigger reflow*/
  //     carouselref.current.style.animation = "marquee 10s linear infinite";
  //   };
  //   const carouselElement = carouselref.current;
  //   carouselElement.addEventListener("animationiteration", handleAnimationEnd);
  //   return () => {
  //     carouselElement.removeEventListener(
  //       "animationiteration",
  //       handleAnimationEnd
  //     );
  //   };
  // }, []);
  return (
    <div className="carousel">
      <ul className="carousel-item">
        {icons.concat(icons).map((icon, index) => (
          <li key={`icon-${index}`}>
            <img src={icon} alt="icon" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarouselComopnent;
