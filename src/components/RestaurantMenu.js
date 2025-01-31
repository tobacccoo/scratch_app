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

  // Extracting category titles
  const categoryNames = category.map(cat => cat?.card?.card?.title);

  const itemCards = category.map(cat => cat?.card?.card?.itemCards);
  const subCategoryNames=  itemCards.map(e => e?.card?.info?.name)

  // console.log("SUBCategory Names:", subCategoryNames);
  console.log("Category Data:", category);

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
              subCategoryNames={itemCards.map(e => e?.card?.info?.name)}
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
