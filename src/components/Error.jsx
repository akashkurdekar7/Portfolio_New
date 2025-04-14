import React from "react";
import {Link} from "react-router-dom";
import bear from "../assets/error/system.png";
import {motion} from "framer-motion";

const Error = () => {
  return (
    <section className="error vh-100 d-flex justify-content-center align-items-center position-relative text-center px-3">
      <div className="container mt-md-5 position-relative">
        <img
          src={bear}
          alt="error - return to home page"
          className="img-fluid"
          style={{maxWidth: "300px"}}
        />

        <h1 className="display-4 fw-bold">Oops! You lost your way.</h1>
        <p className="lead">Wrong path taken. Don’t worry, I can help!</p>

        <motion.div
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.95}}
          className="mt-4">
          <Link to="/" className="btn text-uppercase">
            Let’s go to the home page
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Error;
