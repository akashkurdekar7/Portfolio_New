import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="timeline">
        <motion.div
          className="timeline-item left mb-4"
          initial={{
            opacity: 0,
            x: -100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
        >
          <div className="content">
            <p className="date">Year: <span className='text-uppercase'>may 2023</span></p>
            <p className="company">Company: <span>Varcons Technologies Pvt. Ltd, Bengaluru</span></p>
            <p className="title text-uppercase">Role: <span>Full Stack Web Developer Intern</span></p>
            <p className="desc">
              • Designed and developed responsive web pages for a Wildlife Conservation site using React.js, HTML, CSS, and JavaScript.
              <br />
              • Translated client specifications into intuitive and visually appealing user interfaces.
              <br />
              • Optimized frontend performance and ensured cross-browser compatibility.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="timeline-item right mb-4"
          initial={{
            opacity: 0,
            x: 100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.6,
          }}
        >
          <div className="content">
            <p className="date fw-bold">Year: <span>aug 2023</span></p>
            <p className="company">Company: <span>Deshpande Start-ups, Hubballi</span></p>
            <p className="title text-uppercase">Role: <span>Full Stack Web Development Intern</span></p>
            <p className="desc">
              • Developed a full-stack e-commerce platform (MERN stack) with a dynamic UI and smooth API integration.
              <br />
              • Designed reusable UI components to maintain consistency and performance across the platform.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="timeline-item left mb-4"
          initial={{
            opacity: 0,
            x: -100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.9,
          }}
        >
          <div className="content">
            <p className="date fw-bold">Year: <span>Feb 2025</span></p>
            <p className="company">Company: <span>Pixtar.ae</span></p>
            <p className="title text-uppercase">Role: <span>Frontend Developer</span></p>
            <p className="desc">
              • Working on developing and maintaining the frontend of a dynamic e-commerce platform.
              <br />
              • Collaborating with design teams to ensure a seamless user experience.
              <br />
              • Optimizing the website for performance and responsiveness.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
