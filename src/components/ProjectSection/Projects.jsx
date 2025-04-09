import React, {useState, useEffect, useRef} from "react";
import "./Projects.css";

const items = [
  {
    id: 1,
    title: "Amma's Pastry Clone",
    description:
      "Recreated Amma's Pastry website with responsive design, rich visuals, and intuitive navigation.",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=900",
  },
  {
    id: 2,
    title: "Online Contest Platform",
    description:
      "Developed a frontend for a contest platform with leaderboard logic, timer integration, and form validation.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=900",
  },
  {
    id: 3,
    title: "Knight-Bite Clone",
    description:
      "Cloned the Knight-Bite food delivery site using React, with animations and smooth scrolling behavior.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=900",
  },
  {
    id: 4,
    title: "Kraftopia Landing Page",
    description:
      "Designed a fictional arts & crafts website with a product showcase layout and hover animations.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&h=900",
  },
  {
    id: 5,
    title: "Expense Tracker Dashboard",
    description:
      "Built a responsive expense tracker using React, charts, and local storage for budget visualization.",
    image:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&h=900",
  },
  {
    id: 6,
    title: "Parallax Portfolio Site",
    description:
      "Created a parallax single-page website with scroll-based animations and optimized Lighthouse scores.",
    image:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&h=900",
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
    const angleRad = (angle * Math.PI) / 180;

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
    <div className="project-slider-container">
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
