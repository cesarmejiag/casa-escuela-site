import styles from "../styles/Hero.module.css";

import PropTypes from "prop-types";
import { useParallax } from "react-scroll-parallax";

import InviewElement from "./InviewElement";
import ImageSwicher from "./ImageSwicher";

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
              <div className={styles.image}>
                <ImageSwicher
                  imagesSrc={imagesSrc}
                  mobileImagesSrc={mobileImagesSrc}
                  textPosition={4}
                />
              </div>
              <div
                className={styles.text}
                dangerouslySetInnerHTML={{ __html: text }}
              ></div>
            </div>
          </InviewElement>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  id: PropTypes.string.isRequired,
  imageSrc: PropTypes.arrayOf(PropTypes.string),
  mobileImagesSrc: PropTypes.arrayOf(PropTypes.string),
  text: PropTypes.string,
};

export default Hero;
