import Overlay from "../components/common/Overlay";
function CartView({ onClose }) {
  return (
    <div className="fixed inset-0 z-51 flex justify-end">
      <Overlay onClose={onClose} />
      <div className="w-full sm:w-1/2  bg-white p-8 z-51 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      </div>

    </div>
  );
}

export default CartView;
