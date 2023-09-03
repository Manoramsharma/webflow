import React from "react";
import { Handle } from "react-flow-renderer";
import styles from "./WrongNodeType.module.css";
import ButtonCross from "../../ButtonCross";
import removeNode from "../../../Utils/Helpers/removeNode";
import useStore from "../../../store";

function WrongNodeType({id,type}) {
  const initialElements = useStore((state)=>state.initialElements);

  return (
    <div className={styles.Wrapper}>
        <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <ButtonCross
          onClick={() => {
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
      <h2>Wrong</h2>
      <Handle type="target" position="top" />
      <Handle type="source" position="bottom" />
    </div>
  );
}

export default WrongNodeType;
