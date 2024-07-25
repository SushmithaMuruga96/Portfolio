// import "./App.css";
import "./index.css";
import Navbar from "./header/navbar/NavBar";
import Footer from "./footer/Footer";
import ProjectRoutes from "./router/ProjectRoutes";

function App() {
  // const scrollToDiv = (ref) => {
  //   ref.current.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //   });
  // };
  return (
    <>
      <div className="bg">
        <div className="header">
          <h2>Sushmitha Muruganantham </h2>
          <h4>Front-End Developer | React JS Developer</h4>
        </div>

        <Navbar />
        <ProjectRoutes />
      </div>
      <Footer />
    </>
  );
}

export default App;
