import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onTaskUpdate, onTaskDelete }) => {
  return (
    <div>
      {tasks.map(task => (
        <TaskItem
          key={task._id}
          task={task}
          onTaskUpdate={onTaskUpdate}
          onTaskDelete={onTaskDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;