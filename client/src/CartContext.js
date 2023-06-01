import { createContext, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [countItems, setCountItems] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const increaseCountItems = () => {
    setCountItems((prev) => {
      return prev + 1;
    });
  };

  const increaseProductItems = (id, img, name, price) => {
    increaseCountItems();
    const isExistedItem = cartItems.find((product) => product.id === id);
    if (isExistedItem) {
      const updatedItems = cartItems.map((product) => {
        if (product.id === id) {
          return { ...product, count: product.count + 1 };
        }
        return product;
      });
      setCartItems(updatedItems);
      return;
    }

    setCartItems((prevItems) => {
      return [
        ...prevItems,
        {
          id: id,
          img: img,
          name: name,
          price: price,
          count: 1,
        },
      ];
    });
  };
  const decreaseCountItems = () => {
    setCountItems((prev) => {
      return prev - 1;
    });
  };

  const decreaseProductItems = (id) => {
    decreaseCountItems();
    let updatedItems = [];
    const existedItem = cartItems.find((product) => product.id === id);
    if (existedItem.count === 1) {
      updatedItems = cartItems.filter((product) => product.id !== id);

      setCartItems(updatedItems);
      return;
    } else {
      updatedItems = cartItems.map((product) => {
        if (product.id === id) {
          return { ...product, count: product.count - 1 };
        }
        return product;
      });
      setCartItems(updatedItems);
      return;
    }
  };

  const deleteProductItem = (id, count) => {
    setCountItems((prev) => {
      return prev - count;
    });
    let updatedItems = cartItems.filter((product) => product.id !== id);
    setCartItems(updatedItems);
  };

  return (
    <CartContext.Provider
      value={{
        countItems: countItems,
        increaseCountItems: increaseCountItems,
        increaseProductItems: increaseProductItems,
        decreaseProductItems: decreaseProductItems,
        cartItems: cartItems,
        deleteProductItem: deleteProductItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
