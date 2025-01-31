import { CDN_URL } from "../utils/Links";

const FoodCard = ({ itemInfo }) => {
  const imageID = itemInfo?.imageId;

  return (
    <div className="w-full p-4 bg-white shadow-md rounded-lg border flex justify-between items-center">
     
     <div className="w-3/4">
        <h3 className="font-bold text-lg">{itemInfo?.name}</h3>
        <p className="text-gray-600 text-sm">
          {itemInfo?.description ? itemInfo.description : "No description available"}
        </p>
        </div>
      <div className="relative w-[100px] h-[100px] ">
        {imageID && (
          <img
            className="w-full h-full rounded-lg object-cover"
            src={CDN_URL + imageID}
            alt="FOOD"
          />
        )}
        <button className="absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-green-700 text-white text-xs px-2 py-1 rounded-md shadow-md">
          Add+1
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
