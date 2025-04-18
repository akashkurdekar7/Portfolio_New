import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

const Home = () => {
  const [hover, setHover] = useState(false);

  const isHovered = () => {
    setHover(!hover);
  };


  const [dateTime, setDateTime] = useState(new Date());
  
    useEffect(() => {
      const timer = setInterval(() => {
        setDateTime(new Date());
      }, 1000);
      return () => clearInterval(timer);
    }, []);
  
    const date = dateTime.toLocaleDateString();
    const time = dateTime.toLocaleTimeString();
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


      <footer className="position-absolute bottom-0 w-100">
      {/* <footer className=' w-100'> */}
      <div className="d-flex justify-content-between align-items-center footer_content">
        <h3 className="email size18 text-uppercase">
          <a href="mailto:akashkurdekar39@gmail.com">
            akashkurdekar39@gmail.com
          </a>
        </h3>
        <div className="dateTime size18">
          <span>{date}</span>
          <span>{time}</span>
        </div>
      </div>
    </footer>
    </section>
  );
};

export default Home;
