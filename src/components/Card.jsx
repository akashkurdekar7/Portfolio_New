// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const Card = ({ title, description, img, link, color }) => {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "start start"],
//   });

//   const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

//   return (
//     <div ref={containerRef} className="card_container">
//       <motion.div
//         style={{ scale, backgroundColor: color }}
//         className="card"
//         onClick={() => window.open(link, "_blank")}
//       >
//         <h1 className="size55">{title}</h1>
//         <p className="size18">{description}</p>
//         <div className="img">
//           <img src={img} alt={title} />
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Card;
