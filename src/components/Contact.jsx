import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact py-5">
      <div className="container h-100 text-white">


     
        <h1 className="text-center mb-4">Contact
        <span>
        <h1>under development</h1>
        </span></h1>
        <div className="line mb-4 mx-auto" style={{ width: "60px", height: "3px", backgroundColor: "#E84545" }}></div>

        <h3 className="heading">
          Email:
          <span className="ms-2">
            <a href="mailto:yourmail@example.com" className="text-decoration-none text-info">
              yourmail@example.com
            </a>
          </span>
        </h3>

        <div className="social mt-4">
          <h3 className="heading mb-3">Social Media:</h3>
          <div className="d-flex gap-3">
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white">
              Instagram
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-white">
              LinkedIn
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
