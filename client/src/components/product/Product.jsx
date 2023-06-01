import React from "react";
import { Link } from "react-router-dom";
import "./Product.scss";
import { useContext } from "react";
import CartContext from "../../CartContext";

function Product({ id, img, name, label, price }) {
  const { increaseProductItems } = useContext(CartContext);

  return (
    <article className="product">
      <img className="product__image" src={img} alt="" />
      <p className="product__title">{name}</p>
      <p className={`product__label ${!label ? "no-discount" : ""}`}>
        {label && `${label} знижки`}
        <span className="product__price product__price-nohover">
          {price} грн.
        </span>
      </p>
      <p className="product__price">{price} грн. </p>
      <div className="product__overlay">
        <button
          className="product__add"
          onClick={() => {
            increaseProductItems(id, img, name, price);
          }}
        >
          Добавити в корзину
        </button>
        <Link className="product__info" to={`/furniture/${id}`}>
          Детальніше
        </Link>
      </div>
      <button
        className="product__add product__add-nohover"
        onClick={() => {
          increaseProductItems(id, img, name, price);
        }}
      >
        Добавити в корзину
      </button>
      <Link
        to={`/furniture/${id}`}
        className="product__info product__info-nohover"
      >
        Детальніше
      </Link>
    </article>
  );
}

export default Product;
