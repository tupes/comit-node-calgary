import { useState } from "react";
import cuid from "cuid";

import Header from "./Header";
import CreateTodoItem from "./CreateTodoItem";
import ActiveTodoList from "./ActiveTodoList";
import CompletedTodoList from "./CompletedTodoList";

function App() {
  const [todoItemDescription, setTodoItemDescription] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleDescriptionChange = (event) => {
    const description = event.target.value;
    console.log(description);
    setTodoItemDescription(description);
  };

  const handleAddItem = () => {
    if (!todoItemDescription) {
      setErrorMessage("Please provide a description of the to-do item.");
      return;
    }
    setErrorMessage(null);
    setTodoItemDescription("");

    const updatedTodoItems = [
      ...todoItems,
      {
        id: cuid(),
        description: todoItemDescription,
        status: "active",
      },
    ];
    setTodoItems(updatedTodoItems);
  };

  const handleCompleteItem = (event) => {
    console.log("Completing item");

    const updatedTodoItems = todoItems.map((todoItem) => {
      if (todoItem.id === event.target.id) {
        return { ...todoItem, status: "complete" };
      }
      return todoItem;
    });

    setTodoItems(updatedTodoItems);
  };

  const handleDeleteItem = () => {
    console.log("Deleting item");
  };

  return (
    <div className="container">
      <Header />
      <main>
        <CreateTodoItem
          description={todoItemDescription}
          errorMessage={errorMessage}
          handleChange={handleDescriptionChange}
          handleAddItem={handleAddItem}
        />
        <ActiveTodoList
          todoItems={todoItems}
          handleCompleteItem={handleCompleteItem}
          handleDeleteItem={handleDeleteItem}
        />
        <CompletedTodoList todoItems={[]} />
      </main>
    </div>
  );
}

export default App;
