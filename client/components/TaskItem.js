import React from 'react';

const TaskItem = ({ task, onTaskUpdate, onTaskDelete }) => {
  const handleToggleComplete = () => {
    onTaskUpdate(task._id, { completed: !task.completed });
  };

  const handleDelete = () => {
    onTaskDelete(task._id);
  };

  return (
    <div style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={handleToggleComplete}>
        {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;