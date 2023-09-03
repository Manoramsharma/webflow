import React from "react";
import "antd/dist/antd.min.css";
import "./index.scss";
import RightPanel from "./rightPanel";
import Home from "./Containers/Home/Home";

const App = () => {
  const [initialElements, setInitialElements] = React.useState([]);
  return (
    <div className="App">
      <div className="flex flex-row w-full">
        <RightPanel setInitialElements={setInitialElements}/>
    <Home/>
   
    
        </div> 
     
      

     </div> 
  );
};

export default App;
