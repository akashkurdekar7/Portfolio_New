import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container h-100">
        <h1 className="text-center mb-4">
          Contact
        </h1>
        <h3 className="heading">
          Email:
          <span className="ms-2">
            <img src="" alt="" />
          </span>
        </h3>

        <div className="social mt-4 d-flex  gap-3">
          <h3 className="heading mb-3">Social Media:</h3>
          <div className="d-flex gap-3">
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white">
              Instagram
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white">
              LinkedIn
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
