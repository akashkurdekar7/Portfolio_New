import React, { useEffect, useRef } from "react";

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

        // Grow effect on interactive elements
        const growSelector = "a, button, .mode, .dotgrid,img, input, textarea, label, h1, h2, h3, h4, h5, h6";
        const growElements = document.querySelectorAll(growSelector);

        const handleMouseOver = () => {
            if (innerCursorRef.current) innerCursorRef.current.classList.add("grow");
        };
        const handleMouseOut = () => {
            if (innerCursorRef.current) innerCursorRef.current.classList.remove("grow");
        };

        growElements.forEach(el => {
            el.addEventListener("mouseover", handleMouseOver);
            el.addEventListener("mouseleave", handleMouseOut);
        });

        return () => {
            document.removeEventListener("mousemove", moveCursor);
            growElements.forEach(el => {
                el.removeEventListener("mouseover", handleMouseOver);
                el.removeEventListener("mouseleave", handleMouseOut);
            });
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