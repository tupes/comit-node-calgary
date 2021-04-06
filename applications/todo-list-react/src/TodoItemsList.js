import React from "react";

export default function TodoItemsList(props) {
  const {
    itemsStatus,
    todoItems,
    handleCompleteItem,
    handleDeleteItem,
  } = props;

  return (
    <section>
      <h2>{itemsStatus} To-Dos</h2>
      <ul id="active-list">
        {todoItems.map((todoItem) => (
          <li>
            <span>{todoItem.description}</span>
            <button id={todoItem.id} onClick={handleCompleteItem}>
              Complete
            </button>
            <button id={todoItem.id} onClick={handleDeleteItem}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
