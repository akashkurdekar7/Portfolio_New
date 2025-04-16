import React from "react";
import { Link } from "react-router-dom";
import bear from "../assets/error/work-in-progress.png";
import { motion } from "framer-motion";

const UnderProcess = () => {
  return (
    <section className="error vh-100 d-flex justify-content-center align-items-center position-relative text-center px-3">
      <div className="container mt-md-5 position-relative">
        <img
          src={bear}
          alt="Work in progress - return to home page"
          className="img-fluid"
          style={{ maxWidth: "300px" }}
        />

        <h1 className="display-4 fw-bold">Uh-oh! This page is under construction.</h1>
        <p className="lead">Looks like you've wandered off. But don’t worry, I’ll guide you back!</p>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4"
        >
          <Link to="/" className="btn text-uppercase">
            Back to Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default UnderProcess;
