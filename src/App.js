import { Fragment, useState } from "react";
import "./App.css";
import Headers from "./components/Layout/Headers";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [hiddenCart, setHiddenCart] = useState(false);

  const carthidden = () => {
    setHiddenCart(false);
  };

  const cartShown = () => {
    setHiddenCart(true);
  };

  return (
    <Fragment>
      {hiddenCart && <Cart onCartHidden={carthidden} />}
      <Headers onCartShown={cartShown} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
