import classes from "./Msg.module.css";
const Msg = () => {
  // const [msg,setMsg]= useState(false)

  return (
    <section className={classes.msg}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose yor favorite meal from our braod selection of available meal and enjoy a Delicious
         lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high quality ingredients,just-in-time and ofcourse by 
        experience chefs!
      </p>
    </section>
  );
};

export default Msg;
