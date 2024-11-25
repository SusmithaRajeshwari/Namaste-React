import { RestaurantCard } from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Body = () => {
  const [restaurantListData, setRestaurantListData] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();

    const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setRestaurantListData(restaurants);
    setFilteredRestaurants(restaurants); // Initialize filteredRestaurants with full data
  };

  const topRestaurant = () => {
    const filteredList = restaurantListData.filter(
      (restaurant) => restaurant.info.avgRating > 4.2
    );
    setFilteredRestaurants(filteredList); // Update the filteredRestaurants state
  };

  const handleSearch = () => {
    if (searchText === "") {
      setFilteredRestaurants(restaurantListData);
    } else {
      const filteredRestaurant = restaurantListData.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredRestaurants(filteredRestaurant);
    }
  };

const onlinestatus = useOnlineStatus()

if(onlinestatus === false){
  return <h1>You are Offline , Check your Internet Connection</h1>
}

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={handleSearch}>
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={topRestaurant}>
          TopRatedRestaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
         <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}> 
         <RestaurantCard  resData={restaurant} />
       </Link>
       
        ))}
      </div>
    </div>
  );
};
