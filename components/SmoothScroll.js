import styles from "../styles/SmoothScroll.module.css";

import { useEffect, useRef } from "react";
import useWindowSize from "../hooks/useWindowSize";

// Reference: https://dev.to/holdmypotion/react-super-simple-smooth-scrolling-2l08
const SmoothScroll = ({ children }) => {
  const { height } = useWindowSize();
  const scrollingContainerRef = useRef();
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollingContainerRef.current.getBoundingClientRect().height
    }px`;
  };

  const smoothScrollingHandler = () => {
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 100) / 100;

    if (scrollingContainerRef?.current) {
      scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;
      // Recursive call.
      requestAnimationFrame(() => smoothScrollingHandler());
    }
  };

  useEffect(() => {
    setBodyHeight();
  }, [height]);

  useEffect(() => {
    requestAnimationFrame(() => smoothScrollingHandler());
  }, []);

  return (
    <div className={styles.parent}>
      <div ref={scrollingContainerRef}>{children}</div>
    </div>
  );
};

export default SmoothScroll;
