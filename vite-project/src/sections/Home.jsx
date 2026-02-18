import { useState } from "react";
import Header from "./Header";
import ProjectGrid from "../components/Products/ProductGrid";
import Navbar from "../components/layout/Navbar";
import Products from "../data/product";
import { useCart } from "../contexts/CartContext";

function Home() {
  const { addToCart } = useCart(); // Use the hook instead of local state
  const filter = ["All", "Electronics", "Fashion", "Home & Garden", "Sports"];
  const [filterBy, setFilterBy] = useState("All");

  const displayProduct = Products.filter((item) => {
    if (filterBy === "All") return true;
    return item.category.toLowerCase() === filterBy.toLowerCase();
  });

  return (
    <div>
      <Navbar />
      <Header filterBy={filterBy} setFilterBy={setFilterBy} filter={filter} />
      {/* Pass the context function to the grid */}
      <ProjectGrid onClick={addToCart} displayProducts={displayProduct} />
    </div>
  );
}

export default Home;
