import classes from "./MenuItems.module.css";
import MealForm from "./MealForm";

const MenuItems = (props) => {
  //console.log(props);
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}> ${props.price}</div>
      </div>
      <MealForm />
    </li>
  );
};

export default MenuItems;
