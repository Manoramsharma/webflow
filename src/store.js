import {create} from 'zustand';
import OptionSelection from './flowcomponents/OptionSelection';

export const useStore = create((set) => ({
    initialElements: [
        {
          id: "1",
          data: { label: "Set Up Workflow Trigger" },
          style: {
            fontSize: "var(--font-16)",
            fontWeight: "500",
          },
          position: { x: 0, y: 0 },
        },
        {
          id: "2",
          data: { label: "Node 3" },
          type: "selectorNode",
          position: { x: 0, y: 0 },
        },
        {
          id: "1-2",
          source: "1",
          target: "2",
          type: "smoothedge",
        },
      ],
      nodes: [],
      popUpState: false,
      edgeId: "",
      componentToRender: <OptionSelection />,
      handleNode: (action) => {
        set((state) => {
          switch (action.type) {
            case 'INITIAL_ELEMENTS': {
              return {
                ...state,
                initialElements: action.initialElements,
              };
            }
            case 'SET_NODES': {
              return {
                ...state,
                nodes: action.nodes,
              };
            }
            default:
              return state;
          }
        });
      },
      handlePopUp: (action) => {
        set((state) => {
          switch (action.type) {
            case 'HANDLE_POP_UP': {
              return {
                ...state,
                popUpState: action.popUpState,
              };
            }
            case 'HANDLE_EDGE_CLICK': {
              return {
                ...state,
                edgeId: action.edgeId,
              };
            }
            case 'HANDLE_COMPONENT_RENDER': {
              return {
                ...state,
                componentToRender: action.componentToRender,
              };
            }
            default:
              return state;
          }
        });
      },
      
}))

export default useStore;