import styles from "../styles/InviewElement.module.css";
import { useInView } from "react-hook-inview";

const InviewElement = ({ children }) => {
  const [ref, inView] = useInView({ threshold: 0});
  let className = `${styles.inviewElement} ${styles.bottomToTop}`;

  if (inView) {
    className += `${className} ${styles.viewed}`;
  }

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
};

export default InviewElement;
