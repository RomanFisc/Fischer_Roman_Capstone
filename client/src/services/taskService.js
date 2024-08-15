import axios from 'axios';

const API_URL = 'http://localhost:3001/api/tasks';

const getToken = () => localStorage.getItem('token');

export const fetchTasks = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: { Authorization: `Bearer ${getToken()}` }
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching tasks: ' + error.message);
  }
};

export const addTask = async (task) => {
  try {
    const response = await axios.post(API_URL, task, {
      headers: { Authorization: `Bearer ${getToken()}` }
    });
    return response.data;
  } catch (error) {
    throw new Error('Error adding task: ' + error.message);
  }
};

export const deleteTask = async (taskId) => {
  try {
    await axios.delete(`${API_URL}/${taskId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    });
  } catch (error) {
    throw new Error('Error deleting task: ' + error.message);
  }
};