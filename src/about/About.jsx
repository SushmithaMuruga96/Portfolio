import React, { useEffect, useState } from "react";
import "./about.css";
import Mypic from "../assets/Image.jpeg";
// import Carousel from "../resuableComponents/CarouselComopnent";

const About = () => {
  const [slideIn, setSlideIn] = useState(false);
  useEffect(() => {
    setSlideIn(true);
  }, []);
  return (
    <div id="about">
      <div className="profile">
        <img src={Mypic} alt="MyPicture"></img>
      </div>
      <div className="header">
        <h2>Sushmitha Muruganantham </h2>
        <h4>Software Developer </h4>
      </div>

      <aside className="aboutDiv">
        <div className={`intro ${slideIn ? "intro-slide-in" : ""}`}>
          <h4>Professional Summary</h4>

          <p>
            Software Developer with 5 years of experience specializing in
            creating responsive and optimized web applications. With 4 years
            dedicated to frontend development using JavaScript, ReactJS, and
            Angular, I also bring 1 year of backend experience with Node.js and
            Java Spring Boot, SQL. Proven track record of delivering
            high-quality solutions in Agile environments and collaborating
            effectively with cross-functional teams. Eager to contribute to
            innovative projects, leveraging my strong frontend skills and
            supplementary backend experience.
          </p>
        </div>
        <div className={`intro ${slideIn ? "intro-slide-in" : ""}`}>
          <h4>TechStack Summary</h4>
          <ul>
            <li>
              Software Developer with strong expertise in ReactJS, Javascript,
              AngularJS.
            </li>
            <li>
              Capable in backend development with Node.js and Java SpringBoot.
            </li>
            <li>
              Experience in data visualization and analytics tools like
              Amcharts, Recharts, Microsoft Power BI, IBM Cognos Analytical tool
            </li>
          </ul>
        </div>{" "}
      </aside>
      {/* <Carousel /> */}
    </div>
  );
};

export default About;
