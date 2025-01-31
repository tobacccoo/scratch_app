import { useState } from "react";

const ResCategory = ({ categoryName, subCategoryNames }) => {
  // State to toggle the visibility of cards
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the visibility
  const toggleCards = () => {
    setIsOpen(!isOpen);
  };
  console.log(subCategoryNames)

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-3xl px-6 py-4 shadow-sm shadow-gray-300 rounded-lg">
        {/* Category Name and Button */}
        <div className="flex justify-between items-center">
          <ul className="font-semibold text-l">{categoryName}</ul>
          <button
            onClick={toggleCards}
            className="bg-green-300 text-white px-4 py-2 rounded"
          >
            {isOpen ? "▲" : "▼"}
          </button>
        </div>
      </div>
      {isOpen && (
        <div>
            <div
            >
              {/* Example card content */}
              <h3 className="font-semibold text-lg">{subCategoryNames}</h3>
              {/* <p>{dishDescription}</p> */}
            </div>
          
        </div>
      )}
      </div>
      
      
  
  );
};

export default ResCategory;




