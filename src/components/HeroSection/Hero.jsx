import React, {useState, useEffect} from "react";
import home from "../../assets/final/home.webp";
import {BsInstagram, BsSnapchat, BsTwitter} from "react-icons/bs";
import {FaFacebook, FaLinkedin, FaWhatsapp} from "react-icons/fa";
import {GiSpaceship} from "react-icons/gi";
import "./Hero.css";

const socialMedia = [
  {
    icon: <BsInstagram />,
    className: "instagram",
    link: "https://www.instagram.com",
  },
  {
    icon: <FaFacebook />,
    className: "facebook",
    link: "https://www.facebook.com",
  },
  {icon: <BsTwitter />, className: "twitter", link: "https://twitter.com"},
  {
    icon: <FaLinkedin />,
    className: "linkedin",
    link: "https://www.linkedin.com",
  },
  {icon: <GiSpaceship />, className: "spaceship", link: "#"},
  {
    icon: <BsSnapchat />,
    className: "snapchat",
    link: "https://www.snapchat.com",
  },
  {
    icon: <FaWhatsapp />,
    className: "whatsapp",
    link: "https://wa.me/yourwhatsapplink",
  },
];

const Hero = () => {
  const [isActive, setIsActive] = useState(false);
  const [positions, setPositions] = useState([]);

  const toggleIcons = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const iconStartPos = document
      .querySelector(".home_img")
      ?.getBoundingClientRect();

    if (isActive && iconStartPos) {
      const offset = 10; // start offset
      const maxRange = 80; // max spread
      const iconBuffer = 5;

      const newPositions = socialMedia.map(() => {
        const top = Math.random() * (maxRange - iconBuffer) + offset;
        const left = Math.random() * (maxRange - iconBuffer) + offset;

        return {
          top: `${top.toFixed(2)}vh`,
          left: `${left.toFixed(2)}vw`,
        };
      });

      setPositions(newPositions);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isActive]);

  return (
    <section className="p-0 position-relative" id="home">
      <div className="container-fluid h-100">
        <h1 className="text-uppercase font-spiderman text-color1 text-center headliner">
          Frontend Developer
        </h1>
      </div>

      <img src={home} alt="iphone" className="home_img" />

      <div
        className={`hover_layer ${isActive ? "active" : ""}`}
        onClick={toggleIcons}></div>

      <div className="social_links" style={{zIndex: isActive ? 20 : -1}}>
        {socialMedia.map((social, index) => {
          const homeImg = document.querySelector(".home_img");
          const rect = homeImg?.getBoundingClientRect();
          const centerTop = rect ? `${rect.top + rect.height / 2}px` : "50%";
          const centerLeft = rect ? `${rect.left + rect.width / 2}px` : "50%";

          return (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`social_icons ${social.className}`}
              style={
                isActive
                  ? {
                      top: positions[index]?.top,
                      left: positions[index]?.left,
                      opacity: 1,
                    }
                  : {
                      top: centerTop,
                      left: centerLeft,
                      opacity: 0,
                    }
              }>
              {social.icon}
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
