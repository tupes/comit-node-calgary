import React from "react";

export default function TodoItemDescription(props) {
  const { description, handleChange } = props;

  return (
    <input id="input-description" value={description} onChange={handleChange} />
  );
}
