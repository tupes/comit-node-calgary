import Header from "./Header";
import CreateTodoItem from "./CreateTodoItem";
import ActiveTodoList from "./ActiveTodoList";

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <CreateTodoItem />
        <ActiveTodoList />
      </main>
    </div>
  );
}

export default App;
