import { Fragment } from "react";
import classes from "./Headers.module.css";
import FoodImage from "../../assets/meals.jpg";
import HeaderButton from "./HeaderButton";

const Headers = (props) => {

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderButton onCart={props.onCartShown} />
      </header>

      <div className={classes["main-image"]}>
        <img src={FoodImage} alt="meal" />
      </div>
    </Fragment>
  );
};

export default Headers;
