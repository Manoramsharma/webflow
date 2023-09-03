import React, { useEffect, useRef, useState } from "react";
import ReactFlow, {
  ReactFlowProvider,
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
import ButtonTypeNode from "../../flowcomponents/ButtonTypeNode";
import SmsTypeNode from "../../flowcomponents/SmsTypeNode";
import ConditionTypeNode from "../../flowcomponents/ConditionTypeNode";
import DelayTypeNode from "../../flowcomponents/DelayTypeNode";
import CorrectNodeType from "../../flowcomponents/ConditionNodeType/CorrectNodeType";
import WrongNodeType from "../../flowcomponents/ConditionNodeType/WrongNodeType";
import EmailTypeNode from "../../flowcomponents/EmailTypeNode/EmailTypeNode";


// const NodeDetails = () => {
 
//   const nodes = useStore((state)=>state.nodes);
//   useStore.getState().handleNode({
//     type: "SET_NODES", 
//     nodes: nodes
//   })
//   return <></>;
// };

const edgeTypes = {
  buttonedge: ButtonEdge,
};
const nodeTypes = {
  selectorNode: ButtonTypeNode,
  smsNode: SmsTypeNode,
  emailNode: EmailTypeNode,
  conditionNode: ConditionTypeNode,
  delayNode: DelayTypeNode,
  correctNode: CorrectNodeType,
  wrongNode: WrongNodeType,
};

const Home = (props) => {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));
  const triggerRef = useRef(null);
  const elements = useStore((state)=>state.initialElements) 
  const popUpState = useStore((state)=>state.popUpState)
  const componentToRender = useStore((state)=>state.componentToRender)
  const nodes = useStore((state)=>state.nodes);
  useEffect(()=>{
    setLayoutedElements(getLayoutedElements(elements))
    setElements(getLayoutedElements(elements, 'TB'))
      // eslint-disable-next-line 
  },[elements])

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
      // const currNode = nodes.find((node) => node.id === el.id);
      // let currHeight = currNode == null ? 200 : currNode.__rf.height;
      // let currWidth = currNode == null ? 10 : currNode.__rf.width;
      if (isNode(el)) {
        dagreGraph.setNode(el.id, {
          width: 350,
          height: 250,
        });
      } else {
        dagreGraph.setEdge(el.source, el.target);
      }
    });

    dagre.layout(dagreGraph);

    return elements.map((el) => {
      // const currNode = nodes.find((node) => node.id === el.id);
      // let currHeight = currNode == null ? 200 : currNode.__rf.height;
      // let currWidth = currNode == null ? 100 : currNode.__rf.width;
      if (isNode(el)) {
        const nodeWithPosition = dagreGraph.node(el.id);
        el.targetPosition = isHorizontal ? "left" : "top";
        el.sourcePosition = isHorizontal ? "right" : "bottom";
        let element = document.getElementById(`${styles.ReactFlowWrapper}`);
        let elementWidth = element == null ? 0 : element.offsetWidth;
        el.position = {
          x: nodeWithPosition.x - 200 + elementWidth / 2 + 75,
          // elementWidth / 2 +
          // Math.random() / 1000,
          y: nodeWithPosition.y + 100,
        };
      }

      return el;
    });
  };

  const [layoutedElements, setLayoutedElements] = useState(getLayoutedElements(elements));

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
            nodesDraggable={true}
          >
            {/* <NodeDetails /> */}
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
