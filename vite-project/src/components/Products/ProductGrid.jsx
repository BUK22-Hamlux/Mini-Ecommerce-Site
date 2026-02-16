import ProductCard from "./ProductCard";

function ProjectGrid({ onClick, displayProducts }) {
  return (
    <div className="p-8 product-grid pb-16 border-b border-b-gray-200">
      {displayProducts.map((product) => (
        <ProductCard
          key={product.productName}
          imageURL={product.imageURL}
          price={product.price}
          productName={product.productName}
          alt={product.alt}
          onClick={() => onClick(product)}
        />
      ))}
    </div>
  );
}

export default ProjectGrid;
