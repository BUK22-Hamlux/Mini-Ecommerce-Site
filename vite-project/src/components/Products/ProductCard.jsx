import TextButton from "../common/Buttons/TextButton";
function ProductCard({ imageURL, productName, price, alt, onClick }) {
  return (
    <div className="rounded-2xl border border-gray-100 overflow-hidden flex flex-col h-full hover:scale-105 transition-transform duration-300">
      <img src={imageURL} alt={alt} className=" w-full h-48 object-cover" />

      <div className="p-4">
        <p className="text-sm text-gray-600 ">{productName}</p>
        <p className="mb-4 text-gray-600">${price}</p>

        <TextButton
          text="Add to Cart"
          optionalClassName="bg-blue-500 text-white w-full"
          onClick={onClick}
        />
      </div>
    </div>
  );
}

export default ProductCard;
