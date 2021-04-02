import React from "react";

export default function AddTodoButton(props) {
  const { handleAddItem } = props;

  return (
    <button type="button" id="add-button" onClick={handleAddItem}>
      Add To-Do
    </button>
  );
}
