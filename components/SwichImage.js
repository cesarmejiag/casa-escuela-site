import styles from "../styles/SwichImage.module.css";

import { useState } from "react";
import PropTypes from "prop-types";

import Image from "next/image";

const SwichImage = ({ mainSrc, swichSrc, caption }) => {
  const [swiched, setSwiched] = useState(false);
  const handleClick = () => setSwiched(!swiched);

  return (
    <div className={styles.swichImage}>
      <div className={styles.imagesWrapper} onClick={handleClick}>
        <img src={mainSrc} alt={caption} />
      </div>
      <div className={styles.clickText}>Click on the image</div>
    </div>
  );
};

SwichImage.propTypes = {
  mainSrc: PropTypes.string.isRequired,
  swichSrc: PropTypes.string,
  caption: PropTypes.string,
};

export default SwichImage;
