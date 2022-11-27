import { Fragment } from "react";
import "./App.css";
import Headers from "./components/Layout/Headers";
import Meals from "./components/Meals/Meals";
function App() {
  return (
    <Fragment>
      <Headers />
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
