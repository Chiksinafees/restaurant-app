import React, { useState } from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: () => {},
});

export const CartContextProvider = (props) => {
  const [items, setItems] = useState([]);

  const addInCart = (newItem) => {
    const addedIndex = items.findIndex((dish) => dish.id === newItem.id);
    //console.log(added)
    if (addedIndex === -1) {
      setItems([...items, newItem]);
    } else {
      const item = items[addedIndex]; // [0]
      //console.log(item)
      const updatedItem = {
        ...item,
        quantity: Number(item.quantity) + Number(newItem.quantity),
      };
      const updatedItems = [...items];
      //console.log(updatedItems)
      updatedItems[addedIndex] = updatedItem;
      setItems(updatedItems);
    }
  };

  const removeFromCart = (id) => {

    const removeIndex = items.findIndex((item) => item.id === id); // index 0,1,2...
    const item = items[removeIndex];

    let updatedItems;
    if (item.quantity === 1) {
         updatedItems = items.filter((item) => item.id !== id);
          //console.log(updatedItems);
         setItems(updatedItems);
      }
    else {
          const updatedItem = { ...item, quantity: item.quantity - 1 };
            //console.log(updatedItem);

          updatedItems = [...items];
            //console.log(updatedItems);
          updatedItems[removeIndex] = updatedItem;
          setItems(updatedItems);
      }
  };

  const cartCont = {
    items: items,
    totalAmount: 0,
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
