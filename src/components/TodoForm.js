import React, { useState } from "react";

function TodoForm({ addSection }) {
  const [sectionInput, setSectionInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addSection(sectionInput);
    setSectionInput("");
  };

  return (
    <form className="section-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new section (e.g., Work, Home, Fitness)"
        value={sectionInput}
        onChange={(e) => setSectionInput(e.target.value)}
      />
      <button type="submit">Add Section</button>
    </form>
  );
}

export default TodoForm;
