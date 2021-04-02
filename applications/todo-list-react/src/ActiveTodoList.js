import React from "react";

export default function ActiveTodoList(props) {
  const { todoItems, handleCompleteItem, handleDeleteItem } = props;

  return (
    <section>
      <h2>Active To-Dos</h2>
      <ul id="active-list">
        {todoItems.map((todoItem) => (
          <li>
            <span>{todoItem.description}</span>
            <button id={todoItem.id} onClick={handleCompleteItem}>
              Complete
            </button>
            <button onClick={handleDeleteItem}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
