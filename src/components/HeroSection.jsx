import React, { useState } from "react";
import home from "../assets/final/home.webp";
import { BsInstagram, BsSnapchat, BsTwitter } from "react-icons/bs";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { GiSpaceship } from "react-icons/gi";

const HeroSection = () => {
  const [isActive, setIsActive] = useState(false);

  // Toggle function to change state
  const toggleIcons = () => {
    setIsActive(!isActive);
  };

  return (
    <section className="p-0 position-relative" id="home">
      <div className="container">
        <h1
          className="text-uppercase font-spiderman text-color1 text-center"
          style={{ fontSize: "10vw" }}
        >
          Kurdekar
        </h1>
      </div>

      <div className="home_image_con">
        <img src={home} alt="iphone" className="home_img" />
        <div
          className={`hover_layer ${isActive ? "active" : ""}`}
          onClick={toggleIcons}
        ></div>

        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`social_icons instagram ${isActive ? "active" : ""}`}
        >
          <BsInstagram />
        </a>

        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`social_icons facebook ${isActive ? "active" : ""}`}
        >
          <FaFacebook />
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`social_icons twitter ${isActive ? "active" : ""}`}
        >
          <BsTwitter />
        </a>

        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`social_icons linkedin ${isActive ? "active" : ""}`}
        >
          <FaLinkedin />
        </a>

        <a
          href="#"
          className={`social_icons spaceship ${isActive ? "active" : ""}`}
        >
          <GiSpaceship />
        </a>

        <a
          href="https://www.snapchat.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`social_icons snapchat ${isActive ? "active" : ""}`}
        >
          <BsSnapchat />
        </a>

        <a
          href="https://wa.me/yourwhatsapplink"
          target="_blank"
          rel="noopener noreferrer"
          className={`social_icons whatsapp ${isActive ? "active" : ""}`}
        >
          <FaWhatsapp />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
