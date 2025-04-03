import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const HeroSection = () => {
  const constraintsRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const letters = "PORTFOLIO".split("");

  return (
    <section id="home" className="py-5" ref={sectionRef}>
      <div className="container-fluid text-center mb-4">
        <h1 className="fw-bold">
          Akash<span className="text-primary"> Kurdekar</span>
        </h1>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3"></div>

          {/* Draggable Box */}
          <div className="col-md-9">
            <div
              ref={constraintsRef}
              className="position-relative bg-dark text-light rounded p-5 d-flex justify-content-center align-items-center overflow-hidden"
              style={{ height: "300px", border: "2px solid white", position: "relative" }}
            >
              {/* Breaking + Falling Letters */}
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  drag
                  dragConstraints={constraintsRef}
                  dragElastic={0.8}
                  initial={{ x: 0, y: "-100vh", opacity: 0 }} // Start hidden & above
                  animate={
                    isInView
                      ? { 
                          x: Math.random() * 200 - 100, // Random x spread
                          y: [0, 200], // Falls down
                          opacity: 1
                        }
                      : {}
                  }
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 10,
                    delay: index * 0.1, // Staggered effect
                  }}
                  className="fw-bold fs-1 cursor-pointer position-absolute"
                  style={{
                    top: `${Math.random() * 50}px`,
                    left: `${index * 40 + 50}px`, // Spread letters horizontally
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
