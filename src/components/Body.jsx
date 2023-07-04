import { useState } from "react";
import "./body.scss";
import { swiggy_api_URL } from "../constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const[allRestaurants,filteredRestaurants] = useState(swiggy_api_URL);
  const[searchedData,setSearchedData] = useState(null);


  
const searchData=(searchText,restaurants)=>{
  if(searchText!==""){
    const data = filterData(searchText,restaurants);
    setSearchedData(data);
  }
}

  return (
    <>
      <div className="search-container">
        <input
          placeholder="search a restaurant"
          type="text"
          className="search-input"
          
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button className="search-btn" >Search</button>
      </div>
      {allRestaurants?.length==0 && filteredRestaurants.length==0 ? (<Shimmer></Shimmer>):(
        <div className="restaurant-list">
          {(filteredRestaurants===null?filteredResta)}
        </div>
      )}

    </>
  );
};

export default Body;
