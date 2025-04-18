import React, {useEffect, useRef} from "react";

const Cursor = () => {
  const innerCursorRef = useRef(null);
  const outerCursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (innerCursorRef.current && outerCursorRef.current) {
        const inner = innerCursorRef.current;
        const outer = outerCursorRef.current;
    
        const innerWidth = inner.offsetWidth;
        const innerHeight = inner.offsetHeight;
        const outerWidth = outer.offsetWidth;
        const outerHeight = outer.offsetHeight;
    
        // Calculate positions
        let leftPosition = e.clientX - innerWidth / 2;
        let topPosition = e.clientY - innerHeight / 2;
    
        // Ensure cursor stays within viewport bounds
        if (leftPosition < 0) {
          leftPosition = 0;
        } else if (leftPosition > window.innerWidth - innerWidth) {
          leftPosition = window.innerWidth - innerWidth;
        }
    
        if (topPosition < 0) {
          topPosition = 0;
        } else if (topPosition > window.innerHeight - innerHeight) {
          topPosition = window.innerHeight - innerHeight;
        }
    
        // Set cursor positions
        inner.style.left = `${leftPosition}px`;
        inner.style.top = `${topPosition}px`;
        outer.style.left = `${e.clientX - outerWidth / 2}px`;
        outer.style.top = `${e.clientY - outerHeight / 2}px`;
      }
    };
    

    document.addEventListener("mousemove", moveCursor);

    // Selectors for elements that trigger the "grow" effect on the cursor
    const growSelector =
      "a, button, .mode , .mail, p, .dotgrid, img, input, textarea, label, h1, h2, h3, h4, h5, h6, span";

    const handleMouseOver = (e) => {
      console.log(e.target);
      if (innerCursorRef.current && e.target.closest(growSelector)) {
        innerCursorRef.current.classList.add("grow");
      }
    };

    const handleMouseOut = (e) => {
      if (innerCursorRef.current && e.target.closest(growSelector)) {
        innerCursorRef.current.classList.remove("grow");
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <div ref={innerCursorRef} className="inner-cursor"></div>
      <div ref={outerCursorRef} className="outer-cursor"></div>
    </>
  );
};

export default Cursor;
