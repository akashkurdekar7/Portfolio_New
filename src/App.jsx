import React from "react";
import "./components/section.css";
import HeroSection from "./components/HeroSection";
import StarsCanvas from "./components/StarsCanvas";
import NavBar from './Helpers/Navbar/NavBar';
import Skills from "./components/Skills";
import About from "./components/About";
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './Helpers/Footer/Footer';
import Projects from './components/Projects';



const App = () => {
  return (
    <>
      <div className="canvasbg">
        <StarsCanvas />
      </div>
      <header className="position-relative">
        <div className="container">
          <NavBar />
        </div>
      </header>

      <main>
        <HeroSection />
        <About />
        {/* <Skills/> */}
        {/* <Projects/> */}
        {/* <Experience/> */}
        {/* <Contact/> */}
      </main>
      <Footer/>
    </>
  );
};

export default App;
