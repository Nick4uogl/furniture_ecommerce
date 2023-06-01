import React from "react";
import minus from "../../img/icons/minus.svg";
import plus from "../../img/icons/plus.svg";
import deleteIcon from "../../img/icons/delete.svg";
import { useContext } from "react";
import CartContext from "../../CartContext";

function CartProduct({ id, image, name, price, count }) {
  const { increaseProductItems, decreaseProductItems, deleteProductItem } =
    useContext(CartContext);

  return (
    <article className="cart-page__item">
      <div className="cart-page__item-image">
        <img src={image} alt={name} />
      </div>
      <div className="cart-page__item-right">
        <div className="cart-page__item-row">
          <p className="cart-page__item-title text-semibold">{name}</p>
          <p className="cart-page__item-price text-semibold">
            {price * count}грн.
          </p>
        </div>
        <div className="cart-page__item-row">
          <div className="cart-page__item-btns">
            <button
              className="cart-page__item-btn cart-page__item-btn-minus"
              onClick={() => {
                decreaseProductItems(id);
              }}
            >
              <img src={minus} alt="minus" />
            </button>
            <p className="cart-page__item-count cart-page__item-btn">{count}</p>
            <button
              className="cart-page__item-btn cart-page__item-btn-plus"
              onClick={() => {
                increaseProductItems(id, image, name, price);
              }}
            >
              <img src={plus} alt="plus" />
            </button>
          </div>
          <button
            onClick={() => {
              deleteProductItem(id, count);
            }}
          >
            <img src={deleteIcon} alt="" />
          </button>
        </div>
      </div>
    </article>
  );
}

export default CartProduct;
