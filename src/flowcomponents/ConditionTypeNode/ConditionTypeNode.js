import React from "react";
import { Handle } from "react-flow-renderer";
import removeNode from "../../Utils/Helpers/removeNode";
import ButtonCross from "../ButtonCross";
import styles from "./ConditionTypeNode.module.css";
import useStore from "../../store";

function ConditionTypeNode({ id, type }) {
  const initialElements = useStore((state)=>state.initialElements);

  const handleOnClick = ()=>{
    useStore.getState().handlePopupName({
      type: "HANDLE_POPUP_NAME", popUpName: 'condition'
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
            const tempEle = removeNode(initialElements, id, type);
            console.log(tempEle,"remove button");
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
        <h2 className={styles.Heading}>Condition Workflow</h2>
        <button>Edit Condition</button>
        <button
          onClick={() => {
            setTimeout(() => {
              document.getElementById("LayoutButton").click();
              document.getElementById("LayoutButton").click();
            }, 200);
          }}
        >
          Swap Branches
        </button>
      </div>
      <Handle type="target" position="top" className={styles.Handle} />
      <Handle type="source" position="bottom" className={styles.Handle} />
    </div>
  );
}

export default ConditionTypeNode;
