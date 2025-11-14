import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoApp() {
  const [sections, setSections] = useState({});

  const addSection = (sectionName) => {
    if (!sectionName.trim()) return;
    if (sections[sectionName]) return alert("Section already exists!");
    setSections({ ...sections, [sectionName]: [] });
  };

  const addTodo = (section, todo) => {
    const updated = { ...sections };
    updated[section].push(todo);
    setSections(updated);
  };

  const toggleTodo = (section, index) => {
    const updated = { ...sections };
    updated[section][index].completed = !updated[section][index].completed;
    setSections(updated);
  };

  const deleteTodo = (section, index) => {
    const updated = { ...sections };
    updated[section].splice(index, 1);
    setSections(updated);
  };

  return (
    <div className="todo-app">
      <TodoForm addSection={addSection} />

      {Object.keys(sections).length === 0 && (
        <p className="empty-text">No sections yet — add one above!</p>
      )}

      {Object.keys(sections).map((section) => (
        <div key={section} className="section">
          <h2>{section}</h2>
          <TodoList
            todos={sections[section]}
            section={section}
            addTodo={addTodo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        </div>
      ))}
    </div>
  );
}

export default TodoApp;
