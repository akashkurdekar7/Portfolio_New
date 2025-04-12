import React from "react";
import StarsCanvas from "./components/StarsCanvas";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <div className="canvasbg">
        <StarsCanvas />
      </div>
      <header >
        <NavBar />
      </header>

      <main>
        <Home />
      </main>
        <Footer/>
    </>
  );
};

export default App;
