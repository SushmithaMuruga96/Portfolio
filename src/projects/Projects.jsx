import React from "react";
import "./project.css";
import eecom from "../assets/Free-Eccomerce-Illustrations-Vector-04.png";

import erp from "../assets/erp.png";
import Dataviz from "../assets/Data-Vizualisation.jpg";
import welfare from "../assets/welfare.jpg";
import health from "../assets/health.png";
import location from "../assets/location.jpg";

const Projects = () => {
  return (
    <>
      <h4 className="skillsHead">Domain Experience</h4>

      <div className="card" id="project">
        <div className="card-item">
          <img src={eecom} alt="img"></img>
          <hr />
          <p>
            <b>E-commerce</b> <br />
            General E-commerce platforms and Specialty E-commerce (selling birds
            foods).
          </p>
        </div>
        <div className="card-item">
          <img src={erp} alt="img"></img>
          <hr />
          <p>
            <b>Enterprise Resource Planning (ERP) </b>
            <br />
            ERP system for supermarket management.
          </p>
        </div>
        <div className="card-item">
          <img src={Dataviz} alt="img"></img>
          <hr />
          <p>
            <b>Data visualization</b>
            <br />
            Data visualization for E-commerce and Steel manufacturing
            organization.
          </p>
        </div>
        <div className="card-item">
          <img src={welfare} alt="img"></img>
          <hr />
          <p>
            <b>Government Projects</b>
            <br />
            Jail management systems and People welfare programs.
          </p>
        </div>
        <div className="card-item">
          <img src={health} alt="img"></img>
          <hr />
          <p>
            <b> Healthcare</b>
            <br />
            Project for creating and generating reports for California Dental
            Association.
          </p>
        </div>
        <div className="card-item">
          <img src={location} alt="img"></img>
          <hr />
          <p>
            <b>Location-based Services</b>
            <br />
            Finding the closest markets and shops
          </p>
        </div>
      </div>
    </>
  );
};

export default Projects;
