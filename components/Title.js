import styles from "../styles/Title.module.css";

// Ref: https://www.npmjs.com/package/react-animated-text-content
import AnimatedText from "react-animated-text-content";
import { useInView } from "react-hook-inview";

const Title = ({ text }) => {
  const [ref, inView] = useInView({ threshold: 0 });

  return (
    <h2 className={styles.title} ref={ref}>
      <div className="text-hidden">{text}</div>
      <div className="animated-text">
        {inView && (
          <AnimatedText
            type="chars"
            animation={{
              y: "30px",
              ease: "ease",
            }}
            interval={0.06}
            duration={0.8}
            className="animated-chars"
          >
            {text}
          </AnimatedText>
        )}
      </div>
      <style jsx>{`
        .text-hidden { opacity: 0; }
        h2 { position: relative; }
        .animated-text {
          position: absolute !important;
          top: 0;
        }
      `}</style>
    </h2>
  );
};

export default Title;
