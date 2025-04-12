import React from "react";
import about from "../assets/final/about.jpeg";

const About = () => {
  return (
    <section className="about">

      <div className="about-card gap-0 md-gap-3 d-flex justify-content-center" >

        <div className="img_con">
          <img src={about} alt="Spidey Developer" className="about-image " />
        </div>
        <div className="content p-3">
          <h2 className=" text-md-start text-center">
            about
          </h2>
          <p className="mb-3 text-md-start text-center">
            Hi, I'm a Frontend Developer who weaves code just like Spidey swings his web.
          </p>
          <p className=" size18 mb-3 text-justify">
            I’m driven by a love for clean, intuitive design and a passion for
            bringing ideas to life on the web. Think of me as a digital
            Spider-Man—navigating through lines of code, scaling challenges with
            creativity, and landing smooth, sleek web experiences with flair.
          </p>
          <p className="size18 mb-3 text-justify">
            Whether it's building interactive animations or designing responsive
            layouts, I approach each project with the precision and excitement
            of a superhero’s city swing.
          </p>
          <p className="size18">
            Let’s create something truly amazing, one web at a time. 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
