import styles from "../styles/ImageSwicher.module.css";

import { useParallax } from "react-scroll-parallax";

import PropTypes from "prop-types";
import Image from "next/image";
import useCounter from "../hooks/useCounter";
import useWindowSize from "../hooks/useWindowSize";

const ImageSwicher = ({
  imagesSrc,
  mobileImagesSrc,
  textPosition,
  parallaxSpeed,
  cColor,
}) => {
  const { mobile } = useWindowSize();
  const images = mobile && mobileImagesSrc.length > 0 ? mobileImagesSrc : imagesSrc;
  const total = images.length - 1;
  const { count, increase } = useCounter(0, total, true);

  const parallax = useParallax({
    speed: parallaxSpeed,
  });

  const changeImage = () => total > 0 && increase();
  const getImageClass = (current, count) => {
    let className = styles.image;

    if (current === count) {
      className += ` ${styles.visible}`;
    }

    return className;
  };

  return (
    <div
      className={styles.imageSwicher}
      onClick={changeImage}
      ref={parallax.ref}
    >
      {total > 0 && textPosition !== 4 && (
        <div className={styles.clickText} style={{ color: cColor }}>
          Click on the image
        </div>
      )}
      <div className={styles.wrapper}>
        {images.map((src, index) => (
          <div className={getImageClass(index, count)} key={index}>
            <Image
              priority
              src={src}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        ))}
      </div>
      {total > 0 && textPosition === 4 && (
        <div className={styles.clickText} style={{ color: cColor }}>
          Click on the image
        </div>
      )}
    </div>
  );
};

ImageSwicher.propTypes = {
  imagesSrc: PropTypes.arrayOf(PropTypes.string).isRequired,
  mobileImagesSrc: PropTypes.arrayOf(PropTypes.string),
  textPosition: PropTypes.number,
  parallaxSpeed: PropTypes.number,
};

ImageSwicher.defaultProps = {
  imagesSrc: [],
  mobileImagesSrc: [],
  textPosition: 1,
  parallaxSpeed: 3,
};

export default ImageSwicher;
