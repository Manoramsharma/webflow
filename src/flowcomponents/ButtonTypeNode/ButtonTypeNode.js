import React from "react";
import {
  getBezierPath,
  getEdgeCenter,
  getMarkerEnd,
} from "react-flow-renderer";
import "./Style1.scss";
import { Handle } from "react-flow-renderer";
import styles from "./ButtonTypeNode.module.css";
import { useDispatch } from "react-redux";
import OptionSelection from "../OptionSelection";
import EdgeAddButton from "../../Buttons/EdgeAddButton/EdgeAddButton";
import {useStore} from "../../store";
const [buttonWidth, buttonHeight] = [100, 40];


const ButtonTypeNode = (props) => {
  const {
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    arrowHeadType,
    markerEndId,
    data,
  } = props;
  const edgePath = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });
  const markerEnd = getMarkerEnd(arrowHeadType, markerEndId);

  const [edgeCenterX, edgeCenterY] = getEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  const { isAddButtonHidden } = data;
  const dispatch = useDispatch();
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
      <OptionSelection/>
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
