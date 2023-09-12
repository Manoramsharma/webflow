import React, { useState } from "react";
import { Handle } from "react-flow-renderer";
import styles from "./SmsTypeNode.module.css";
import PopUpComponent from "./PopUpComponent";
import ButtonCross from "../ButtonCross";
import removeNode from "../../Utils/Helpers/removeNode";
import useStore from "../../store";

function SmsTypeNode({ id, type }) {
  const [smsDetails, setSmsDetails] = useState({
    name: "",
    smsBody: "",
  });
  const elements = useStore.getState().initialElements;

  const handleOnChange = (smsDetails) => {
    setSmsDetails(smsDetails);
  };

  const handleClick = (event) => {
    event.stopPropagation();
    useStore.getState().handlePopUp({
      type: "HANDLE_COMPONENT_RENDER",
      componentToRender: (
        <PopUpComponent
          handleOnChange={handleOnChange}
          inputSmsBody={smsDetails.smsBody}
          inputName={smsDetails.name}
        />
      )
    });
    useStore.getState().handlePopUp({
      type: "HANDLE_POP_UP", popUpState: true 
    });

  };

  const handleOnClick = ()=>{
    useStore.getState().handlePopupName({
      type: "HANDLE_POPUP_NAME", popUpName: 'sms'
    })
  }

  const handleDelete = ()=>{
    useStore.getState().handlePopupName({
      type: "HANDLE_POPUP_NAME", popUpName: 'right'
    })
  }

  return (
    <div className={styles.WrapperWrapper} onClick={handleOnClick}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <ButtonCross
          onClick={() => {
            handleDelete()
            const tempEle = removeNode(elements, id, type);
            useStore.getState().handleNode({
              type: "INITIAL_ELEMENTS", initialElements: tempEle
            })
            setTimeout(() => {
              document.getElementById("LayoutButton").click();
              document.getElementById("LayoutButton").click();
            }, 200);
          }}
        />
      </div>
      <div className={styles.Wrapper}>
        <h2 className={styles.Heading}>SMS Workflow</h2>
        <button onClick={handleClick}>Edit SMS Details</button>
        <button>Select SMS Template</button>
      </div>
      <Handle type="target" position="top" className={styles.Handle} />
      <Handle type="source" position="bottom" className={styles.Handle} />
    </div>
  );
}

export default SmsTypeNode;
