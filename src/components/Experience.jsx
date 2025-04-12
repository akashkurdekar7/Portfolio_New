import React from "react";
import {motion} from "framer-motion";

const EXPERIENCES = [
  {
    year: "May 2023 – Aug 2023",
    company: "Varcons Technologies Pvt. Ltd, Bengaluru",
    role: "Full Stack Web Developer Intern",
    description:
      "• Designed and developed responsive web pages for a Wildlife Conservation site using React.js, HTML, CSS, and JavaScript.\n• Translated client specifications into intuitive and visually appealing user interfaces.\n• Optimized frontend performance and ensured cross-browser compatibility.",
    technologies: ["React.js", "HTML", "CSS", "JavaScript"],
  },
  {
    year: "Aug 2023 – Oct 2023",
    company: "Deshpande Startups, Hubballi",
    role: "Full Stack Web Development Intern",
    description:
      "• Developed a full-stack e-commerce platform (MERN stack) with a dynamic UI and smooth API integration.\n• Designed reusable UI components to maintain consistency and performance across the platform.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Figma",
      "Styled Components",
      "UI/UX",
      "Postman",
    ],
  },
  {
    year: "Feb 2025 – Present",
    company: "Pixtar",
    role: "Frontend Developer",
    description:
      "• Building responsive and user-friendly interfaces using React.js and Tailwind CSS.\n• Collaborating with the UI/UX team to translate Figma designs into production-ready code.\n• Implementing performance optimizations and integrating REST APIs.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "REST APIs",
      "Angular",
      "Bootstrap",
      "Web Vitals",
    ],
  },
];


const Experience = () => {
  return (
    <section id="experience" className="py-5">
      <div className="container">

      
        <motion.h2
          className="text-center text-white fw-bold mb-5"
          initial={{opacity: 0, y: -100}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}>
          Experience<h1 className="text-white">under development</h1>
        </motion.h2>

        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="row mb-4 align-items-start">
            <motion.div
              className="col-lg-3 col-12 mb-2"
              initial={{opacity: 0, x: -100}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 1}}>
              <p className="text-secondary small mb-0">{experience.year}</p>
            </motion.div>

            <motion.div
              className="col-lg-9 col-12"
              initial={{opacity: 0, x: 100}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 1}}>
              <h5 className="text-white fw-semibold mb-1 d-flex align-items-center gap-2">
                {experience.role}
                <span className="text-secondary fw-normal d-flex align-items-center gap-2">
                  - {experience.company}
                  {experience.logo && (
                    <img
                      src={experience.logo}
                      alt={experience.company}
                      className="ms-2"
                      style={{
                        width: "25px",
                        height: "25px",
                        objectFit: "contain",
                      }}
                    />
                  )}
                </span>
              </h5>

              <p className="text-secondary small mb-2">
                {experience.description}
              </p>
              <div className="d-flex flex-wrap gap-2 mt-2">
                {experience.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="badge bg-dark text-white px-2 py-1 fw-medium d-flex align-items-center gap-1 rounded">
                    {tech.icon && (
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        style={{
                          width: "16px",
                          height: "16px",
                          objectFit: "contain",
                        }}
                      />
                    )}
                    {tech.name}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
