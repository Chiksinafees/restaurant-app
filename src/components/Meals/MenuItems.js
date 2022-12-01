import classes from "./MenuItems.module.css";
import MealForm from "./MealForm";

const MenuItems = (props) => {
  return (
    <li className={classes.meal} key={props.id}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}> ${props.price}</div>
      </div>
      <MealForm id={props.id} item={props} />
    </li>
  );
};

export default MenuItems;
