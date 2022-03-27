import styles from "../styles/carrousel.module.css";

import PropTypes from "prop-types";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Carrousel = ({ slides, slidesPerView = 3, spaceBetween = 30 }) => {
  const [index, setIndex] = useState(1);
  const handleSlideChange = ({ activeIndex }) => {
    setIndex(activeIndex + 1);
  };

  return (
    <div>
      <div className={styles.controls}>
        <button className={styles.prevBtn}></button>
        {index} / {slides.length}
        <button className={styles.nextBtn}></button>
      </div>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        onSlideChange={handleSlideChange}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

Carrousel.propTypes = {
  slides: PropTypes.array.isRequired,
  slidesPerView: PropTypes.number,
  spaceBetween: PropTypes.number,
};

export default Carrousel;
