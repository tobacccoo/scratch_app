import { useState } from "react";
import RestaurantCard, { promotedTag } from "./RestaurantCard";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchField, setsearchField] = useState("");
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();

  const RestaurantCardPromoted = promotedTag(RestaurantCard);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  if (onlineStatus === false)
    return (
      <h1>
        Hey there you got something loose down there.... Oh... Its your internet
      </h1>
    );

  return (
    <div className="my-2">
      <div className="flex items-center">
        <input
          className=" m-1 p-1 h-7 border border-solid border-black"
          value={searchField}
          onChange={(e) => {
            setsearchField(e.target.value);
          }}
        />
        <button
          className="search px-4 py-2 bg-green-100 m-4 rounded-lg"
          onClick={() => {
            const searchList = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchField.toLowerCase())
            );
            setfilteredRestaurant(searchList);
          }}
        >
          Search
        </button>
        <button
          className="px-4 py-2 bg-green-100 m-4 rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );

            setfilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            style={{
              textDecoration: "none",
              color: "#000",
            }}
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
