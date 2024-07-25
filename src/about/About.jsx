import React, { useEffect, useState } from "react";
import "./about.css";
import Mypic from "../assets/Mypic2.png";
import Carousel from "../resuableComponents/CarouselComopnent";

const About = () => {
  const [slideIn, setSlideIn] = useState(false);
  useEffect(() => {
    setSlideIn(true);
  }, []);
  return (
    <>
      <aside className="aboutDiv">
        <div className="profile">
          <img src={Mypic} alt="MyPicture"></img>
        </div>
        <div className={`intro ${slideIn ? "intro-slide-in" : ""}`}>
          <h4>Professional Summary</h4>

          <p>
            Experienced React Developer with 5 years in creating dynamic web
            applications. Skilled in using React.js, Redux, and API integration
            to build responsive and efficient user interfaces. Proven ability to
            work well in Agile teams, collaborate with designers and backend
            engineers, and optimize application performance. Strong
            problem-solving skills and a commitment to delivering high-quality,
            user-friendly solutions. Looking to contribute to innovative
            projects in a collaborative environment.
          </p>

          <h4>Links</h4>

          <ul>
            <li>
              <a href="https://www.linkedin.com/in/sushmitha-muruganantham/">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/SushmithaMuruga96">GitHub</a>
            </li>
          </ul>

          <br />
        </div>
      </aside>
      <Carousel />
    </>
  );
};

export default About;
