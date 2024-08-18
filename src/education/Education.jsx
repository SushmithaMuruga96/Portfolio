import React from "react";
import "./education.css";

const Education = () => {
  return (
    <>
      <div className="education">
        {/* <h4 className="skillsHead">Education</h4> */}
        <h4>Bachelor of Computer Science and Engineering</h4>
        <ul>
          <li>Anna University BIT-Campus, Trichy</li>
          <li>Graduated in 2018 with a 7.5 CGPA</li>
        </ul>
        <h4> Higher Secondary School </h4>
        <ul>
          <li>Vidhya Mandir Matriculation School, Alathiyur, Tamil Nadu,</li>{" "}
          <li>2012-2014 passed out.</li>
        </ul>

        {/* <h4>Current Learning</h4>
        <ul>
          <li>NextJs - LinkedIn Learning</li>
        </ul> */}
      </div>
    </>
  );
};

export default Education;
