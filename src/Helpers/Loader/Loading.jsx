import React, { useEffect, useRef, useState } from "react";
import "./Loading.css";

import spideyLoader from "../assets/loading/spideyLoader.mp4";

const Loading = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [dots, setDots] = useState("");
  const [randomLoading, setRandomLoading] = useState("loading");
  const videoRef = useRef(null);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500);

    return () => clearInterval(dotsInterval);
  }, []);

  useEffect(() => {
    const randomUppercaseInterval = setInterval(() => {
      setRandomLoading(() => {
        let chars = "loading".split("");
        let indices = new Set();

        while (indices.size < 2) {
          indices.add(Math.floor(Math.random() * chars.length));
        }

        indices.forEach((index) => {
          chars[index] = chars[index].toUpperCase();
        });

        return chars.join("");
      });
    }, 500);

    return () => clearInterval(randomUppercaseInterval);
  }, []);

  const handleVideoEnd = () => {
    setFadeOut(true);
    setTimeout(onLoadingComplete, 1000);
  };

  return (
    <section className={`loading-screen ${fadeOut ? "fade-out" : ""}`}>
      <div className="loading-content">
        <h1 className="futuristic-text size130" aria-live="polite">
          {randomLoading}
          <span className="loading-dots">{dots}</span>
        </h1>

        <video
          ref={videoRef}
          src={spideyLoader}
          autoPlay
          muted
          loop={false}
          onEnded={handleVideoEnd}
          className="loading-video"
        ></video>
      </div>
    </section>
  );
};

export default Loading;
