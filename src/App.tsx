import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import ParentCountComponent from "./Components/ParentCountComponent";
import Cards from "./Components/Cards";
import type { FoodItemsType } from "./Types/CountType";

const items : FoodItemsType[] =[
  {
    id:1,
  itemName: "Fries",
  itemDescription:" Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  itemPrice: 2345,
  itemImg : "https://placehold.co/400/orange/white "
},
]
  
function App() {
  
  return (
    <>
    
      {/* <ParentComponent/> */}
      {/* <ParentCountComponent init={1}/> */}
      <Cards itemCollection={items}/>
    </>
  );
}

export default App;
