import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './TaskList'; 

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('/api/auth/status');
        setIsLoggedIn(response.data.isLoggedIn);
      } catch (error) {
        console.error('Error checking auth status:', error);
      }
    };

    checkAuth();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('/api/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchTasks();
    }
  }, [isLoggedIn]);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Task Management</h1>
          <TaskList tasks={tasks} />
        </div>
      ) : (
        <h1>Please log in to manage your tasks</h1>
      )}
    </div>
  );
};

export default Home;