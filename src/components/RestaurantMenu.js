import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  // const {name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

  // const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="text-center" >
      <h1 className=" font-bold text-2xl" >{resInfo?.cards[2]?.card?.card?.info.name}</h1>
      <h3>
        {resInfo?.cards[2]?.card?.card?.info.cuisines.join(', ')} -{" "}
        {resInfo?.cards[2]?.card?.card?.info.costForTwoMessage}
      </h3>
      <h2>itemCategoryList</h2>
      <ul>
        {/* { (resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card).map((items) => {
                <li key={items.info.id}>
                    {items.info.name}
                    {items.info.price}
                </li>
                
            })} */}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
