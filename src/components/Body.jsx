import { useState } from "react";
import "./body.scss";
import { swiggy_api_URL } from "../constants";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import useResData from "../hooks/useRestaurantData"


const Body = () => {
  const [searchText, setSearchText] = useState(""); // state variable for input value
  const [allRestaurants] = useResData(swiggy_api_URL); // hook calling swiggy api to get restaurants
  const [searchedData, setSearchedData] = useState(null); // state variable for search results
  const [errorMessage, setErrorMessage] = useState(null);

  const searchData = (searchText, restaurants) => {
    // trim whitspaces before searching
    if (searchText !== "") {
      const data = filterData(searchText, restaurants);
      setSearchedData(data);
      setErrorMessage("");
      if (data.length === 0) {
        setErrorMessage(
          `Sorry, we couldn't find any results for "${searchText}"`
        );
      }
    } else {
      setErrorMessage("");
      setSearchedData(restaurants);
    }
  };



  
  return (
    <>
      <div className="search-container">
        <input
          placeholder="search a restaurant"
          type="text"
          className="search-input"
          onChange={(e) => {
            setSearchText(e.target.value);
            searchData(e.target.value, allRestaurants);
          }}
        ></input>
        <button className="search-btn">Search</button>
      </div>

      {errorMessage && <div className="error-container">{errorMessage}</div>}

      {allRestaurants?.length == 0 ? (
        <Shimmer></Shimmer>
      ) : (
        <div className="restaurant-list">
          {(searchedData === null ? allRestaurants: searchedData).map(
            (restaurant) => {
              return (
                <Link
                  to={"/restaurant/" + restaurant.data.id}
                  key={restaurant.data.id}
                >
                  <RestaurantCard {...restaurant.data} />
                </Link>
              );
            }
          )}
        </div>
      )}
    </>
  );
};

export default Body;
