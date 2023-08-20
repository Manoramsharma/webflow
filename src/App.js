import React from "react";
import _ from "lodash";
import Layout from "./Automation";
import { getIncomers, getOutgoers } from "react-flow-renderer";
import { getUpdatedElementsAfterNodeAddition } from "./Utils/WorkflowElementUtils";
import "antd/dist/antd.css";
import "./index.scss";
import RightPanel from "./rightPanel";

const App = () => {
  const [elements, setElements] = React.useState([]);
  const [initialElements, setInitialElements] = React.useState([
      {
        id: "e1-2",
        source: "1",
        target: "2",
        type: "condition",
      },
      {
        id: "e2-3",
        source: "2",
        target: "3",
        type: "condition",
      },
      {
        id: "e3-4",
        source: "3",
        target: "4",
        type: "condition",
        data: {
          title: "Default condition",
          disabled: true,
        },
      },
      {
        id: "e3-5",
        source: "3",
        target: "5",
        type: "condition",
        data: {
          title: "Editable branch",
        },
      },
      {
        id: "e4-6",
        source: "4",
        target: "6",
        type: "condition",
      },
      {
        id: "e5-6",
        source: "5",
        target: "6",
        type: "condition",
      },
      {
        id: "e6-7",
        source: "6",
        target: "7",
        type: "condition",
      },
  ]);
// const updateData =(data) =>{
//   setInitialElements(...initialElements, data)
// }
  const onAddNodeCallback = ({ id, type }) => {
    setElements((elements) =>
      getUpdatedElementsAfterNodeAddition({
        elements,
        targetEdgeId: id,
        type,
        onDeleteNodeCallback,
        onNodeClickCallback,
        onAddNodeCallback,
      })
    );
  };

  const onDeleteNodeCallback = (id) => {
    setElements((elements) => {
      const clonedElements = _.cloneDeep(elements);
      const incomingEdges = clonedElements.filter((x) => x.target === id);
      const outgoingEdges = clonedElements.filter((x) => x.source === id);
      const updatedIncomingEdges = incomingEdges.map((x) => ({
        ...x,
        target: outgoingEdges[0].target,
      }));
      const filteredElements = clonedElements.filter(
        (x) =>
          x.id !== id &&
          x.target !== incomingEdges[0].target &&
          x.source !== outgoingEdges[0].source
      );
      filteredElements.push(...updatedIncomingEdges);
      return filteredElements;
    });
  };

  const onNodeClickCallback = (id) => {
    setElements((elements) => {
      const currentNode = elements.find((x) => x.id === id);
      const nodes = elements.filter((x) => x.position);
      const edges = elements.filter((x) => !x.position);
      console.error({
        incomers: getIncomers(currentNode, nodes, edges),
        outgoers: getOutgoers(currentNode, nodes, edges),
      });
      return elements;
    });
    alert(`You clicked the "${id}" node`);
  };

  React.useEffect(() => {
    const nodes = initialElements
      .filter((x) => !x.target)
      .map((x) => ({
        ...x,
        data: { ...x.data, onDeleteNodeCallback, onNodeClickCallback },
      }));
    const edges = initialElements
      .filter((x) => x.target)
      .map((x) => ({ ...x, data: { ...x.data, onAddNodeCallback } }));
    setElements([...nodes, ...edges]);
  }, [initialElements]);
  console.log(elements)
  return (
    <div className="App">
      <div className="flex flex-row w-full">
        <RightPanel setInitialElements={setInitialElements}/>
        <Layout elements={elements} />
        {/* <PermanentDrawerRight/> */}
        {/* <Drawer opened={true} position="right"  overlayProps={{ opacity: 0, blur: 0 }} withCloseButton={false}>
            
        </Drawer> */}      
      </div>

    </div>
  );
};

export default App;
