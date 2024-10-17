import React from "react";
import "./navbar.css";
// import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const scrollIntoView = (name) => {
    console.log(name, "name-------name");

    switch (name) {
      case "abt":
        const element1 = document.getElementById("about");
        element1.scrollIntoView();
        break;
      // case "edu":
      //   const element2 = document.getElementById("education");
      //   element2.scrollIntoView();
      //   break;
      case "exp":
        const element3 = document.getElementById("experience");
        element3.scrollIntoView();
        break;
      case "skl":
        const element4 = document.getElementById("skill");
        element4.scrollIntoView();
        break;
      case "pro":
        const element5 = document.getElementById("project");
        element5.scrollIntoView();
        break;

      default:
        break;
    }
  };
  return (
    <>
      <nav className="navBar">
        <ul>
          {/* <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/workexperience"> Experience</Link>
          </li>
          <li>
            <Link to="/education">Education</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li> */}
          <li onClick={() => scrollIntoView("abt")}>About</li>
          <li onClick={() => scrollIntoView("skl")}>Skill</li>
          <li onClick={() => scrollIntoView("exp")}>Experience</li>
          {/* <li onClick={() => scrollIntoView("edu")}>Education</li> */}
          <li onClick={() => scrollIntoView("pro")}>Projects</li>
        </ul>
      </nav>
      {/* <Outlet /> */}
    </>
  );
};

export default Navbar;
