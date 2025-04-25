import React from "react";
import { motion } from "framer-motion";
// import about from "../assets/final/about.jpeg";

const letters = ["A", "B", "O", "U", "T"];

const containerVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 70, damping: 16 }
  }
};

const letterVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.4 + i * 0.08, type: "spring", stiffness: 120 }
  }),
  hover: { scale: 1.18, color: "var(--accent)" }
};

const About = () => {
  return (
    <section className="about">
      <motion.div
        className="about-card gap-0 md-gap-3 d-flex justify-content-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* <div className="img_con">
          <img src={about} alt="Spidey Developer" className="about-image " />
        </div> */}
        <div className="content p-3 text-center">
          <motion.h1
            className="outline-text name"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            about
          </motion.h1>
          <p className="mb-3">
            Hi, I'm a <motion.span className="role" whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 200 }}>Frontend Developer</motion.span> who weaves code just like Spidey swings his web.
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
      </motion.div>

      {/* Animated "ABOUT" letters */}
      <div style={{ display: "flex", justifyContent: "center", gap: "0.2em", marginTop: "1.5em" }}>
        {letters.map((letter, i) => (
          <motion.span
            key={letter}
            className={`letter${i + 1}`}
            custom={i}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            style={{
              fontSize: "2.7rem",
              fontWeight: 700,
              letterSpacing: "0.07em",
              margin: "0 0.04em"
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default About;