import wildlifeImg from "../assets/projects/widlife.png";
import ammasPasteryImg from "../assets/projects/ammaspatery.png";
import contestImg from "../assets/projects/contest.webp";
import knightBiteImg from "../assets/projects/knightbite.png";
import kraftopiaImg from "../assets/projects/kraftopia.png";
import parallaxImg from "../assets/projects/parallaxWebsite.png";
import vehicleWashImg from "../assets/projects/vehiclewash.jpg";
import roadSafetyImg from "../assets/projects/roadsafety.jpg";
import royalBrothersImg from "../assets/projects/royalbrothers.png";
import moneyConvertImg from "../assets/projects/money-5459709_1280.png";

const projectData = [
  {
    title: "Wildlife Conservation Initiative",
    description: "An impactful initiative focused on wildlife conservation, habitat preservation, and environmental education.",
    img: wildlifeImg,
    overview: "A web platform designed to raise awareness about endangered species and promote conservation efforts. The site features interactive maps, educational resources, and community engagement tools.",
    technologies: ["React", "Node.js", "MongoDB", "Mapbox"],
    role: "Full Stack Developer",
    features: [
      "Interactive map of wildlife habitats",
      "Educational blog and resources",
      "User registration and community forum",
      "Donation and volunteer sign-up forms"
    ],
    challenges: [
      "Integrating real-time wildlife data APIs",
      "Designing an intuitive and accessible UI for diverse audiences"
    ],
    githubLink: "https://github.com/akashkurdekar7",
    date: "2023-05"
  },
  {
    title: "Parallax Single-Page Website",
    description: "A beautifully animated single-page site with Framer Motion and scroll effects.",
    img: parallaxImg,
    overview: "A visually rich single-page website demonstrating advanced parallax and scroll-based animations using Framer Motion.",
    technologies: ["React", "Framer Motion", "SCSS"],
    role: "Frontend Developer & Designer",
    features: [
      "Smooth parallax scrolling",
      "Animated content sections",
      "Responsive design"
    ],
    challenges: [
      "Optimizing animation performance",
      "Ensuring cross-browser compatibility"
    ],
    demoLink: "https://parallax-website-ecru.vercel.app/",
    githubLink: "https://github.com/akashkurdekar7/parallax_website",
    date: "2025-02"
  },
  {
    title: "Smart Road Safety System",
    description: "An IoT-enabled system for detecting and alerting potholes and speed bumps.",
    img: roadSafetyImg,
    overview: "A smart system using IoT sensors to monitor road conditions and alert drivers about hazards in real-time.",
    technologies: ["Arduino", "React", "Firebase", "Google Maps API"],
    role: "IoT Developer & Web Integrator",
    features: [
      "Real-time hazard detection",
      "Alert notifications for drivers",
      "Data visualization dashboard"
    ],
    challenges: [
      "Reliable sensor data transmission",
      "Real-time map updates"
    ],
    githubLink: "https://github.com/yourusername/road-safety-system",
    date: "2024-01"
  },
  {
    title: "Knight-Bite Clone",
    description: "A responsive clone of the Knight-Bite food delivery website.",
    img: knightBiteImg,
    overview: "A pixel-perfect UI/UX clone of the popular Knight-Bite food delivery platform, focusing on responsiveness and interactivity.",
    technologies: ["React", "Bootstrap", "CSS3"],
    role: "Frontend Developer",
    features: [
      "Responsive layouts for desktop and mobile",
      "Animated menu transitions",
      "Interactive cart"
    ],
    githubLink: "https://github.com/yourusername/knight-bite-clone",
    date: "2024-10"
  },
  {
    title: "Vehicle Service Management System",
    description: "A full-stack app to manage vehicle servicing, bookings, and reminders.",
    img: vehicleWashImg,
    overview: "A management system for vehicle service centers to track bookings, service history, and customer reminders.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    role: "Full Stack Developer",
    features: [
      "Booking and scheduling system",
      "Automated service reminders",
      "Admin dashboard"
    ],
    githubLink: "https://github.com/yourusername/vehicle-service-management",
    date: "2022-08"
  },
  {
    title: "Royal Brothers Clone",
    description: "A UI clone of Royal Brothers' bike rental website with responsive design.",
    img: royalBrothersImg,
    overview: "A modern, responsive clone of the Royal Brothers bike rental platform, focusing on UI/UX and mobile-first design.",
    technologies: ["React", "TailwindCSS"],
    role: "Frontend Developer",
    features: [
      "Responsive grid layouts",
      "Booking form UI",
      "Image gallery"
    ],
    githubLink: "https://github.com/yourusername/royal-brothers-clone",
    date: "2025-10"
  },
  {
    title: "Amma’s Pastry Clone",
    description: "A sweet and responsive UI clone of Amma’s Pastry website for bakery lovers.",
    img: ammasPasteryImg,
    overview: "A visually appealing clone of Amma’s Pastry website, with a focus on typography and imagery.",
    technologies: ["React", "CSS3"],
    role: "Frontend Developer",
    features: [
      "Photo-rich product showcase",
      "Responsive design",
      "Custom fonts and colors"
    ],
    githubLink: "https://github.com/yourusername/ammas-pastry-clone",
    date: "2025-10"
  },
  {
    title: "Kraftopia Website",
    description: "A colorful, creative website built for Kraftopia with handmade design vibes.",
    img: kraftopiaImg,
    overview: "A creative website for Kraftopia, featuring custom illustrations and playful animations.",
    technologies: ["React", "GSAP", "SVG"],
    role: "Frontend Developer & Illustrator",
    features: [
      "Custom SVG illustrations",
      "Animated hero section",
      "Gallery and contact form"
    ],
    githubLink: "https://github.com/yourusername/kraftopia-website",
    date: "2023-08"
  },
  {
    title: "Contest Voting Platform",
    description: "A platform for hosting and voting on creative contests, integrated with Firebase.",
    img: contestImg,
    overview: "A web app for hosting contests, allowing users to submit entries and vote, with real-time updates via Firebase.",
    technologies: ["React", "Firebase", "Material UI"],
    role: "Full Stack Developer",
    features: [
      "User authentication",
      "Entry submission",
      "Live voting and results"
    ],
    githubLink: "https://github.com/yourusername/contest-voting-platform",
    date: "2023-06"
  },
  {
    title: "Currency Converter",
    description: "A sleek currency converter app for INR, USD, and AED with real-time exchange rates.",
    img: moneyConvertImg,
    overview: "A simple and intuitive currency converter supporting INR, USD, and AED, fetching real-time rates from an external API.",
    technologies: ["React", "REST API", "Bootstrap"],
    role: "Frontend Developer",
    features: [
      "Real-time currency conversion",
      "Clean, modern UI",
      "Error handling for API failures"
    ],
    githubLink: "https://github.com/yourusername/currency-converter",
    date: "2024-11"
  }
];

export default projectData;