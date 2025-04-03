import React, { useState } from "react";

const Contact = () => {
  const letters = "Get your demo".split("").map((char) => (char === " " ? "\u00A0" : char));

  const [positions] = useState(
    letters.map(() => ({
      top: `${Math.random() * 80}%`,
      left: `${Math.random() * 80}%`,
    }))
  );

  return (
    <section id="contact" className="contact">
      <div className="container position-relative d-flex align-items-center" style={{ height: "80vh" }}>
        <div className="hover_inline">
          {letters.map((letter, index) => (
            <span
              key={index}
              style={{
                top: positions[index].top,
                left: positions[index].left,
              }}
              className={`text-uppercase size90 word word-${index + 1}`}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
