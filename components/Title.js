import styles from "../styles/Title.module.css";

// Ref: https://www.npmjs.com/package/react-animated-text-content
import AnimatedText from "react-animated-text-content";
import { useInView } from "react-hook-inview";

const Title = ({ text }) => {
  const [ref, inView] = useInView({ threshold: 0 });

  return (
    <h2 className={styles.title} ref={ref}>
      <AnimatedText
          type="chars"
          animation={{
            y: "30px",
            ease: "ease",
          }}
          interval={0.06}
          duration={inView ? 0.8 : 0}
          className="animated-chars"
        >
          {text}
        </AnimatedText>
    </h2>
  );
};

export default Title;
