import { useState } from "react";
import "./AddTask.css";

function AddTask({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText("");
    }
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="task-input"
      />
      <button type="submit" className="add-btn">
        ➕ Add Task
      </button>
    </form>
  );
}

export default AddTask;
