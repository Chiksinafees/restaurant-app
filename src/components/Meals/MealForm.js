import classes from "./MealForm.module.css";

const MealForm = () => {
  return (
    <form className={classes.form}>
      <label htmlFor="Amount">Amount</label>
      <input
        id="Amount"
        type="number"
        min="1"
        max="8"
        step="1"
        defaultValue="1"
      />
      <br />
      <button>+Add</button>
    </form>
  );
};

export default MealForm;
