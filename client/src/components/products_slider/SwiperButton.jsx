import React from "react";
import { useSwiper } from "swiper/react";

function SwiperButton() {
  const swiper = useSwiper();
  return (
    <div className="products-slider__navigation">
      <button
        onClick={() => swiper.slidePrev()}
        className="products-slider__arrow products-slider__arrow-left"
      >
        <svg
          width="16"
          height="28"
          viewBox="0 0 16 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 2.53812L1.9775 0.875L15.5 14L1.9775 27.125L0.5 25.4619L12.3088 14L0.5 2.53812Z"
            fill="white"
          />
        </svg>
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="products-slider__arrow products-slider__arrow-active products-slider__arrow-right"
      >
        <svg
          width="16"
          height="28"
          viewBox="0 0 16 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 2.53812L1.9775 0.875L15.5 14L1.9775 27.125L0.5 25.4619L12.3088 14L0.5 2.53812Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
}

export default SwiperButton;
