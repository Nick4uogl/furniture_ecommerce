import React from "react";
import "./ProductsSlider.scss";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import SwiperButton from "./SwiperButton";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const textVariants = {
  offscreen: {
    y: -50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};

function ProductsSlider() {
  const { data, loading, error } = useFetch(
    `http://localhost:3000/products?bought=true`
  );

  if (error) {
    return (
      <p className="products-page__error">
        Щось пішло не так, завантажуючи товари
      </p>
    );
  }

  if (error) {
    return (
      <p className="products-slider__error">Не вдалося завантажити товари</p>
    );
  }

  return (
    <section className="products-slider">
      <div className="products-slider__container">
        <motion.h2
          variants={textVariants}
          initial="offscreen"
          whileInView="onscreen"
          className="products-slider__title"
        >
          Що купують інші ?
        </motion.h2>
        {loading ? (
          <p className="products-slider__loading">Loading...</p>
        ) : (
          <Swiper
            modules={[Navigation]}
            spaceBetween={42}
            className="products-slider-block"
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              280: {
                slidesPerView: 1,
              },
            }}
          >
            <SwiperButton />
            {data?.products?.map((product, i) => {
              return (
                <SwiperSlide key={i} className="products-slider__slide">
                  <Link
                    to={`/furniture/${product._id}`}
                    className="products-slider__link"
                  >
                    <img src={product.image} alt={product.name} />
                    <div className="products-slide-info">
                      <h2 className="products-slide-info__title">
                        {product.name}
                      </h2>
                      <p className="products-slide-info__price">
                        {product.price}грн.
                      </p>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>
    </section>
  );
}

export default ProductsSlider;
