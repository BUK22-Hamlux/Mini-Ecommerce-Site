import ProductCard from "../components/ui/ProductCard";
import Products from "../data/product";

function ProjectGrid(){
    return (
        <div className="p-8 product-grid pb-16 border-b border-b-gray-200">
            {Products.map((product) => (
                <ProductCard 
                    key={product.productName}
                    imageURL={product.imageURL}
                    price={product.price}
                    productName={product.productName}
                />
            ))}

        </div>
    )

}

export default ProjectGrid;