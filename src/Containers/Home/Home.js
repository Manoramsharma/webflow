import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  isNode,
  Background,
  MiniMap,
  Controls,
} from "react-flow-renderer";
import {useStore} from "../../store";
import dagre from "dagre";

import styles from "./Home.module.css";
import ButtonEdge from "../../flowcomponents/ButtonEdge";
import PopUp from "../../flowcomponents/PopUp";
import OptionSelection from "../../flowcomponents/OptionSelection";
import ButtonTypeNode from "../../flowcomponents/ButtonTypeNode";
import SmsTypeNode from "../../flowcomponents/SmsTypeNode";
import ConditionTypeNode from "../../flowcomponents/ConditionTypeNode";
import DelayTypeNode from "../../flowcomponents/DelayTypeNode";
import CorrectNodeType from "../../flowcomponents/ConditionNodeType/CorrectNodeType";
import WrongNodeType from "../../flowcomponents/ConditionNodeType/WrongNodeType";


const NodeDetails = () => {
 
  const nodes = useStore.getState().nodes;
  useStore.getState().handleNode({
    type: "SET_NODES", 
    nodes: nodes
  })
  return <></>;
};

const edgeTypes = {
  buttonedge: ButtonEdge,
};
const nodeTypes = {
  selectorNode: ButtonTypeNode,
  smsNode: SmsTypeNode,
  conditionNode: ConditionTypeNode,
  delayNode: DelayTypeNode,
  correctNode: CorrectNodeType,
  wrongNode: WrongNodeType,
};

const Home = (props) => {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));
  const triggerRef = useRef(null);
  const nodeWidth = 150;
  const nodeHeight = 200;

  const elements = useStore.getState().initialElements;
  const popUpState = useStore.getState().popUpState;
  const componentToRender = useStore.getState().componentToRender;
  const nodes = useStore.getState().nodes;

console.log(elements, popUpState, componentToRender, nodes, "store fetched")
  // const onLoad = (reactFlowInstance) => {
  //   setTimeout(() => {
  //     onLayout("TB");
  //     triggerRef.current.click();
  //   }, 0);
  // };
  const onInit = (reactFlowInstance) => {
    setTimeout(() => {
      onLayout("TB");
      if (triggerRef.current) {
        triggerRef.current.click();
      }
    }, 0);
  };

  const getLayoutedElements = (elements, direction = "TB") => {
    const isHorizontal = direction === "LR";
    // dagreGraph.setGraph({ rankdir: direction, ranker: "tight-tree" });
    dagreGraph.setGraph({ rankdir: direction, ranker: "longest-path" });

    elements.forEach((el) => {
      const currNode = nodes.find((node) => node.id === el.id);
      let currHeight = currNode == null ? 200 : currNode.__rf.height;
      let currWidth = currNode == null ? 10 : currNode.__rf.width;
      if (isNode(el)) {
        dagreGraph.setNode(el.id, {
          width: currWidth,
          height: currHeight + 10,
        });
      } else {
        dagreGraph.setEdge(el.source, el.target);
      }
    });

    dagre.layout(dagreGraph);

    return elements.map((el) => {
      const currNode = nodes.find((node) => node.id === el.id);
      let currHeight = currNode == null ? 200 : currNode.__rf.height;
      let currWidth = currNode == null ? 100 : currNode.__rf.width;
      if (isNode(el)) {
        const nodeWithPosition = dagreGraph.node(el.id);
        el.targetPosition = isHorizontal ? "left" : "top";
        el.sourcePosition = isHorizontal ? "right" : "bottom";
        let element = document.getElementById(`${styles.ReactFlowWrapper}`);
        let elementWidth = element == null ? 0 : element.offsetWidth;
        el.position = {
          x: nodeWithPosition.x - currWidth / 2 + elementWidth / 2 - 75,
          // elementWidth / 2 +
          // Math.random() / 1000,
          y: nodeWithPosition.y - currHeight / 2,
        };
      }

      return el;
    });
  };

  const layoutedElements = getLayoutedElements(elements);

  const [nodeElements, setElements] = useState(layoutedElements);

  const onLayout = (direction) => {
    setElements(getLayoutedElements(elements, direction));
  };

  const layoutNodes = nodeElements.filter((x)=> x.position);
  const layoutEdges = nodeElements.filter((x)=> !x.position);

  console.log(nodeElements,"before reactflow")

  return (
    <>
      <div id={styles.ReactFlowWrapper}>
        <ReactFlowProvider>
          <ReactFlow
            nodes={layoutNodes}
            edges={layoutEdges}
            edgeTypes={edgeTypes}
            nodeTypes={nodeTypes}
            onInit={onInit}
            nodesDraggable={false}
          >
            <NodeDetails />
            <Background />
            <MiniMap />
            <Controls />
          </ReactFlow>
          <div className="controls" style={{ display: "none" }}>
            <button
              id="LayoutButton"
              onClick={() => onLayout("TB")}
              ref={triggerRef}
            >
              vertical layout
            </button>
            <button onClick={() => onLayout("LR")}>horizontal layout</button>
          </div>
        </ReactFlowProvider>
      </div>

      <PopUp
        ContentComp={componentToRender}
        isOpen={popUpState}
        closeFun={() => {
          useStore.getState().handlePopUp({
            type: "HANDLE_POP_UP", popUpState: false
          })
        }}
        isClosable={true}
        withBorder={false}
      />
    </>
  );
};

// const Layout1 = ()=>{

//   <ReactFlowProvider>
//     <Home/>
//   </ReactFlowProvider>

// }


export default Home;
