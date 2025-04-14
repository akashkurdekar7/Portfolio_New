import React, {useState} from "react";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

const Home = () => {
  const [hover, setHover] = useState(false);

  const isHovered = () => {
    setHover(!hover);
  };
  return (
    <section
      id="home"
      className="home-section d-flex align-items-center justify-content-center text-center position-relative">
      <div className="container">
        <motion.h1
          className="display-4 fw-bold"
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}>
          hi! myself{" "}
          <span
            className={`outline-text name ${hover ? "hovered" : ""}`}
            onMouseEnter={isHovered}
            onMouseLeave={isHovered}>
            Akash Kurdekar
          </span>
        </motion.h1>

        <motion.h3
          className="mt-3 fw-light"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1, delay: 0.4}}>
          engineer | frontend developer | UI/UX enthusiast
        </motion.h3>

        

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4"
        >
          <Link to="/contact" className="btn text-uppercase">
            ping me up!
          </Link>
        </motion.div>
      </div>

      <span className={`letter1 ${hover ? "hovered" : ""}`}>A</span>
      <span className={`letter2 ${hover ? "hovered" : ""}`}>K</span>
    </section>
  );
};

export default Home;
