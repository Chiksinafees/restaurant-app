import { Fragment } from "react";
import "./App.css";
import Headers from "./components/Layout/Headers";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Fragment>
      <Cart />
      <Headers />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
