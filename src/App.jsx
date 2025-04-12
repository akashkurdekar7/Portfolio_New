import React from "react";
import StarsCanvas from "./components/StarsCanvas";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from './components/Footer';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from './components/About';
import Error from './components/Error';
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
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
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
