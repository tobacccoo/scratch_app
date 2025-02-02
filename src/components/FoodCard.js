import { useDispatch, useSelector } from "react-redux";
import { addItem, incrementItem, decrementItem } from "../itemSlice";
import { CDN_URL } from "../utils/Links";

const FoodCard = ({ itemInfo }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartItem = cartItems.find((item) => item.id === itemInfo.id);

  return (
    <div className="w-full p-4 bg-white shadow-md rounded-lg border flex justify-between items-center">
      <div className="w-3/4">
        <h3 className="font-bold text-lg">{itemInfo.name}</h3>
        <p className="text-gray-600 text-sm">
          {itemInfo?.description ? itemInfo.description : "No description available"}
        </p>
      </div>
      <div className="relative w-[100px] h-[100px]">
        {itemInfo.imageId && (
          <img
            className="w-full h-full rounded-lg object-cover"
            src={CDN_URL + itemInfo.imageId}
            alt="FOOD"
          />
        )}
        {cartItem ? (
          <div className=" bg-white rounded-md absolute bottom-1 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
            <button
              onClick={() => dispatch(decrementItem(itemInfo))}
              className="bg-red-500 text-white text-xs px-2 py-1 rounded-md shadow-md"
            >
              -
            </button>
            <span className="text-black">{cartItem.quantity}</span>
            <button
              onClick={() => dispatch(incrementItem(itemInfo))}
              className="bg-green-500 text-white text-xs px-2 py-1 rounded-md shadow-md"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={() => dispatch(addItem(itemInfo))}
            className="absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-green-700 text-white text-xs px-2 py-1 rounded-md shadow-md"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default FoodCard;
