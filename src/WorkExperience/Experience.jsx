import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <div className="main-div" id="experience">
      <h4 className="skillsHead">Work History</h4>

      <div className="sub-div">
        <div className="grid">
          <div className="year grid-item"> 2023 - 2024</div>
          <div className="middle-line">
            <div className="circle"></div>
            <div className="borderLeft"></div>
          </div>
          <div className="grid-item">
            <h4>Software Developer | Gravity Soft Net | Dubai, UAE</h4>
            <ul>
              <li>
                Implemented designs and developed applications using React.js,
                MUI, and modern JavaScript frontend technologies. Developed
                reusable components and designed features aligned with market
                trends.
              </li>
              <li>
                Authored responsive web design to ensure a user-friendly
                experience across multiple devices.
              </li>
              <li>
                Executed lazy loading, code-splitting, and other performance
                optimization techniques to enhance web performance.
              </li>
              <li>
                Collaborated with the backend team to integrate and update
                real-time data using RESTful API services.
              </li>
              <li>
                Adhered to Agile methodology by following Sprint plans using
                Jira.
              </li>
              <li>
                Designed modular, scalable, and readable code, improving team
                productivity and facilitating code reviews.
              </li>
              <li>
                Supported backend development by building RESTful API services
                using Node.js.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sub-div">
        <div className="grid">
          <div className="year grid-item"> 2021 - 2023</div>
          <div className="middle-line">
            <div className="circle"></div>
            <div className="borderLeft"></div>
          </div>

          <div className="grid-item">
            <h4>
              Software Developer | KYYBA India Private Ltd | Chennai, India
            </h4>
            <ul>
              <li>
                Designed responsive and engaging web applications using ReactJS
                and Bootstrap.
              </li>
              <li>
                Identified and debugged user-facing issues by testing the
                features to ensure a smooth user experience.
              </li>
              <li>
                Developed and maintained atomic components in React,
                facilitating consistent and reusable UI elements across the
                application by following atomic design principles.
              </li>
              <li>
                Gained hands-on experience in state management using Redux,
                Redux Toolkit, and Context API.
              </li>
              <li>
                Successfully implemented and maintained multi-language support
                for the application using the i18n package, achieving a seamless
                user experience across different languages and regions.
              </li>
              <li>
                Supported backend development by building RESTful API services
                using Java SpringBoot, SQL, and Microsoft SQL Server.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="sub-div">
        <div className="grid">
          <div className="year grid-item"> 2019 - 2021</div>
          <div className="middle-line">
            <div className="circle"></div>
            <div className="borderLeft"></div>
          </div>

          <div className="grid-item">
            <h4>
              Associate Software Developer | Digital Mobile Innovation |
              Chennai, India
            </h4>
            <ul>
              <li>
                Built data analytics web charts using AngularJS, Amcharts4,
                Recharts, and CSS.
              </li>
              <li>
                Implemented payment page integration, including authentication
                and authorization workflows using JWT tokens. Identified and
                fixed bugs, resulting in an 85% improvement in system
                reliability and a significant reduction in production issues.
              </li>
              <li>
                Collaborated with the team to gather requirements and needs to
                implement complex functionalities.
              </li>
              <li>
                Designed web pages using the latest technologies and industry
                trends.
              </li>
              <li>
                Provided support in training AI models using machine learning
                with Python.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sub-div">
        <div className="grid">
          <div className="year grid-item"> 2014 - 2018</div>
          <div className="middle-line">
            <div className="circle"></div>
            <div className="borderLeft"></div>
          </div>

          <div className="grid-item">
            <h4>Bachelor of Computer Science and Engineering</h4>
            <ul>
              <li>Anna University BIT-Campus, Trichy</li>
              <li>Graduated in 2018 with a 7.5 CGPA</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sub-div">
        <div className="grid">
          <div className="year grid-item"> 2012 - 2014</div>
          <div className="middle-line">
            <div className="circle"></div>
            <div className="borderLeft"></div>
            <div className="circle"></div>
          </div>

          <div className="grid-item">
            <h4> Higher Secondary School </h4>
            <ul>
              <li>Vidhya Mandir Matriculation School, Alathiyur, Tamil Nadu</li>{" "}
              <li>Completed in 2014 with 90% academic score</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
