import styles from "../styles/Carrousel.module.css";

import PropTypes from "prop-types";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Carrousel = ({
  slides,
  slidesPerView = 3,
  spaceBetween = 30,
  speed = 750,
  arrows = false,
}) => {
  const [index, setIndex] = useState(1);
  const handleSlideChange = ({ activeIndex }) => {
    setIndex(activeIndex + 1);
  };

  return (
    <div className={styles.carrousel}>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        onSlideChange={handleSlideChange}
        speed={speed}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.controls}>
        <button className={styles.prevBtn}></button>
        {index} / {slides.length}
        <button className={styles.nextBtn}></button>
      </div>
    </div>
  );
};

Carrousel.propTypes = {
  slides: PropTypes.array.isRequired,
  slidesPerView: PropTypes.number,
  spaceBetween: PropTypes.number,
};

export default Carrousel;
