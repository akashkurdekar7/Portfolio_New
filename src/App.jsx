import React from "react";
import StarsCanvas from "./components/StarsCanvas";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from './components/About';
import Error from './components/Error';
import Contact from "./components/Contact";
import UnderProcess from "./components/UnderProcess";
import Cursor from "./components/Cursor";
import Projects from "./components/Projects";
import ProjectCaseStudy from "./components/ProjectCaseStudy";

const App = () => {
  return (
    <Router>
      <Cursor />
      <div className="canvasbg">
        <StarsCanvas />
      </div>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<UnderProcess />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;