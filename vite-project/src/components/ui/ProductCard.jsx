import Button from "../common/Button"
function ProductCard({imageURL, productName, price, alt}){

    return(
        <div className="rounded-2xl border border-gray-100 overflow-hidden flex flex-col h-full hover:scale-105 transition-transform duration-300">

            <img 
                src={imageURL}
                alt={alt}
                className=" w-full h-48 object-cover" 
            />

            <div className="p-4">
                <p className="text-sm text-gray-600 ">{productName}</p>
                <p className="mb-4 text-gray-600">${price}</p>

                <Button 
                    text="Add to Cart"
                    optionalClassName="bg-blue-500 text-white w-full"
                />
            </div>
            
        </div>
    )
}

export default ProductCard;