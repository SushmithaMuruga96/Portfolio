import React, { useRef, useEffect, useState } from "react";
import "./index.css";
import Mypic from "./assets/Mypic2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  //   faHtml5,
  //   faCss3,
  //   faJs,
  //   faReact,
  faHeart,
  faEnvelope,
  faPhone,
  faLocationDot,
  // faAngleDown,
  // faLinkedinIn,
  //   faBootstrap,
} from "@fortawesome/free-solid-svg-icons";

import Carousel from "./Carousel";

const Layout = () => {
  const cdetailDiv = useRef(null);
  const aboutDiv = useRef(null);
  const skillDiv = useRef(null);
  const expDiv = useRef(null);
  const eduDiv = useRef(null);
  const [slideforAbout, setSlideforAbout] = useState(false);
  const [skillColor, setSkillColor] = useState(false);
  // const [show, setShow] = useState(false);
  // const [hide, setHide] = useState(false);

  const scrollToDiv = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      // inline: "nearest",
    });
  };

  useEffect(() => {
    setSlideforAbout(true);
    setSkillColor(true);
  }, []);

  return (
    <>
      <div className="bg">
        {/* <div className="bg bg2"></div>
      <div className="bg bg3"></div> */}
        <nav className="navBar">
          <ul>
            <li>
              <button
                className="navButton"
                onClick={() => scrollToDiv(aboutDiv)}
              >
                About
              </button>
            </li>
            <li>
              <button
                className="navButton"
                onClick={() => scrollToDiv(skillDiv)}
              >
                Skills
              </button>
            </li>
            <li>
              <button className="navButton" onClick={() => scrollToDiv(expDiv)}>
                Work History
              </button>
            </li>
            <li>
              <button className="navButton" onClick={() => scrollToDiv(eduDiv)}>
                Education
              </button>
            </li>
          </ul>
        </nav>
        <aside className="pic">
          <img src={Mypic} alt="MyPicture"></img>
          {/* <div> */}
          <h2>I'm Sushmitha Muruganantham </h2>
          <h3>Front-End Web Developer </h3>
          <button className="contact" onClick={() => scrollToDiv(cdetailDiv)}>
            Contact
          </button>
          {/* </div> */}
        </aside>

        <section>
          <div ref={aboutDiv}>
            <h1 className="skillsHead">About</h1>

            <div className={`intro ${slideforAbout ? "intro-slide-in" : ""}`}>
              <p>
                I am an experienced Software Developer with a strong focus on
                front-end architecture and website development. I am skilled in
                creating responsive designs, implementing modern web development
                practices, and collaborating effectively with back-end teams on
                APIs. I excel at resolving issues and delivering robust, secure,
                and high-performance solutions. I am seeking new opportunities
                and challenges that will contribute to both company growth and
                my professional development.
              </p>
            </div>
          </div>

          <div ref={skillDiv}>
            <h1 className="skillsHead"> Skills</h1>

            <div
              className={`skills ${skillColor ? "skills-color-change" : ""}`}
            >
              <div>
                <h4> Technical Skills </h4>
                <ul>
                  <li>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      bounce
                      className="highlight"
                    />
                    HTML5
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faHeart}
                      bounce
                      className="highlight"
                    />
                    CSS3
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      bounce
                      className="highlight"
                    />
                    JavaScript (ES6+)
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      bounce
                      className="highlight"
                    />
                    React JS
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      bounce
                      className="highlight"
                    />
                    Redux
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      bounce
                      className="highlight"
                    />
                    Axios
                  </li>

                  {/* <li>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      bounce
                      className="highlight"
                    />
                  </li> */}
                  {/* <li>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      bounce
                      className="highlight"
                    />
                    Bootstrap
                  </li> */}
                  <li>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      bounce
                      className="highlight"
                    />
                    Angular JS
                  </li>
                  {/* <li>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      bounce
                      className="highlight"
                    />
                    JQuery
                  </li> */}
                  {/* <li>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      bounce
                      className="highlight"
                    />
                    CSS Preprocessor (SASS)
                  </li> */}
                </ul>
              </div>
              <div>
                {/* <h4>Backend/Databases : </h4> */}
                <h4>Web Development Styling: </h4>

                <ul>
                  <li>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      bounce
                      className="highlight"
                    />
                    MUI
                    {/* Microsoft SQL Server */}
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      bounce
                      className="highlight"
                    />
                    {/* MySQL */}
                    Bootstrap
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      bounce
                      className="highlight"
                    />
                    {/* Node JS (Basic) */}
                    jQuery
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      bounce
                      className="highlight"
                    />
                    {/* Java (Basic) */}
                    CSS Preprocessor (SASS)
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      bounce
                      className="highlight"
                    />
                    {/* SpringBoot (Basic) */}
                    Styled Components
                  </li>

                  <li>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      bounce
                      className="highlight"
                    />
                    {/* SQL */}
                    REST API
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      bounce
                      className="highlight"
                    />
                    {/* SQL */}
                    charts: Amcharts, Recharts
                  </li>
                </ul>
              </div>
              <div>
                <h4>Tools/Practices :</h4>
                <ul>
                  <li>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      bounce
                      className="highlight"
                    />
                    GitHub
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      bounce
                      className="highlight"
                    />
                    Jira
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      bounce
                      className="highlight"
                    />
                    Agile/Scrum Methodology
                  </li>

                  <li>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      bounce
                      className="highlight"
                    />
                    webpack, Babel, npm/yarn
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      bounce
                      className="highlight"
                    />
                    Debugging
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      bounce
                      className="highlight"
                    />
                    Responsive Design
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      bounce
                      className="highlight"
                    />
                    Performance Optimization
                  </li>
                </ul>
              </div>
              <div>
                <h4> Soft Skills </h4>
                <ul>
                  <li>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      bounce
                      className="highlight"
                    />
                    Good Communication
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faHeart}
                      bounce
                      className="highlight"
                    />
                    Team Work
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      bounce
                      className="highlight"
                    />
                    Problem-Solving
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      bounce
                      className="highlight"
                    />
                    Leardership
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      bounce
                      className="highlight"
                    />
                    Quick Learner
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      bounce
                      className="highlight"
                    />
                    Proactive
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      bounce
                      className="highlight"
                    />
                    Attention to Detail
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* {!hide && (
            <div
              onClick={() => {
                setShow(true);
                setHide(true);
              }}
              class="arrow-container animated fadeInDown"
            >
              <div class="arrow-2">
                <i class="fa">
                  <FontAwesomeIcon icon={faAngleDown} />
                </i>
              </div>
              <div class="arrow-1 animated-hinge"></div>
            </div>
          )} */}

          {/* {show && ( */}

          <>
            <div ref={expDiv}>
              <h1 className="skillsHead">Work History</h1>

              <div className="work-history">
                <p className="hisDiv">
                  <div className="grid">
                    <div className="grid-item"> 2023 - 2024</div>
                    <div className=" grid-item">
                      <div className="circle"></div>
                      <div className="borderLeft"></div>
                    </div>
                    <div className="grid-item">
                      Gravity Soft Net, United Arab Emirates <br />
                      Software Developer <br />
                      <ul>
                        <li>
                          Implemented React JS with Material UI for Ecommerce
                          web application using performance optimization
                          techniques, increasing user engagement by 25%.
                        </li>
                        <li>
                          Collaborated with the backend team to integrate UI
                          elements and Integrated Rest API, reducing response
                          time by 15%.
                        </li>
                        <li>
                          Developed reusable components, increasing team
                          productivity by 30%. Wrote scalable and responsive
                          code for all devices and cross-browsers.
                        </li>
                        <li>
                          Worked independently and collaboratively within a team
                          to deliver results.
                        </li>
                        <li>
                          Provided backend support with Node JS REST API
                          development.
                        </li>
                        <li>
                          <a href="https://fazaawb.netlify.app/">
                            {" "}
                            https://fazaawb.netlify.app/
                          </a>{" "}
                          &nbsp;&nbsp;
                          <a href="https://ayntest.netlify.app/">
                            https://ayntest.netlify.app/
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </p>
                <p className="hisDiv">
                  <div className="grid">
                    <div className="grid-item"> 2021 - 2023</div>
                    <div className=" grid-item ">
                      <div className="circle"></div>
                      <div className="borderLeft"></div>
                    </div>

                    <div className="grid-item">
                      KYYBA India Private Ltd, Chennai, India
                      <br />
                      Software Developer
                      <br />
                      <ul>
                        <li>
                          Worked with the Agile Methodology and according to
                          Sprint plans.
                        </li>
                        <li>
                          Designed a responsive and user-engaged web application
                          for ERP System with React JS and Bootstrap.
                        </li>
                        <li>
                          Identified user-facing issues, tested features with a
                          testing framework, and fixed bugs.
                        </li>
                        <li>
                          Applied React performance optimization techniques,
                          resulting in a 50% increase in page load speed and a
                          20% increase in user engagement.
                        </li>
                        <li>
                          Provided server-side support with Java and Spring Boot
                          technologies for API development.
                        </li>
                      </ul>{" "}
                    </div>
                  </div>
                </p>

                <p className="hisDiv">
                  <div className="grid">
                    <div className="grid-item"> 2019 - 2021</div>
                    <div className=" grid-item">
                      <div className="circle"></div>
                      <div className="borderLeft"></div>
                      <div className="circle"></div>
                    </div>

                    <div className="grid-item">
                      Digital Mobile Innovation, Chennai, India
                      <br />
                      Associate Software Developer <br />
                      <ul>
                        <li>
                          Developed and designed Data Analytics web charts using
                          Angular, Amcharts4, and CSS for data analytics.
                        </li>
                        <li>
                          Worked on payment page integration for an e-commerce
                          application, applied authentication and authorization
                          workflows using tokens, and identified and fixed bugs
                          to reduce production issues.
                        </li>
                        <li>
                          Provided support to train AI models using machine
                          learning along with Python.
                        </li>
                        <li>
                          Worked with clients for requirements gathering,
                          implementing functions as per needs, and coding
                          according to technology and industry trends.
                        </li>
                      </ul>
                    </div>
                  </div>
                </p>
              </div>
            </div>

            <div ref={eduDiv}>
              <h1 className="skillsHead">Education</h1>
              <p className="education">
                <ul>
                  <li>
                    {" "}
                    Bachelor of Computer Science and Engineering Anna University
                    BIT-Campus, Trichy 2018 passedout with 7.0 CGPA.
                  </li>

                  <li>
                    Higher Secondary School Vidhya Mandir Matriculation School,
                    Alathiyur, Tamil Nadu, 2012-2014.
                  </li>
                </ul>
              </p>
            </div>

            <div>
              <h1 className="skillsHead">Current Learning</h1>
              <p className="education">
                <ul>
                  <li>NextJs - LinkedIn Learning</li>
                </ul>
              </p>
            </div>
          </>
          {/* )} */}

          {/* <div className="projects">
            <h1 className="skillsHead">Projects</h1>
            <a href="https://fazaastores.com/">
              {" "}
              https://fazaastores.com/
            </a>{" "}
            <br />
            <a href="https://ayntest.netlify.app/">
              https://ayntest.netlify.app/
            </a>
          </div> */}
        </section>
        {/* {show && ( */}
        <>
          <Carousel />
          <footer>
            <hr />
            <div className="contactDetails" ref={cdetailDiv}>
              <p>
                <FontAwesomeIcon icon={faEnvelope} /> s30496usi@gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} /> +971 586971030
              </p>
              <p>
                <FontAwesomeIcon icon={faLocationDot} /> Dubai, UAE
              </p>
              <a
                style={{ color: "#d3b263" }}
                href="https://www.linkedin.com/in/sushmitha-muruganantham/"
              >
                LinkedIn Profile
              </a>
            </div>
            <br />
            Copyright (C) 2013. All rights reserved.
          </footer>
        </>
        {/* )} */}
      </div>
    </>
  );
};

export default Layout;
