import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./skill.css";
const Skills = () => {
  const [colorChange, setColorChange] = useState(false);

  useEffect(() => {
    setColorChange(true);
  }, []);

  return (
    <>
      <div className="mainDiv" id="skill">
        <h4 className="skillsHead"> Skills</h4>

        <div className={`skills ${colorChange ? "skills-color-change" : ""}`}>
          <div>
            <h4> Languages and Frameworks </h4>
            <ul>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                HTML5
              </li>
              <li>
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                CSS3
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                JavaScript (ES6+)
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                Typescript
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                React JS
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                Redux
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                Angular
              </li>
              {/* </ul>
          </div> */}
              {/* <div>
            <h4> UI Styling and Libraries </h4>
            <ul> */}
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                MaterialUI (MUI)
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                Bootstrap
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                {/* SpringBoot (Basic) */}
                Styled Components
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                AmCharts
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                Recharts
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                API Integration
              </li>
              {/* <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                Responsive Design
              </li> */}
              {/* <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                Performance Optimization
              </li> */}
              {/* <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                State Management
              </li> */}
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                Webpack
              </li>
              <li>
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                Java
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                SQL
              </li>
            </ul>
          </div>

          <div>
            <h4> Tools and Practises</h4>
            <ul>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                Jira
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                GitHub
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                Figma
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                IBM Data Analytic Tool
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                Microsoft PowerBI
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                Agile
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                Postman
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                Microsoft SQLServer
              </li>
            </ul>
          </div>

          {/* <div>
            <h4> Backend-End Technologies </h4>
            <ul>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                Node JS
              </li>
              <li>
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                Java
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                SQL
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                Microsoft SQLServer
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                API Integration
              </li>
            </ul>
          </div> */}
          {/* <div>
            <h4>Web Development Practices:</h4>
            <ul> */}

          {/* </ul>
          </div> */}

          <div>
            <h4> Soft skill </h4>
            <ul>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                Good Communication
              </li>
              <li>
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                Team Work
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                Problem-Solving
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                Leardership
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                Quick Learner
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                Proactive
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                Attention to Detail
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Skills;
