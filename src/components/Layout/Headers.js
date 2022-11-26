import { Fragment } from "react";
import classes from "./Headers.module.css";
import FoodImage from "../../assets/meals.jpg";
import HeaderButton from "./HeaderButton";

const Headers = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderButton />
      </header>

      <div className={classes["main-image"]}>
        <img src={FoodImage} alt="meal" />
      </div>
    </Fragment>
  );
};

export default Headers;
