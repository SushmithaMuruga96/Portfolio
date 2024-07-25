import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <div className="main-div">
      {/* <h4 className="skillsHead">Work History</h4> */}

      <div className="sub-div">
        <div className="grid">
          <div className="year grid-item"> 2023 - 2024</div>
          <div className="middle-line">
            <div className="circle"></div>
            <div className="borderLeft"></div>
          </div>
          <div className="grid-item">
            <h4>Senior Front End Developer | Gravity Soft Net | Dubai, UAE</h4>
            <ul>
              <li>
                Implemented React JS with Material UI for Ecommerce web
                application using performance optimization techniques,
                increasing user engagement by 25%.
              </li>
              <li>
                Collaborated with the backend team to integrate UI elements and
                Integrated Rest API, reducing response time by 15%.
              </li>
              <li>
                Developed reusable components, increasing team productivity by
                30%. Wrote scalable and responsive code for all devices and
                cross-browsers.
              </li>
              <li>
                Worked independently and collaboratively within a team to
                deliver results.
              </li>
              <li>
                Provided backend support with Node JS REST API development.
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
              Front End Developer | KYYBA India Private Ltd | Chennai, India
            </h4>
            <ul>
              <li>
                Worked with the Agile Methodology and according to Sprint plans.
              </li>
              <li>
                Designed a responsive and user-engaged web application for ERP
                System with React JS and Bootstrap.
              </li>
              <li>
                Identified user-facing issues, tested features with a testing
                framework, and fixed bugs.
              </li>
              <li>
                Applied React performance optimization techniques, resulting in
                a 50% increase in page load speed and a 20% increase in user
                engagement.
              </li>
              <li>
                Provided server-side support with Java and Spring Boot
                technologies for API development.
              </li>
            </ul>{" "}
          </div>
        </div>
      </div>

      <div className="sub-div">
        <div className="grid">
          <div className="year grid-item"> 2019 - 2021</div>
          <div className="middle-line">
            <div className="circle"></div>
            <div className="borderLeft"></div>
            <div className="circle"></div>
          </div>

          <div className="grid-item">
            <h4>
              Associate Software Developer | Digital Mobile Innovation |
              Chennai, India
            </h4>
            <ul>
              <li>
                Developed and designed Data Analytics web charts using Angular,
                Amcharts4, and CSS for data analytics.
              </li>
              <li>
                Worked on payment page integration for an e-commerce
                application, applied authentication and authorization workflows
                using tokens, and identified and fixed bugs to reduce production
                issues.
              </li>
              <li>
                Provided support to train AI models using machine learning along
                with Python.
              </li>
              <li>
                Worked with clients for requirements gathering, implementing
                functions as per needs, and coding according to technology and
                industry trends.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
