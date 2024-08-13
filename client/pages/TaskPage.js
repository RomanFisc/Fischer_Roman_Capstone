import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TaskPage = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(`/api/tasks/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setTask(response.data);
      } catch (error) {
        console.error('Error fetching task', error);
      }
    };

    fetchTask();
  }, [id]);

  const handleTaskUpdate = async (updates) => {
    try {
      const response = await axios.put(`/api/tasks/${id}`, updates, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setTask(response.data);
    } catch (error) {
      console.error('Error updating task', error);
    }
  };

  return (
    task ? (
      <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <button onClick={() => handleTaskUpdate({ completed: !task.completed })}>
          {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
        </button>
      </div>
    ) : (
      <p>Loading...</p>
    )
  );
};

export default TaskPage;