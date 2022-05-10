import styles from "../styles/Carrousel.module.css";

import PropTypes from "prop-types";
import { useState } from "react";

import { EffectCreative, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

import useWindowSize from "../hooks/useWindowSize";

const Carrousel = ({
  slides,
  slidesPerView = 3,
  spaceBetween = 30,
  speed = 750,
  type = 1,
}) => {
  const { mobile } = useWindowSize();
  const [index, setIndex] = useState(1);
  const handleSlideChange = ({ activeIndex }) => {
    setIndex(activeIndex + 1);
  };

  const swiperProps = {};

  if (type === 2) {
    // swiperProps.navigation = true;
    swiperProps.navigation = !mobile;
    swiperProps.modules = [Navigation, EffectCreative];
    swiperProps.creativeEffect = {
      prev: {
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    };
    swiperProps.grabCursor = true;
    swiperProps.effect = "creative";
  }

  return (
    <div className={styles.carrousel}>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        onSlideChange={handleSlideChange}
        speed={speed}
        {...swiperProps}
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
  speed: PropTypes.number,
  type: PropTypes.number,
};

export default Carrousel;
