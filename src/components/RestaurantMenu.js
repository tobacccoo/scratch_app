import ResCategory from "./ResCategory";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) {
    return <h1>Loading...</h1>;
  }

  const category =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (e) => e.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

 console.log("categories"+ category)
    

  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl">
        {resInfo?.cards?.[2]?.card?.card?.info.name}
      </h1 >
      <h3 className=" text-xl">
        {resInfo?.cards?.[2]?.card?.card?.info.cuisines.join(", ")} -{" "}
        {resInfo?.cards?.[2]?.card?.card?.info.costForTwoMessage}
      </h3>
      <ul>
        {category.length > 0 ? (
          category.map((categories, index) => (
            <ResCategory 
              key={categories?.card?.card?.title || index} 
              categoryName={categories?.card?.card?.title} 
              itemCards={categories?.card?.card?.itemCards}
            />
          ))
        ) : (
          <p>No categories available</p>
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

