import React from "react";

export function Repeater(props) {
  let icons = [];
  for (let i = 0; i < props.numTimes; i++) {
    icons.push(props.children(i));
  }
  return <div>{icons}</div>;
}
