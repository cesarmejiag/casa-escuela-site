import styles from "../styles/ImageSwicher.module.css";

import Image from "next/image";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { useParallax } from "react-scroll-parallax";

import useCounter from "../hooks/useCounter";
import useWindowSize from "../hooks/useWindowSize";
import { getImages } from "../utils/utils";

const ImageSwicher = ({
  imagesSrc,
  mobileImagesSrc,
  imageCaption,
  textPosition,
  parallaxSpeed,
  cColor,
}) => {
  const { locale } = useRouter();
  const { mobile } = useWindowSize();
  const images =
    mobile && mobileImagesSrc.length > 0 ? mobileImagesSrc : imagesSrc;
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
          {locale === "en" ? "Click on the image" : "Haz clic en la imagen"}
        </div>
      )}
      <div className={styles.wrapper}>
        {images.map((src, index) => (
          <div className={getImageClass(index, count)} key={index}>
            <Image
              priority
              src={getImages(src)}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        ))}
      </div>
      {imageCaption && (
        <div className={styles.imageCaption}>{imageCaption}</div>
      )}
      {total > 0 && textPosition === 4 && !imageCaption && (
        <div className={styles.clickText} style={{ color: cColor }}>
          {locale === "en" ? "Click on the image" : "Haz clic en la imagen"}
        </div>
      )}
    </div>
  );
};

ImageSwicher.propTypes = {
  imagesSrc: PropTypes.arrayOf(PropTypes.object).isRequired,
  mobileImagesSrc: PropTypes.arrayOf(PropTypes.object),
  imageCaption: PropTypes.string,
  textPosition: PropTypes.number,
  parallaxSpeed: PropTypes.number,
};

ImageSwicher.defaultProps = {
  imagesSrc: [],
  mobileImagesSrc: [],
  imageCaption: "",
  textPosition: 1,
  parallaxSpeed: 3,
};

export default ImageSwicher;
