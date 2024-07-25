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
      <div>
        {/* <h4 className="skillsHead"> Skills</h4> */}

        <div className={`skills ${colorChange ? "skills-color-change" : ""}`}>
          <div>
            <h4> Technical Skills </h4>
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
                Axios
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                Angular JS
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                Typescript
              </li>

              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                {/* SQL */}
                REST Api
              </li>
            </ul>
          </div>
          <div>
            <h4>Web Styling: </h4>

            <ul>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                Material UI
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                {/* MySQL */}
                Bootstrap
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                {/* Node JS (Basic) */}
                jQuery
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                {/* Java (Basic) */}
                SASS
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                {/* SpringBoot (Basic) */}
                StyledComponents
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                {/* SQL */}
                DataVisualization: AmCharts, Recharts
              </li>
            </ul>
          </div>
          <div>
            <h4>Tools/Practices :</h4>
            <ul>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                GitHub
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                Jira
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                Agile Methodology
              </li>

              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                Build Tools: Webpack, Babel, Npm/yarn
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                Debugging
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                Responsive Design
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHeart} fade className="highlight" />
                Performance Optimization
              </li>
            </ul>
          </div>
          <div>
            <h4> Soft Skills </h4>
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
