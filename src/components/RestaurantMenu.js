import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {

const [resInfo, setresInfo]= useState(null);

const {resId} = useParams();

useEffect(()=>{
    fetchData()
},[]);

const fetchData = async ()=> {
    const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65200&lng=77.16630&restaurantId='+resId+'&catalog_qa=undefined&submitAction=ENTER');
    const JSON = await data.json();
    console.log(JSON);
    setresInfo(JSON.data);
    
}

const {name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div>
        <h1>{name}</h1>
        <h3>{cuisines} - {costForTwoMessage}</h3>
        <h2>Menu</h2>
        <ul>
            {itemCards.map((item)=>{
                <li key={item.card.info.id}>
                    {item.card.info.name}
                    {item.card.info.price}
                
                </li>
                
            })}
        </ul>
    </div>
  )
}

export default RestaurantMenu;