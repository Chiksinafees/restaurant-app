import classes from "./HeaderButton.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderButton = (props) => {
  
  return (
    <button className={classes.button} onClick={props.onCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>0</span>
    </button>
  );
};

export default HeaderButton;
