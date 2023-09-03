import React, { useRef } from "react";
import OptionSelection from "../../OptionSelection";
import styles from "./PopUpComponent.module.css";
import useStore from "../../../store";

const tempData = [
  { value: "hour(s)" },
  { value: "minute(s)" },
  { value: "day(s)" },
  { value: "week(s)" },
  { value: "month(s)" },
];

const PopUpComponent = ({ handleOnChange, inputAmount, inputDelay }) => {
  const delayDetails = useRef(null);
  const handleChange = (event) => {
    event.preventDefault();
    handleOnChange({
      amount: delayDetails.current.elements.amount.value,
      delay: delayDetails.current.elements.delay.value,
    });
  };
  return (
    <div className={styles.Wrapper}>
      <h2 className={styles.Heading}>Edit Delay</h2>
      <form
        ref={delayDetails}
        onSubmit={(e) => {
          e.preventDefault();
          useStore.getState().handlePopUp({
            type: "HANDLE_POP_UP", popUpState: false 
          });
          setTimeout(() => {
            useStore.getState().handlePopUp({
              type: "HANDLE_COMPONENT_RENDER",
              componentToRender: <OptionSelection />,
            });
          }, 500);
        }}
      >
        <input
          type="number"
          name="amount"
          id="numberPopUpComponent"
          placeholder="Time Amount"
          onChange={handleChange}
          defaultValue={inputAmount}
        />
        <select
          name="delay"
          id="delayPopUpComponent"
          onChange={handleChange}
          defaultValue={inputDelay}
        >
          {tempData.map((item, index) => (
            <option key={index} value={item.value}>
              {item.value}
            </option>
          ))}
        </select>
        <button>Save</button>
      </form>
    </div>
  );
};

export default PopUpComponent;
