import Overlay from "../components/common/Overlay";
import { X } from "lucide-react";
import ListItemsInCart from "../components/ui/ListItemsInCart";
import EmptyCart from "../components/ui/EmptyCart";

function CartView({
  onClose,
  cartItem,
  onRemoveFromCart,
  totalCartCount,
  onIncreaseQuantity,
  onDecreaseQuantity,
}) {
  return (
    <div className="fixed inset-0 h-screen z-51 flex justify-end">
      <Overlay onClose={onClose} />

      <div className=" w-full sm:w-1/2 md:1/3 h-screen flex flex-col bg-white  z-51 shadow-lg">
        <div className="flex justify-between items-center px-4 py-8 text-gray-700 border-b border-b-slate-200">
          <h2 className="">Shopping Cart</h2>
          <X className=" cursor-pointer" onClick={onClose} />
        </div>

        <div className="h-full flex flex-col overflow-hidden">
          {totalCartCount === 0 ? (
            <EmptyCart onClose={onClose} />
          ) : (
            <ListItemsInCart
              cartItems={cartItem}
              onClose={onClose}
              onRemoveFromCart={onRemoveFromCart}
              totalCartCount={totalCartCount}
              onIncreaseQuantity={onIncreaseQuantity}
              onDecreaseQuantity={onDecreaseQuantity}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default CartView;
