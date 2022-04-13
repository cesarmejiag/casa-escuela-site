import styles from "../styles/ImageSwicher.module.css";

import { useParallax } from "react-scroll-parallax";

import PropTypes from "prop-types";
import Image from "next/image";
import useCounter from "../hooks/useCounter";
import useResize from "../hooks/useResize";

const ImageSwicher = ({ imagesSrc, textPosition, parallaxSpeed }) => {
  const { mobile } = useResize();
  const total = imagesSrc.length - 1;
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
        <div className={styles.clickText}>Click on the image</div>
      )}
      <div className={styles.wrapper}>
        {imagesSrc.map((src, index) => (
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
        <div className={styles.clickText}>Click on the image</div>
      )}
    </div>
  );
};

ImageSwicher.propTypes = {
  imagesSrc: PropTypes.arrayOf(PropTypes.string).isRequired,
  textPosition: PropTypes.number,
  parallaxSpeed: PropTypes.number,
};

ImageSwicher.defaultProps = {
  imagesSrc: [],
  textPosition: 1,
  parallaxSpeed: 3,
};

export default ImageSwicher;
