import React, { useEffect, useState } from "react";
import { Handle } from "react-flow-renderer";
import { useDispatch, useSelector } from "react-redux";
import styles from "./EmailTypeNode.module.css";
import ButtonCross from "../ButtonCross";
import removeNode from "../../Utils/Helpers/removeNode";
import useStore from "../../store";

function EmailTypeNode({ id, type }) {
  const [smsDetails, setSmsDetails] = useState({
    name: "",
    smsBody: "",
  });
  const dispatch = useDispatch();
  const elements = useStore.getState().initialElements;

  const handleOnChange = (smsDetails) => {
    setSmsDetails(smsDetails);
  };

//   const handleClick = (event) => {
//     event.stopPropagation();
//     useStore.getState().handlePopUp({
//       type: "HANDLE_COMPONENT_RENDER",
//       componentToRender: (
//         <PopUpComponent
//           handleOnChange={handleOnChange}
//           inputSmsBody={smsDetails.smsBody}
//           inputName={smsDetails.name}
//         />
//       )
//     });
//     useStore.getState().handlePopUp({
//       type: "HANDLE_POP_UP", popUpState: true 
//     });

//   };

  return (
    <div className={styles.WrapperWrapper}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <ButtonCross
          onClick={() => {
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
        <h2 className={styles.Heading}>Welcome Email</h2>
       <img src="./images.jpeg"/>
      </div>
      <Handle type="target" position="top" className={styles.Handle} />
      <Handle type="source" position="bottom" className={styles.Handle} />
    </div>
  );
}

export default EmailTypeNode;
