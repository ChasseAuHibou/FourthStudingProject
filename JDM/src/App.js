import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Tires from "./components/Tires/Tires";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./store/CartContextProvider";
//import data from './data.json';

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCartHandler = () => {
    setCartIsVisible(true);
  };

  const hideCartHandler = () => {
    setCartIsVisible(false);
  };

  return (
    <CartContextProvider>
      {cartIsVisible && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Tires />
      </main>
    </CartContextProvider>
  );
}

export default App;
