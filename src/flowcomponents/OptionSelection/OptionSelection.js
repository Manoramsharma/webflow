import React from "react";
import styles from "./OptionSelection.module.css";
import SubOptionSelection from "./SubOptionSelction";

import addNode from "../../Utils/Helpers/addNode";
import useStore from "../../store";

const OptionSelection = () => {
  const initialElements = useStore.getState().initialElements
  const edgeId = useStore.getState().edgeId;
  return (
    <div className={styles.WrapperWrapper}>
      <h2 className={styles.Heading}>Add a next step to your workflow</h2>
      <div className={styles.Wrapper}>
        <SubOptionSelection
          name="sms"
          callerFunction={() => {
            const tempInitialElement = addNode(
              initialElements,
              edgeId,
              "smsNode",
              false,
              "correct"
            );
            setTimeout(() => {
              useStore.getState().handleNode({
                type: "INITIAL_ELEMENTS",
                initialElements: tempInitialElement,
              });
              useStore.getState().handlePopUp({
                type: "HANDLE_POP_UP",
                popUpState: false,
              })
            }, 100);
            setTimeout(() => {
              document.getElementById("LayoutButton").click();
              document.getElementById("LayoutButton").click();
            }, 200);
          }}
        />
          <SubOptionSelection
          name="email"
          callerFunction={() => {
            const tempInitialElement = addNode(
              initialElements,
              edgeId,
              "emailNode",
              false,
              "correct"
            );
            setTimeout(() => {
              useStore.getState().handleNode({
                type: "INITIAL_ELEMENTS",
                initialElements: tempInitialElement,
              });
              useStore.getState().handlePopUp({
                type: "HANDLE_POP_UP",
                popUpState: false,
              })
            }, 100);
            setTimeout(() => {
              document.getElementById("LayoutButton").click();
              document.getElementById("LayoutButton").click();
            }, 200);
          }}
        />
        <SubOptionSelection
          name="delay"
          callerFunction={() => {
            const tempInitialElement = addNode(
              initialElements,
              edgeId,
              "delayNode",
              false,
              "correct"
            );
            setTimeout(() => {
              useStore.getState().handleNode({
                type: "INITIAL_ELEMENTS",
                initialElements: tempInitialElement,
              });
              useStore.getState().handlePopUp({
                type: "HANDLE_POP_UP",
                popUpState: false,
              })
            }, 100);
            setTimeout(() => {
              document.getElementById("LayoutButton").click();
              document.getElementById("LayoutButton").click();
            }, 200);
          }}
        />
        <SubOptionSelection
          name="condition"
          callerFunction={() => {
            const tempInitialElement = addNode(
              initialElements,
              edgeId,
              "conditionNode",
              true,
              "wrong"
            );
            setTimeout(() => {
              useStore.getState().handleNode({
                type: "INITIAL_ELEMENTS",
                initialElements: tempInitialElement,
              });
              useStore.getState().handlePopUp({
                type: "HANDLE_POP_UP",
                popUpState: false,
              })
            }, 100);
            setTimeout(() => {
              document.getElementById("LayoutButton").click();
              document.getElementById("LayoutButton").click();
            }, 200);
          }}
        />
      </div>
    </div>
  );
};

export default OptionSelection;
