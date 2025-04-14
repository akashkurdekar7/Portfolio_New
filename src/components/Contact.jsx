import React from "react";
import email from "../assets/contact/send-mail.png";
import github from "../assets/social_icons/github.png";
import whatsapp from "../assets/social_icons/whatsapp.png";
import snapchat from "../assets/social_icons/snapchat.png";
import facebook from "../assets/social_icons/facebook.png";
import instagram from "../assets/social_icons/instagram.png";
import linkedin from "../assets/social_icons/linkedin.png";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container h-100">
        <h1 className="text-center text-md-start mb-4 ms-md-4 w-100">Contact</h1>
        <hr className="line" />

        <div className="row justify-content-center align-items-start">
          {/* Email Section */}
          <div className="col-12 col-md-6 mb-4">
            <h3 className="heading d-flex align-items-center gap-2">
              Email:
              <span className="d-inline-block">
                <img src={email} alt="Send Email Icon" style={{ width: "32px" }} />
              </span>
            </h3>
          </div>

          {/* Social Section */}
          <div className="col-12 col-md-6">
            <div className="social mt-4 d-flex flex-column gap-3">
              <h3 className="heading mb-3">Social Media:</h3>
              <div className="d-flex flex-wrap gap-3">
                <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <img src={instagram} alt="Instagram" width="32" />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} alt="LinkedIn" width="32" />
                </a>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <img src={github} alt="GitHub" width="32" />
                </a>
                <a href="https://wa.me/yourwhatsapp" target="_blank" rel="noopener noreferrer">
                  <img src={whatsapp} alt="WhatsApp" width="32" />
                </a>
                <a href="https://snapchat.com/add/yourusername" target="_blank" rel="noopener noreferrer">
                  <img src={snapchat} alt="Snapchat" width="32" />
                </a>
                <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <img src={facebook} alt="Facebook" width="32" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
