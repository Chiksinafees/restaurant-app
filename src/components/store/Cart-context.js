import React, { useState } from "react";

const CartContext = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: () => {},
});

export const CartContextProvider = (props) => {
  const [items, setItems] = useState([]);

  const addInCart = (item) => {
    setItems([...items, item]);
  };
  // console.log(items);

  const removeFromCart = (id) => {};

  const cartCont = {
    items: items,
    addItem: addInCart,
    removeItem: removeFromCart,
  };

  return (
    <CartContext.Provider value={cartCont}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
