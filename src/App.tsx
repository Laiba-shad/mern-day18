
import "./App.css";

import ParentCountComponent from "./Components/ParentCountComponent";


function App() {
  return (
    <>
      {/* <ParentCountComponent/> */}
      <ParentCountComponent init={1}/>
      {/* <Cards itemCollection={items} /> */}
    </>
  );
}

export default App;
