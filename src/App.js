// import "./App.css";
import "./index.css";
import Navbar from "./header/navbar/NavBar";
import Footer from "./footer/Footer";
// import ProjectRoutes from "./router/ProjectRoutes";
import "./about/about.css";
// import Mypic from "../src/assets/Image.jpeg";
import About from "./about/About";
import Skills from "./skills/Skills";
import Experience from "./WorkExperience/Experience";
import Education from "./education/Education";
import Projects from "./projects/Projects";
import Carousel from "./resuableComponents/CarouselComopnent";

function App() {
  // const scrollToDiv = (ref) => {
  //   ref.current.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //   });
  // };
  return (
    <>
      <Navbar />
      <div className="bg">
        {/* <ProjectRoutes /> */}
        <About />
        <Skills />
        <Experience />
        {/* <Education /> */}
        <Projects />
        <Carousel />

        <div className="links">
          <h4 className="skillsHead">Links</h4>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/sushmitha-muruganantham/">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/SushmithaMuruga96">GitHub</a>
            </li>
            <li>
              <a href="https://fazaawb.netlify.app/"> Ecom-Project1 </a>
            </li>
            <li>
              <a href="https://ayntest.netlify.app/">Ecom-Project2</a>
            </li>
            <li>
              <a href="https://www.wbu.com/">Ecom-Project3</a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
