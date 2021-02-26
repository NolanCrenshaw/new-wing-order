import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({ register, name, value, onChange }) => {
  const [thisValue, setThisValue] = useState();
  const handler = (e) => setThisValue(e.target.value);

  return (
    <>
      <DatePicker
        name={name}
        value={thisValue}
        onChange={handler}
        ref={register}
      />
    </>
  );
};

export default DateInput;
