import React from "react";

function Input(props) {
  return (
    <input
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      type={props.type}
    />
  );
}

export default Input;
