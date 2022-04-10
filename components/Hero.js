import styles from "../styles/Hero.module.css";
import PropTypes from "prop-types";
import { useParallax } from "react-scroll-parallax";

import ImageSwicher from "./ImageSwicher";

const Hero = ({ id, imagesSrc, text }) => {
  const parallax = useParallax({
    speed: 4,
  });

  return (
    <section className={styles.hero} id={id} ref={parallax.ref}>
      <div className="holder">
        <div className="container-fluid">
          <div className={styles.wrapper}>
            <div className={styles.image}>
              <ImageSwicher imagesSrc={imagesSrc} />
            </div>
            <div
              className={styles.text}
              dangerouslySetInnerHTML={{ __html: text }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  id: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Hero;
