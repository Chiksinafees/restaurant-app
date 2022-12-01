import classes from "./MealForm.module.css";
import React, { useContext } from "react";
import CartContext from "../store/Cart-context";

const MealForm = (props) => {
  const cartCtx = useContext(CartContext);

  const itemAddedToCart = (e) => {
    e.preventDefault();

    const quantity = document.getElementById("Amount_" + props.id).value;
    cartCtx.addItem({ ...props.item, quantity: quantity });
  };

  return (
    <form className={classes.form}>
      <label htmlFor="Amount">Amount</label>
      <input
        id={"Amount_" + props.id}
        type="number"
        min="1"
        max="8"
        step="1"
        defaultValue="0"
      />
      <br />
      <button onClick={itemAddedToCart}>+Add</button>
    </form>
  );
};

export default MealForm;
