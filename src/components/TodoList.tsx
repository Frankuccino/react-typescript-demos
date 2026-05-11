import { useState } from "react";

interface TodoItem {
  id: number;
  title: string;
}

const TodoList = () => {
  const todoItems: TodoItem[] = [
    { id: 1, title: "Clean the house" },
    { id: 2, title: "Water the plants" },
  ];

  const [todos, setTodos] = useState<TodoItem[]>(todoItems);
  const [inputValue, setInputValue] = useState<string>("");

  // The type for the event is below React.SubmitEvent<HTMLFormElement>
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    const newTodo: TodoItem = {
      id: todos.length + 1,
      title: inputValue,
    };

    setTodos([...todos, newTodo]);

    setInputValue("");
  };

  return (
    <div>
      <h1>Todolist</h1>
      <section>
        <ul>
          {todos.map(({ id, title }: TodoItem) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
        <h3>Add todo Items</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <button type="submit">Add Todo</button>
        </form>
      </section>
    </div>
  );
};

export default TodoList;
