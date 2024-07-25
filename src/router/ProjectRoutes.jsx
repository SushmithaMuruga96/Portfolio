import { Route, Routes } from "react-router-dom";
import About from "../about/About";
import Skills from "../skills/Skills";
import Experience from "../WorkExperience/Experience";
import Education from "../education/Education";
import Projects from "../projects/Projects";

const ProjectRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/workexperience" element={<Experience />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/education" element={<Education />} />
    </Routes>
  );
};

export default ProjectRoutes;
