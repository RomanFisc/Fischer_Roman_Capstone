import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from '../components/TaskList';

const HomePage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('/api/tasks', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks', error);
      }
    };

    fetchTasks();
  }, []);

  const handleTaskUpdate = async (taskId, updates) => {
    try {
      const response = await axios.put(`/api/tasks/${taskId}`, updates, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setTasks(tasks.map(task => (task._id === taskId ? response.data : task)));
    } catch (error) {
      console.error('Error updating task', error);
    }
  };

  const handleTaskDelete = async (taskId) => {
    try {
      await axios.delete(`/api/tasks/${taskId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setTasks(tasks.filter(task => task._id !== taskId));
    } catch (error) {
      console.error('Error deleting task', error);
    }
  };

  return <TaskList tasks={tasks} onTaskUpdate={handleTaskUpdate} onTaskDelete={handleTaskDelete} />;
};

export default HomePage;
