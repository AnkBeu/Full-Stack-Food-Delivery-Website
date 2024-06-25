import React, { useContext,useEffect,useState } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'




const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  const filteredList = food_list.filter((item) => {

    console.log("Item category:", item.category);
    console.log("Target category:", category);
    if (category === "All") return true;
    if (category === "Desserts" && (item.name.toLowerCase().includes("cake") || item.name.toLowerCase().includes("pastry"))) return true;
    if (category && category.trim() === "Pure Veg" && item.category.trim() === "Pure Veg") return true;
    if (item.name.toLowerCase().includes(category.toLowerCase())) return true;
    return false;
  });

 
    return (
      <div className='food-display' id='food-display'>
        <h2>Top Dishes Near You</h2>
        <div className="food-display-list">
    {filteredList.map((item, index) => (
      <FoodItem
        key={index}
        id={item._id}
        name={item.name}
        description={item.description}
        price={item.price}
        image={item.image}
      />
    ))}
  </div>
</div>
);
};

export default FoodDisplay
