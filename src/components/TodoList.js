import React, { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, section, addTodo, toggleTodo, deleteTodo }) {
  const [todoText, setTodoText] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!todoText.trim()) return;
    addTodo(section, { text: todoText, completed: false });
    setTodoText("");
  };

  return (
    <div className="todo-list">
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder={`Add task in ${section}`}
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {todos.length === 0 ? (
        <p className="empty-text">No tasks yet</p>
      ) : (
        todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            toggleTodo={() => toggleTodo(section, index)}
            deleteTodo={() => deleteTodo(section, index)}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;
