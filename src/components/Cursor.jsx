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

        inner.style.left = `${e.clientX - innerWidth / 2}px`;
        inner.style.top = `${e.clientY - innerHeight / 2}px`;
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
      if (outerCursorRef.current && e.target.closest(growSelector)) {
        outerCursorRef.current.classList.add("grow");
        innerCursorRef.current.classList.add("color");
      }
    };

    const handleMouseOut = (e) => {
      if (outerCursorRef.current && e.target.closest(growSelector)) {
        outerCursorRef.current.classList.remove("grow");
        innerCursorRef.current.classList.remove("color");

      }
    };

    const handleMouseDown = () => {
      if (outerCursorRef.current) {
        outerCursorRef.current.classList.add("grow");
        innerCursorRef.current.classList.add("color");

      }
    };
  
    const handleMouseUp = () => {
      if (outerCursorRef.current) {
        outerCursorRef.current.classList.remove("grow");
        innerCursorRef.current.classList.remove("color");

      }
    };
    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
  
    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
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
