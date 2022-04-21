import { useState, useEffect } from "react";

const isMobile = (width) => width < 768;

const useWindowSize = () => {
  const [size, setSize] = useState({ height: 0, width: 0, mobile: false });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        height: window.innerHeight,
        width: window.innerWidth,
        mobile: isMobile(window.innerWidth),
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
};

export default useWindowSize;
