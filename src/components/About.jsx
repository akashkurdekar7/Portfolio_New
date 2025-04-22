import React, { useState } from "react";
// import about from "../assets/final/about.jpeg";

const About = () => {

  const [hover, setHover] = useState(false);
  
    const isHovered = () => {
      setHover(!hover);
      console.log("hovered", hover);
    };


  return (
    <section className="about">

      <div className="about-card gap-0 md-gap-3 d-flex justify-content-center" >

        {/* <div className="img_con">
          <img src={about} alt="Spidey Developer" className="about-image " />
        </div> */}
        <div className="content p-3 text-center">
          <h1 className={`outline-text name ${hover ? "hovered" : ""}`}
            onMouseEnter={isHovered}
            onMouseLeave={isHovered}>
            about
          </h1>
          <p className="mb-3">
            Hi, I'm a Frontend Developer who weaves code just like Spidey swings his web.
          </p>
          <p className=" size18 mb-3">
            I’m driven by a love for clean, intuitive design and a passion for
            bringing ideas to life on the web. Think of me as a digital
            Spider-Man—navigating through lines of code, scaling challenges with
            creativity, and landing smooth, sleek web experiences with flair.
          </p>
          <p className="size18 mb-3">
            Whether it's building interactive animations or designing responsive
            layouts, I approach each project with the precision and excitement
            of a superhero’s city swing.
          </p>
          <p className="size18">
            Let’s create something truly amazing, one web at a time. 🚀
          </p>
        </div>
      </div>

      <span className={`letter1 ${hover ? "hovered" : ""}`}>A</span>
      <span className={`letter2 ${hover ? "hovered" : ""}`}>B</span>
      <span className={`letter3 ${hover ? "hovered" : ""}`}>O</span>
      <span className={`letter4 ${hover ? "hovered" : ""}`}>U</span>
      <span className={`letter5 ${hover ? "hovered" : ""}`}>T</span>
    </section>
  );
};

export default About;
