import { useState } from "react";
import FoodCard from "./FoodCard";

const ResCategory = ({ categoryName, itemCards }) => {
  // State to toggle the visibility of cards
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the visibility
  const toggleCards = () => {
    setIsOpen(!isOpen);
  };
  console.log("ITEMCARDS   "+ itemCards)

  
 

  return (
    <>
    <div className="flex flex-col items-center w-full">
  
      <div className="w-full max-w-3xl px-6 py-4 shadow-sm shadow-gray-300 rounded-lg">
        <div className="flex justify-between items-center">
          <ul className="font-semibold text-lg">{categoryName}</ul>
          <button
            onClick={toggleCards}
            className="bg-green-300 text-white px-4 py-2 rounded"
          >
            {isOpen ? "▲" : "▼"}
          </button>
        </div>
      </div>
    </div>
    {/* Food Cards Section */}
    {isOpen && (
        <div className="w-full flex flex-col items-center">
          <div className="w-full max-w-3xl mt-4 flex flex-col gap-4">
          {itemCards.map((item, index) => (
            <FoodCard key={index} itemInfo={item.card.info} />
          ))}
        </div>
        </div>
      )}
    </>
    
  );
};

export default ResCategory;
