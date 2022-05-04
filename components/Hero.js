import styles from "../styles/Hero.module.css";

import PropTypes from "prop-types";
import AnimatedText from "react-animated-text-content";
import { useParallax } from "react-scroll-parallax";

import InviewElement from "./InviewElement";
import ImageSwicher from "./ImageSwicher";
import Ripples from "./Ripples";

const Hero = ({ id, imagesSrc, mobileImagesSrc, text }) => {
  const parallax = useParallax({
    speed: 4,
  });

  return (
    <section className={styles.hero} id={id} ref={parallax.ref}>
      <div className="holder">
        <div className="container-fluid">
          <InviewElement>
            <div className={styles.wrapper}>
              <Ripples />
              <div className={styles.image}>
                <ImageSwicher
                  imagesSrc={imagesSrc}
                  mobileImagesSrc={mobileImagesSrc}
                  textPosition={4}
                />
              </div>
              <AnimatedText
                type="words"
                interval={0.04}
                duration={1.25}
                animation={{
                  y: "20px",
                  ease: "ease",
                }}
                className={styles.text}
              >
                {text}
              </AnimatedText>
            </div>
          </InviewElement>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  id: PropTypes.string.isRequired,
  imageSrc: PropTypes.arrayOf(PropTypes.object),
  mobileImagesSrc: PropTypes.arrayOf(PropTypes.object),
  text: PropTypes.string,
};

export default Hero;
