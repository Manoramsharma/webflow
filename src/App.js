import React from "react";
import "antd/dist/antd.min.css";
import "./index.scss";
import RightPanel from "./rightPanel";
import Home from "./Containers/Home/Home";
import useStore from "./store";
import SMSBar from './smsBar'
import EmailBar from "./emailBar";
import ConditionBar from "./conditionBar";


const App = () => {
  const popUpName = useStore((state)=>state.popUpName)
  console.log(popUpName)
  
  return (
    <div className="App">
      <div className="flex flex-row w-full">
        <Home/>
        {popUpName === 'right' && <RightPanel />}
        {popUpName === 'email' && <EmailBar/>}
        {popUpName === 'condition' && <ConditionBar/>}
        {popUpName === 'sms' && <SMSBar/>}
      </div> 
    </div> 
  );
};

export default App;
