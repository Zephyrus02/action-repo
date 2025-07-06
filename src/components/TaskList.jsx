import TaskItem from "./TaskItem";
import "./TaskList.css";

function TaskList({ tasks, onDelete, onToggle }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <h3>🎉 All done!</h3>
        <p>No tasks yet. Add one above to get started.</p>
      </div>
    );
  }

  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;

  return (
    <div className="task-list">
      <div className="task-stats">
        <span className="stats-text">
          {completedTasks} of {totalTasks} tasks completed
        </span>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${(completedTasks / totalTasks) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="tasks">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
