import { Fragment } from "react";
import "./App.css";
import Headers from "./components/Layout/Headers";
import Msg from "./components/Meals/Msg";
function App() {
  return (
    <Fragment>
      <Headers />
      <main>
        <Msg />
      </main>
    </Fragment>
  );
}

export default App;
