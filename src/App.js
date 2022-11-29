import { useState } from "react";
import "./App.css";
import Headers from "./components/Layout/Headers";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { CartContextProvider } from "./components/store/Cart-context";

function App() {
  const [hiddenCart, setHiddenCart] = useState(false);

  const carthidden = () => {
    setHiddenCart(false);
  };

  const cartShown = () => {
    setHiddenCart(true);
  };

  return (
    <CartContextProvider>
      {hiddenCart && <Cart onCartHidden={carthidden} />}
      <Headers onCartShown={cartShown} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
