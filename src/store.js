import {create} from 'zustand';
import OptionSelection from './flowcomponents/OptionSelection';

export const useStore = create((set) => ({
      initialElements: [],
      nodes: [],
      popUpState: false,
      edgeId: "",
      nodeName: '',
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
      setShow: (action) => {
        set((state) => {
          switch(action.type){
            case 'SET_NAME':
              return {
                ...state,
                nodeName: action.nodeName
              }
          }
        })
      }
      
}))

export default useStore;