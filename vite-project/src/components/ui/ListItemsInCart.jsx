import { Trash2, Minus, Plus } from "lucide-react";
import Button from "../common/Button";

function ListItemsInCart({
  cartItems,
  onClose,
  onRemoveFromCart,
  totalCartCount,
  onIncreaseQuantity,
  onDecreaseQuantity,
}) {
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="flex flex-col h-full">
      <div className=" overflow-y-auto">
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="flex gap-4 p-4 items-center justify-between border-b border-b-slate-200 pb-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.imageURL}
                alt={item.productName}
                className="w-25 h-25 object-cover rounded-md"
              />

              <div>
                <p className="font-medium">{item.productName}</p>
                <p className="text-gray-500">${item.price}</p>

                <div className="flex items-center text-gray-700 space-x-6 mt-4">
                  <Minus size={20} onClick={() => onDecreaseQuantity(item)} />
                  <p className="text-lg">{item.quantity}</p>
                  <Plus size={20} onClick={() => onIncreaseQuantity(item)} />
                </div>
              </div>
            </div>

            <Trash2
              onClick={() => onRemoveFromCart(index)}
              className="text-red-500"
            />
          </div>
        ))}
      </div>

      <footer className="p-4 border-t border-t-slate-200">
        <div className="flex justify-between">
          <p>
            Total {totalCartCount} item{totalCartCount > 1 ? "s" : ""}
          </p>
          <p className="font-semibold">${totalPrice}</p>
        </div>
        <Button
          text="Checkout"
          type="primary"
          optionalClassName="w-full mt-4"
          onClick={onClose}
        />
      </footer>
    </div>
  );
}

export default ListItemsInCart;
