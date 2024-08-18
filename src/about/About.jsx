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
            Frontend Developer with 5 years of experience specializing in
            creating responsive and optimized web applications. With 3 years
            dedicated to frontend development using JavaScript, ReactJS, and
            AngularJS, I also bring 2 years of backend experience with Node.js
            and Java Spring Boot, SQL. Proven track record of delivering
            high-quality solutions in Agile environments and collaborating
            effectively with cross-functional teams. Eager to contribute to
            innovative projects, leveraging my strong frontend skills and
            supplementary backend experience.
            <br />
            <h4>TechStack Summary</h4>
            <ul>
              <li>
                Frontend-focused Developer with strong expertise in ReactJS,
                Javascript, AngularJS.
              </li>
              <li>
                Capable in backend development with Node.js and Java SpringBoot.
              </li>
              <li>Experience in data visualization and analytics tools</li>
            </ul>
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
