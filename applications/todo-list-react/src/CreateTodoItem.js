import React, { useState } from "react";
import TodoItemDescription from "./TodoItemDescription";
import AddTodoButton from "./AddTodoButton";

export default function CreateTodoItem() {
  const [todoItemDescription, setTodoItemDescription] = useState("");

  const handleDescriptionChange = (event) => {
    const description = event.target.value;
    console.log(description);
    setTodoItemDescription(description);
  };

  return (
    <section>
      <p>Enter To-Dos</p>
      <form>
        <TodoItemDescription
          description={todoItemDescription}
          handleChange={handleDescriptionChange}
        />
        <p id="error-output"></p>
        <AddTodoButton />
      </form>
    </section>
  );
}
