
import React, {useState, useEffect, useRef} from "react";
import "./Projects.css";
// Image imports
import wildlifeImg from '../../assets/projects/widlife.png';
import ammasPasteryImg from '../../assets/projects/ammaspatery.png';
import contestImg from '../../assets/projects/contest.webp';
import knightBiteImg from '../../assets/projects/knightbite.png';
import kraftopiaImg from '../../assets/projects/kraftopia.png';
import parallaxImg from '../../assets/projects/parallaxWebsite.png';
import vehicleWashImg from '../../assets/projects/vehiclewash.jpg';
import roadSafetyImg from '../../assets/projects/roadsafety.jpg';
import royalBrothersImg from '../../assets/projects/royalbrothers.png';
import moneyConvertImg from '../../assets/projects/money-5459709_1280.png';

const items = [
  {
    title: "Wildlife Conservation Website",
    description: "A beautifully designed website to spread awareness about wildlife conservation efforts.",
    stackUsed: ["HTML", "CSS", "JavaScript"],
    image: wildlifeImg,
  },
  {
    title: "Amma’s Pastry Clone",
    description: "A clone of the Amma’s Pastry website with responsive design and engaging UI.",
    stackUsed: ["React", "Bootstrap"],
    image: ammasPasteryImg,
  },
  {
    title: "Online Contest Platform",
    description: "A platform for hosting online contests and displaying real-time leaderboards.",
    stackUsed: ["React", "Node.js", "MongoDB"],
    image: contestImg,
  },
  {
    title: "Knight Bite Clone",
    description: "A fast food delivery website clone featuring interactive UI and animations.",
    stackUsed: ["React", "Framer Motion", "CSS"],
    image: knightBiteImg,
  },
  {
    title: "Kraftopia Portfolio",
    description: "A creative portfolio website for showcasing artworks and creative products.",
    stackUsed: ["HTML", "CSS", "JavaScript"],
    image: kraftopiaImg,
  },
  {
    title: "Parallax One-Page Website",
    description: "A visually engaging parallax scrolling site built for smooth storytelling.",
    stackUsed: ["React", "Framer Motion", "Styled Components"],
    image: parallaxImg,
  },
  {
    title: "Vehicle Wash Management System",
    description: "A complete booking and management system for vehicle washing services.",
    stackUsed: ["Node.js", "Express", "MongoDB", "Bootstrap"],
    image: vehicleWashImg,
  },
  {
    title: "Smart Road Safety System",
    description: "A project integrating sensors and alerts to reduce road accidents using IoT.",
    stackUsed: ["Embedded C", "React", "Firebase"],
    image: roadSafetyImg,
  },
  {
    title: "Royal Brothers Clone",
    description: "Clone of the Royal Brothers bike rental website with rental flow integration.",
    stackUsed: ["HTML", "CSS", "JavaScript"],
    image: royalBrothersImg,
  },
  {
    title: "Currency Converter",
    description: "A multi-currency converter that supports INR, USD, and AED with real-time rates.",
    stackUsed: ["React", "REST API", "Tailwind CSS"],
    image: moneyConvertImg,
  },
];

const Project = () => {

  
  const [rotationAngle, setRotationAngle] = useState(0);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef(null);
  const [fullscreenCard, setFullscreenCard] = useState(null);

  // Calculate positions for each card to form a C shape
  const getCardStyle = (index) => {
    const totalItems = items.length;
    const middleIndex = Math.floor(totalItems / 2);

    // Calculate the angle in the C-shaped arc
    // Map the index to an angle between -75 and 75 degrees
    const maxAngle = 75; // Max angle of the C shape
    const angleStep = (maxAngle * 2) / (totalItems - 1);
    const angle = -maxAngle + index * angleStep;

    // Calculate the distance from the center for the C shape
    const radius = 600; // Radius of our C shape

    // Convert angle to radians for positioning
    const angleRad = (angle * Math.PI) /90;

    // Calculate x and z positions on the C shape
    const x = Math.sin(angleRad) * radius;
    const z = Math.cos(angleRad) * radius - radius;

    // Calculate scale and opacity based on distance from active index
    const distance = Math.abs(index - activeIndex);
    const scale = 1 - Math.min(distance * 0.05, 0.3);
    const opacity = 1 - Math.min(distance * 0.15, 0.7);

    // Determine if this card is active
    const isActive = index === activeIndex;

    return {
      transform: `translateX(${x}px) translateZ(${z}px) rotateY(${-angle}deg) scale(${scale})`,
      opacity,
      zIndex: totalItems - distance,
      filter: isActive ? "none" : "brightness(0.7)",
    };
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(activeIndex);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const dragDistance = (x - startX) / 100; // Adjust sensitivity

    // Update the active index based on drag distance
    const newIndex = Math.round(scrollLeft - dragDistance);

    // Constrain to valid indices
    if (newIndex >= 0 && newIndex < items.length) {
      setActiveIndex(newIndex);
    }
  };

  const handleCardClick = (index) => {
    if (index === activeIndex) {
      setFullscreenCard(items[index]);
    } else {
      setActiveIndex(index);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      handlePrev();
    } else if (e.key === "ArrowRight") {
      handleNext();
    } else if (e.key === "Escape" && fullscreenCard) {
      setFullscreenCard(null);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [fullscreenCard]);

  return (
    <div className="project-slider-container" id="projects">
      <div
        ref={containerRef}
        className="project-slider-stage"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}>
        <div className="project-slider-track">
          {items.map((item, index) => (
            <div
              key={index}
              className={`project-card ${
                index === activeIndex ? "active" : ""
              }`}
              style={getCardStyle(index)}
              onClick={() => handleCardClick(index)}>
              <div className="project-card-image-container">
                <img
                  src={item.image}
                  alt={item.title}
                  className="project-card-image"
                  loading="lazy"
                />
              </div>
              <div className="project-card-overlay">
                <h3 className="project-card-title">{item.title}</h3>
                {index === activeIndex && (
                  <p className="project-card-description">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="project-controls">
        <button
          className="project-control prev"
          onClick={handlePrev}
          aria-label="Previous slide">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button
          className="project-control next"
          onClick={handleNext}
          aria-label="Next slide">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Fullscreen view */}
      {fullscreenCard && (
        <div
          className="project-fullscreen-overlay"
          onClick={() => setFullscreenCard(null)}>
          <div
            className="project-fullscreen-content"
            onClick={(e) => e.stopPropagation()}>
            <button
              className="project-fullscreen-close-btn"
              onClick={() => setFullscreenCard(null)}
              aria-label="Close fullscreen view">
              &times;
            </button>
            <div className="project-fullscreen-image-container">
              <img
                src={fullscreenCard.image}
                alt={fullscreenCard.title}
                className="project-fullscreen-image"
              />
            </div>
            <div className="project-fullscreen-details">
              <h2>{fullscreenCard.title}</h2>
              <p>{fullscreenCard.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default Project;
