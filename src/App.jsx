// import Nav from "./assets/components/nav"
import FristComp from "./components/fristComp"
import { useState } from "react";
const App = () => {
  
  const [x, setX] = useState(0);
  let handleClick = () => {
    console.log("clicked");
    setX(x + 1);
    console.log(x);

  }
  return (
    <div>
      
      
      <FristComp asd={x} />
      </div>
  )
}

export default App