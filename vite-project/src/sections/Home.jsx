import { useState } from "react";
import Header from "./Header";
import ProjectGrid from "./ProductGrid";
import Navbar from "../components/layout/Navbar";
import Products from "../data/product";

function Home() {
  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) => item.productName === product.productName,
      );
      if (existingItem) {
        return prev.map((item) =>
          item.productName === product.productName
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (indexToRemove) => {
    setCartItems((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const handleIncreaseQuantity = (product) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.productName === product.productName
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  };

  const handleDecreaseQuantity = (product) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.productName === product.productName
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const filter = ["All", "Electronics", "Fashion", "Home & Garden", "Sports"];
  const [filterBy, setFilterBy] = useState("All");
  const [cartItems, setCartItems] = useState([]);

  const displayProduct = Products.filter((item) => {
    if (filterBy === "All") return true;

    return item.category.toLowerCase() === filterBy.toLowerCase();
  });

  return (
    <div>
      <Navbar
        cartItem={cartItems}
        onDecreaseQuantity={handleDecreaseQuantity}
        onIncreaseQuantity={handleIncreaseQuantity}
        onRemoveFromCart={handleRemoveFromCart}
      />

      <Header filterBy={filterBy} setFilterBy={setFilterBy} filter={filter} />

      <ProjectGrid onClick={handleAddToCart} displayProducts={displayProduct} />
    </div>
  );
}

export default Home;
