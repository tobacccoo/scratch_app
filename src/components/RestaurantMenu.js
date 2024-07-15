
import { useParams } from "react-router-dom";

import  useRestaurantMenu  from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    
const {resId} = useParams();

const resInfo = useRestaurantMenu(resId);

// const {name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

// const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.itemCards;

  return (
    <div>
        <h1>{resInfo?.cards[2]?.card?.card?.info.name}</h1>
        <h3>{resInfo?.cards[2]?.card?.card?.info.cuisines} - {resInfo?.cards[2]?.card?.card?.info.costForTwoMessage}</h3>
        <h2>Menu</h2>
        <ul>
            {/* { itemCards.map((items) => {
                <li key={items.cards.info.id}>
                    {items.cards.info.name}
                    {items.cards.info.price}
                </li>
                
            })} */}
        </ul>
    </div>
  )
}

export default RestaurantMenu;