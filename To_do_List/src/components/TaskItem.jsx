import React from "react";

function TaskItem({ item, onDelete, onToggle }) {
  return (
    <div className="items" style={{ color: item.completed ? "white" : "red" }}>
      {item.task}
      <button onClick={onDelete}>Delete Task</button>
      <button onClick={onToggle}>Toggle Task</button>
    </div>
  );
}

export default TaskItem;