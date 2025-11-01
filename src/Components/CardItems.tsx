import React from "react";
import type { FoodItemsType } from "../Types/CountType";
interface CardsItemsProps {
  food: FoodItemsType[];
}

const CardItems = ({ food }: CardsItemsProps) => {
  const { id, itemName, itemDescription, itemPrice, itemImg } = food;
  return (
    <div className="w-60 h-90 bg-white border-xl mt-5 ml-5">
      <div className="w-full h-30">
        <img src={itemImg} alt="Foodimage" />
        <h5>{itemName}</h5>
        <p>{itemDescription}</p>
        <span>Price: {itemPrice}</span>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default CardItems;
