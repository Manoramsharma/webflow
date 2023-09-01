import dagre from "dagre";
import _ from "lodash";
import { isNode } from "react-flow-renderer";

const nodeWidth = 250;
const nodeHeight = 80;

const getLayoutedElements = (_elements) => {
  const elements = _.cloneDeep(_elements);
  const dagreGraph = new dagre.graphlib.Graph();

  const nodes = elements.filter((x) => !x.target);


  dagreGraph.setDefaultEdgeLabel(() => ({}));
  dagreGraph.setGraph({ rankdir: "TB" });

  elements.forEach((el) => {
    const currNode = nodes.find((node) => node.id === el.id);
    let currHeight = currNode == null ? 200 : 80;
    let currWidth = currNode == null ? 10 : 250;
    if (isNode(el)) {
      dagreGraph.setNode(el.id, {
        width: currWidth,
        height: currHeight+10,
      });
    } else {
      dagreGraph.setEdge(el.source, el.target);
    }
  });

  dagre.layout(dagreGraph);

  return elements.map((el) => {
    const currNode = nodes.find((node) => node.id === el.id);
    let currHeight = currNode == null ? 200 :80;
    let currWidth = currNode == null ? 100 : 250;
    if (isNode(el)) {
      const nodeWithPosition = dagreGraph.node(el.id);
      el.targetPosition = "top";
      el.sourcePosition = "bottom";
      el.position = {
        x:
          nodeWithPosition.x -
          currWidth / 2 +
          Math.random() / 1000,
        y: nodeWithPosition.y - currHeight/ 2,
      };
    }
    return el;
  });
};

export { getLayoutedElements };
