import styles from "../styles/AnimText.module.css";

import PropTypes from "prop-types";

// Ref: https://www.npmjs.com/package/react-animated-text-content
import AnimatedText from "react-animated-text-content";
import { useInView } from "react-hook-inview";

// TODO: This component should use animatedTextProps instead
//       configure AnimatedText component directly in his props.

/**
 <AnimatedText
        animation={{
          y: "20px",
          ease: "ease",
        }}
        duration={inView ? 1.25 : 0}
        interval={0.04}
        type="words"
      >
        {text}
      </AnimatedText>
 */
const AnimText = ({ text, type, animatedTextProps }) => {
  const [ref, inView] = useInView({ threshold: 0 });

  return type === "title" ? (
    <h2 className={styles.title} ref={ref}>
      <AnimatedText
        animation={{
          y: "30px",
          ease: "ease",
        }}
        duration={inView ? 0.8 : 0}
        interval={0.06}
        type="chars"
      >
        {text}
      </AnimatedText>
    </h2>
  ) : (
    <div ref={ref} className={styles.intro}>
      {text}
    </div>
  );
};

AnimText.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  animatedTextProps: PropTypes.object,
};

export default AnimText;
