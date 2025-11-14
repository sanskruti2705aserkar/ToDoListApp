import React from "react";

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <span onClick={toggleTodo}>{todo.text}</span>
      <button onClick={deleteTodo}>❌</button>
    </div>
  );
}

export default TodoItem;
