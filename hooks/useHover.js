import { useRef, useEffect, useState } from "react";

const useHover = () => {
  const [hover, setHover] = useState(false);
  const el = useRef();

  const splitLetters = (node) => {
    const text = node.innerText;
    const letters = text
      .split("")
      .map(
        (letter, index) =>
          `<span class="useHover-char" data-char="${letter}" style="--char-index: ${index}">${letter}</span>`
      )
      .join("");

    node.innerHTML = `<span class="useHover-word">${letters}</span>`;
  };

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  useEffect(() => {
    const node = el.current;

    if (node) {
      splitLetters(node);

      node.addEventListener("mouseenter", handleMouseEnter);
      node.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        node.removeEventListener("mouseenter", handleMouseEnter);
        node.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [el]);

  return [el, hover];
};

export default useHover;
