import React from "react";
import {motion} from "framer-motion";
import github from "../assets/social_icons/github.png";
import whatsapp from "../assets/social_icons/whatsapp.png";
import snapchat from "../assets/social_icons/snapchat.png";
import facebook from "../assets/social_icons/facebook.png";
import instagram from "../assets/social_icons/instagram.png";
import linkedin from "../assets/social_icons/linkedin.png";
import arrow from "../assets/contact/arrow2.png";
import mail from "../assets/contact/email.png";

const socialLinks = [
  {
    href: "https://www.instagram.com/unlikeakash_/",
    src: instagram,
    alt: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/akashkurdekar/",
    src: linkedin,
    alt: "LinkedIn",
  },
  {
    href: "https://github.com/akashkurdekar7",
    src: github,
    alt: "GitHub",
  },
  {
    href: "https://wa.me/919916390580",
    src: whatsapp,
    alt: "WhatsApp",
  },
  {
    href: "https://www.snapchat.com/add/akash_kurdekar",
    src: snapchat,
    alt: "Snapchat",
  },
  {
    href: "https://www.facebook.com/profile.php?id=100008575723501",
    src: facebook,
    alt: "Facebook",
  },
];

const fadeUp = {
  hidden: {opacity: 0, y: 40},
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <motion.div
        className="container h-100"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.3}}>
        <motion.h1
          className="text-center text-md-start ms-md-4 w-100"
          variants={fadeUp}
          custom={1}>
          Contact
        </motion.h1>
        <motion.hr className="line" variants={fadeUp} custom={2} />

        <div className="container-fluid">
          <div className="row justify-content-center align-items-center">
            <motion.div
              className="col-12 col-md-5 mb-4 text-center text-md-end"
              variants={fadeUp}
              custom={3}>
              <div className="d-flex justify-content-center justify-md-content-end align-items-center gap-2 mt-2">
                <img src={mail} alt="mail me" className="email_icon" />
                <h3 className="size18 m-0">Email:</h3>
              </div>

                <img src={arrow} alt="Send Email Icon" className="email_img" />
            </motion.div>

            <motion.div
              className="col-12 col-md-7 text-center"
              variants={fadeUp}
              custom={4}>
              <div className="social mt-md-4 d-flex flex-column align-items-center gap-3 w-100">
                <h3 className="size18 mb-3 text-md-end">Social Media:</h3>
                <div className="social-links d-grid gap-3 justify-content-center">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{scale: 1.2}}
                      whileTap={{scale: 0.95}}
                      transition={{type: "spring", stiffness: 300}}>
                      <img src={link.src} alt={link.alt} width="32" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
