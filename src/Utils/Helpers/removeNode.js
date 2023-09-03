import {
  isNode,
  isEdge,
} from "react-flow-renderer";

const removeNode = (initialElements, nodeId, type) => {
  if (type === "conditionNode") {
    return removeNodeWithNoCondition(initialElements, nodeId, type);
  } else {
    return removeNodeWithNoCondition(initialElements, nodeId, type);
  }
};


const removeNodeWithNoCondition = (initialElements, nodeId, type) => {
  const edges = initialElements.filter((el) => isEdge(el));
  const nodeToRemove = initialElements.find((el) => el.id === nodeId);
  const edgeToUpdate = edges.find((el) => el.source === nodeId);
  const edgeToRemove = edges.find((el) => el.target === nodeId);

  initialElements.splice(initialElements.indexOf(nodeToRemove), 1);
  initialElements.splice(initialElements.indexOf(edgeToRemove), 1);

  for (let i = 0; i < initialElements.length; i++) {
    if (
      initialElements[i].id === edgeToUpdate.id &&
      isEdge(initialElements[i])
    ) {
      initialElements[i].source = edgeToRemove.source;
      initialElements[
        i
      ].id = `${edgeToRemove.source}-${initialElements.target}`;
    }
  }
  return initialElements;
};

export default removeNode;
