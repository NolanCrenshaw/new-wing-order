import React from "react";

// Icon Reapter Function ~ Used for heat icons SauceCard.js
export const Repeater = (props) => {
  let icons = [];
  for (let i = 0; i < props.numTimes; i++) {
    icons.push(props.children(i));
  }
  return <div>{icons}</div>;
};

// Covert Float to String
export const FloatToString = (num) => {
  if (Number.isInteger(num)) {
    return num + ".0";
  } else {
    return num.toString();
  }
};
