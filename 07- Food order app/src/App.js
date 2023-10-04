import React, { Fragment, useState } from "react";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartIsShow, setCartisShow] = useState(false);

  const showCartHandler = () => {
    setCartisShow(true);
  };

  const hideCartHandler = () => {
    setCartisShow(false);
  };

  return (
    <Fragment>
      {cartIsShow && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
