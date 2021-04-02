import TodoItemDescription from "./TodoItemDescription";
import AddTodoButton from "./AddTodoButton";

export default function CreateTodoItem(props) {
  const { description, errorMessage, handleChange, handleAddItem } = props;

  return (
    <section>
      <p>Enter To-Dos</p>
      <form>
        <TodoItemDescription
          description={description}
          handleChange={handleChange}
        />
        {errorMessage && <p id="error-output">{errorMessage}</p>}
        <AddTodoButton handleAddItem={handleAddItem} />
      </form>
    </section>
  );
}
