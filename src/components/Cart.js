import { useSelector, useDispatch } from "react-redux";
import { incrementItem, decrementItem, removeItem, clearCart } from "../itemSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="w-full max-w-3xl mx-auto p-4 shadow-lg bg-white rounded-lg">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center border-b py-2">
                <span>{item.name} - {item.quantity}</span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => dispatch(decrementItem(item))}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    -
                  </button>
                  <button
                    onClick={() => dispatch(incrementItem(item))}
                    className="bg-green-500 text-white px-2 py-1 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => dispatch(removeItem(item))}
                    className="bg-gray-500 text-white px-2 py-1 rounded"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <button
            onClick={() => dispatch(clearCart())}
            className="mt-4 bg-red-700 text-white px-4 py-2 rounded w-full"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
