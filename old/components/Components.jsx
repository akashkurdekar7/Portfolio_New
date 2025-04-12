import React from 'react';
import { motion } from 'framer-motion';

const Components = () => {
  return (
    <section className="home py-5">
      <div className="container d-flex justify-content-center text-center align-items-center">
        <motion.h1
          className="display-4 fw-bold headliner text-capitalize"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi! I'm <span className="name">Akash Kurdekar</span>,<br />
          an engineer and a frontend developer.
        </motion.h1>
      </div>
    </section>
  );
};

export default Components;
