import { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { useEffect } from 'react';
import Shimmer from './Shimmer';

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
 
  useEffect(()=>{
    fetchData();
  },[]);

async function fetchData(){
  const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
  const json = await data.json();
  
  setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  
}

if(listOfRestaurants.length===0){
  return <Shimmer/>;
}
  


  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
           
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );

            setListOfRestaurants(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        { listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />

        ))}
      </div>
    </div>
  );
};

export default Body;
