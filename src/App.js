import React, { useEffect } from "react";
import "antd/dist/antd.min.css";
import "./index.scss";
import RightPanel from "./rightPanel";
import Home from "./Containers/Home/Home";
import useStore from "./store";
import SMSBar from './smsBar'
import EmailBar from "./emailBar";
import ConditionBar from "./conditionBar";
import { useState } from "react";

const App = () => {
  const name = useStore.getState().nodeName
  console.log(name)
  const [show,setShow] = useState()
  
  return (
    <div className="App">
      <div className="flex flex-row w-full">
        <Home/>
        <RightPanel />
        <EmailBar/>
        <ConditionBar/>
        <SMSBar/>
      </div> 
    </div> 
  );
};

export default App;
