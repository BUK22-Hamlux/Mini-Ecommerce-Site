import React from "react";
import { CartProvider } from "./contexts/CartProvider";
import Home from "./sections/Home";

function App() {
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  );
}

export default App;
