import React from "react";

import "./Style1.scss";
import { Handle } from "react-flow-renderer";
import styles from "./ButtonTypeNode.module.css";
import OptionSelection from "../OptionSelection";
import {useStore} from "../../store";


const ButtonTypeNode = (props) => {
  const {
    id,
  } = props;

  const onEdgeClick = (evt, id) => {
    evt.stopPropagation();
    useStore.getState().handlePopUp({
      type: "HANDLE_EDGE_CLICK", edgeId: id
    })
  };
  return (
    <div
      className={styles.WrapperWrapper}
      style={
        {
          // width: 150,
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
        }
      }
    >
      <Handle type="target" position="top" className={styles.Handle} />
      <button
        className={styles.Button}
        onClick={(event) => {
          useStore.getState().handlePopUp({
            type: "HANDLE_POP_UP", popUpState: true
          })
          console.log(
            useStore.getState().handlePopUp({
              type: "HANDLE_POP_UP", popUpState: true
            })
          )
          useStore.getState().handlePopUp({
            type: "HANDLE_COMPONENT_RENDER",
            componentToRender: <OptionSelection />,
          })
          onEdgeClick(event, id);
        }}
      >
        +
      </button>
    </div>
   
  );
};
export default ButtonTypeNode;
