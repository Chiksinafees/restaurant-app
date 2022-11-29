import classes from "./HeaderButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../store/Cart-context";
import { useContext } from "react";

const HeaderButton = (props) => {
  const cartCtx = useContext(CartContext);

  let quantity = 0;
  cartCtx.items.forEach((item) => {
    quantity = quantity + Number(item.quantity);
  });

  // const cartItemsNumber = cartCtx.items.reduce((curNumber, item) => {
  //   return curNumber + item.amount;
  // }, 0);

  return (
    <button className={classes.button} onClick={props.onCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default HeaderButton;
