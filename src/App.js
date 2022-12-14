import React, { useState } from 'react';

// Components
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals.js';
import Cart from './components/Cart/Cart.js';

// Context
import CartProvider from './store/CartProvider.js';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
