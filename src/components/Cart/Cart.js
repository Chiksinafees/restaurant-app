import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../store/Cart-context";
import { useContext } from "react";

const Cart = (props) => {
  //console.log(props)
  const ctx = useContext(CartContext);
  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;

  const itemMinus = (id) => {
    ctx.removeItem(id);
  };

  const CartHandler = (
    <ul>
      {ctx.items.map((food) => (
        <li key={food.id} className={classes["cart-item"]}>
          <h2>{food.name}</h2>
          <div className={classes.summary}>
            <span className={classes.price}>${food.price}</span>
            <span className={classes.amount}> x {food.quantity}</span>
          </div>

          <div>
            <button onClick={itemMinus.bind(null, food.id)}>-</button>
            <button>+</button>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onCartHidden={props.onCartHidden}>
      {CartHandler}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCartHidden}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
