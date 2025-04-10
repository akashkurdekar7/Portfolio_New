import React from "react";
import about from "../../assets/final/about.jpeg";
import sticker1 from "../../assets/final/about_sticker1.jpeg"; // Add your sticker image here
import sticker2 from "../../assets/final/about_sticker2.jpeg"; // Add your sticker image here
import sticker3 from "../../assets/final/about_sticker3.jpeg"; // Add your sticker image here
import sticker4 from "../../assets/final/about_sticker4.jpeg"; // Add your sticker image here
import "./About.css";

const About = () => {
  return (
    <section id="about">
  <div className="about-card p-3 gap-0 md-gap-3">
    <div className="img_con">
      <img src={about} alt="Spidey Developer" className="about-image " />
    </div>
    <div className="content bg-white bg-md-dark p-3">
      <h2 className="font-homoarak md-textcolor1 text-md-start text-center">about</h2>
      <p className="mb-3 textred text-md-start text-center">
        Hi, I'm a Developer who weaves code just like Spidey swings his web.
      </p>
      <p className="md-textcolor1 size18 mb-3 text-justify">
        I’m driven by a love for clean, intuitive design and a passion for bringing ideas to life on the web. Think of me as a digital Spider-Man—navigating through lines of code, scaling challenges with creativity, and landing smooth, sleek web experiences with flair.
      </p>
      <p className="md-textcolor1 size18 mb-3 text-justify">
        Whether it's building interactive animations or designing responsive layouts, I approach each project with the precision and excitement of a superhero’s city swing.
      </p>
      <p className="size12 text-muted">
        Let’s create something truly amazing, one web at a time. 🚀
      </p>
    </div>
  </div>
</section>

  )
}

export default About
