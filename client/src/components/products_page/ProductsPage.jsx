import React, { useState } from "react";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import "./ProductsPage.scss";
import ProductsList from "../products_list/ProductsList.jsx";
import ReactPaginate from "react-paginate";
import useFetch from "../../hooks/useFetch";

function ProductsPage() {
  const [page, setPage] = useState(0);
  const [type, setType] = useState("");
  const { data, loading, error } = useFetch(
    `http://localhost:3000/products?page=${page}&type=${type ? type : ""}`
  );

  if (error) {
    return (
      <p className="products-page__error">
        Щось пішло не так, завантажуючи товари
      </p>
    );
  }

  return (
    <div className="products-page">
      <div className="products-page__container">
        {loading ? (
          <p className="products-page__loading">Loading...</p>
        ) : (
          <>
            <Swiper
              className="products-page__filter"
              spaceBetween={33}
              slidesPerView={"auto"}
            >
              <SwiperSlide className="products-page__slide">
                <div
                  className="products-page__filter-item"
                  onClick={() => {
                    setPage(0);
                    setType("");
                  }}
                >
                  <p>Усі товари</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="products-page__slide">
                <div
                  className="products-page__filter-item"
                  onClick={() => {
                    setPage(0);
                    setType("kitchens");
                  }}
                >
                  <p>Кухні</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="products-page__slide">
                <div
                  className="products-page__filter-item"
                  onClick={() => {
                    setPage(0);
                    setType("tables");
                  }}
                >
                  <p>Столи</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="products-page__slide">
                <div
                  className="products-page__filter-item"
                  onClick={() => {
                    setPage(0);
                    setType("beds");
                  }}
                >
                  <p>Ліжка</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="products-page__slide">
                <div
                  className="products-page__filter-item"
                  onClick={() => {
                    setPage(0);
                    setType("commodes");
                  }}
                >
                  <p>Комоди</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="products-page__slide">
                <div
                  className="products-page__filter-item"
                  onClick={() => {
                    setPage(0);
                    setType("wardrobes");
                  }}
                >
                  <p>Шкафи</p>
                </div>
              </SwiperSlide>
            </Swiper>
            <ProductsList products={data?.products} />
            <ReactPaginate
              breakLabel="..."
              nextLabel={
                <div className="products-page__navigation-item">
                  <svg
                    width="11"
                    height="19"
                    viewBox="0 0 11 19"
                    fill="#374B4A"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.21963 17.192C0.926735 17.4849 0.926735 17.9598 1.21963 18.2527C1.51252 18.5455 1.9874 18.5455 2.28029 18.2527L10.0897 10.4433C10.4802 10.0527 10.4802 9.41958 10.0897 9.02905L2.28029 1.21967C1.9874 0.926772 1.51252 0.926772 1.21963 1.21967C0.926735 1.51256 0.926735 1.98743 1.21963 2.28032L8.67546 9.73616L1.21963 17.192Z"
                      fill="white"
                    />
                    <path
                      d="M1.14892 17.1213C0.816972 17.4532 0.816972 17.9914 1.14892 18.3234C1.48086 18.6553 2.01905 18.6553 2.351 18.3234L10.1604 10.514C10.59 10.0844 10.59 9.38792 10.1604 8.95834L2.351 1.14895C2.01905 0.817009 1.48086 0.817009 1.14892 1.14895C0.816972 1.4809 0.816972 2.01909 1.14892 2.35104L8.53404 9.73616L1.14892 17.1213Z"
                      stroke="black"
                      strokeOpacity="0.2"
                      strokeWidth="0.2"
                    />
                  </svg>
                </div>
              }
              onPageChange={(event) => {
                console.log(event.selected);
                setPage(event.selected);
              }}
              pageRangeDisplayed={5}
              pageCount={data?.pages}
              className="products-page__navigation"
              previousLabel={
                <div className="products-page__navigation-item">
                  <svg
                    width="11"
                    height="19"
                    viewBox="0 0 11 19"
                    fill="#374B4A"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.1629 2.28033C10.4558 1.98744 10.4558 1.51256 10.1629 1.21967C9.87005 0.926777 9.39517 0.926777 9.10228 1.21967L1.29289 9.02906C0.902369 9.41958 0.902369 10.0527 1.29289 10.4433L9.10228 18.2527C9.39517 18.5455 9.87005 18.5455 10.1629 18.2527C10.4558 17.9598 10.4558 17.4849 10.1629 17.192L2.70711 9.73616L10.1629 2.28033Z"
                      fill="white"
                    />
                    <path
                      d="M10.2337 2.35104C10.5656 2.0191 10.5656 1.4809 10.2337 1.14896C9.9017 0.817014 9.36351 0.817014 9.03157 1.14896L1.22218 8.95835C0.792606 9.38792 0.792606 10.0844 1.22218 10.514L9.03157 18.3234C9.36351 18.6553 9.9017 18.6553 10.2337 18.3234C10.5656 17.9914 10.5656 17.4532 10.2337 17.1213L2.84853 9.73616L10.2337 2.35104Z"
                      stroke="black"
                      strokeOpacity="0.2"
                      strokeWidth="0.2"
                    />
                  </svg>
                </div>
              }
              renderOnZeroPageCount={null}
              pageLinkClassName="products-page__navigation-item"
              previousLinkClassName="products-page__navigation-prev"
              nextLinkClassName="products-page__navigation-next"
              activeLinkClassName="products-page__navigation-active"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default ProductsPage;
