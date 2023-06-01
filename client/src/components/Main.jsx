import React from "react";
import Advantages from "./advantages/Advantages";
import Hero from "./hero/Hero";
import Products from "./products/Products";
import ProductsSlider from "./products_slider/ProductsSlider";

function Main() {
  return (
    <>
      <Hero />
      <Advantages />
      <Products />
      <ProductsSlider />
    </>
  );
}

export default Main;
