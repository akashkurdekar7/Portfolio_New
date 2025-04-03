import React from "react";
import about from "../assets/final//about.jpeg";
const About = () => {
  return (
    <section id="about">
      <div className="container h-100 d-flex justify-content-center align-items-center">
        <div className="row tilt">
          <div className="col-5 p-0">
            <img src={about} alt="Spidey Developer" className="about-image" />
          </div>
          <div className="col-7">
            <p className="text-color1 size18">
              🕸 Just a developer🅿️ trying to sling some web and code some
              apps🅿️assionate about crafting innovative and user🅿️riendly web
              experiences🕷 I blend creativity with technology to build something
              truly unique. 🕸 Like 🅿️pidey swings between skyscrapers, I
              navigate between lines of code to create sleek🅿️, interactive, and
              futuristic designs. 🕸 Whether it's designing smooth animations🅿️,
              responsive layouts🅿️, or high-performance applications🅿️, I make
              sure every element works as seamlessly as 🅿️pidey’s web🕸. 🕸 Let’s
              build something amazing together! 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
