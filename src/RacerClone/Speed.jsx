import React, { memo } from "react";

const Speed = (props) => {
  if (props.symbols !== 0 && props.sec !== 0) {
    const wpm = props.symbols / 5 / (props.sec / 60);
    return <div>{Math.round(wpm)} wpm</div>;
  }
  return null;
};
export default memo(Speed); 
