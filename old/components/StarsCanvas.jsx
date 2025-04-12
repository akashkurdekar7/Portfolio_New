import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='white'
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-100 absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }} >
        <Suspense fallback={<div>Loading...</div>}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;


// when using mode use this 
// import { useState, useRef, Suspense, useEffect } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Points, PointMaterial, Preload } from "@react-three/drei";
// import * as random from "maath/random/dist/maath-random.esm";

// const Stars = ({ color }) => {
//   const ref = useRef();
//   const [sphere] = useState(() =>
//     random.inSphere(new Float32Array(5000), { radius: 1.2 })
//   );

//   useFrame((state, delta) => {
//     ref.current.rotation.x -= delta / 10;
//     ref.current.rotation.y -= delta / 15;
//   });

//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       <Points ref={ref} positions={sphere} stride={3} frustumCulled>
//         <PointMaterial
//           transparent
//           color={color}
//           size={0.004}
//           sizeAttenuation
//           depthWrite={false}
//         />
//       </Points>
//     </group>
//   );
// };

// const StarsCanvas = () => {
//   const [bgColor, setBgColor] = useState("black");
//   const [starColor, setStarColor] = useState("red");

//   const getCssVar = (variableName) =>
//     getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();

//   useEffect(() => {
//     const updateColors = () => {
//       setBgColor(getCssVar("--black"));
//       setStarColor(getCssVar("--red"));
//     };

//     updateColors();

//     // Optional: observe class changes to trigger color updates
//     const observer = new MutationObserver(updateColors);
//     observer.observe(document.documentElement, {
//       attributes: true,
//       attributeFilter: ["class"],
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className='w-full h-100 absolute inset-0 z-[-1]'>
//       <Canvas camera={{ position: [0, 0, 1] }} style={{ backgroundColor: bgColor }}>
//         <Suspense fallback={null}>
//           <Stars color={starColor} />
//         </Suspense>
//         <Preload all />
//       </Canvas>
//     </div>
//   );
// };

// export default StarsCanvas;
