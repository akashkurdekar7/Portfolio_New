import React from "react";
import StarsCanvas from "./components/StarsCanvas";
import NavBar from './Helpers/Navbar/NavBar';
import About from "./components/AboutSection/About";
import Footer from './Helpers/Footer/Footer';
import Hero from "./components/HeroSection/Hero";
import Projects from "./components/ProjectSection/Projects";
import Experience from "./components/ExperienceSection/Experience";
import Contact from "./components/ContactSection/Contact";
import Components from "./components/Components";



const App = () => {
  return (
    <>
      <div className="canvasbg">
        <StarsCanvas />
      </div>
      {/* <header className="position-relative">
          <NavBar />
      </header> */}
      <header className="p-5" >
          <Components/>
      </header>

      <main>
        {/* <Hero /> */}
        {/* <About /> */}
        {/* <Skills/> */}
        {/* <Projects/> */}
        {/* <Experience/> */}
        {/* <Contact/> */}
      </main>
      {/* <Footer  style={{marginLeft:"150px"}}/> */}
    </>
  );
};

export default App;
