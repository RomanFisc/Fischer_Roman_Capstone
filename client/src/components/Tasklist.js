import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask } from '../api/tasksApi';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const response = await getTasks();
    setTasks(response.data);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  return (
    <ul>
      {tasks.map(task => (
        <li key={task._id}>
          {task.title} - {task.category.name} - {task.priority}
          <button onClick={() => handleDelete(task._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;