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

  const growSelector =
    "a, button, .mode, .mail, .dotgrid, img, input, textarea, label, h1, h2, h3, h4, h5, h6";

  const handleMouseOver = (e) => {
    if (innerCursorRef.current && e.target.matches(growSelector)) {
      innerCursorRef.current.classList.add("grow");
    }
  };

  const handleMouseOut = (e) => {
    if (innerCursorRef.current && e.target.matches(growSelector)) {
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
