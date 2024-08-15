import axios from 'axios';

export const fetchTasks = async () => {
  return axios.get(`${process.env.REACT_APP_API_URL}/api/tasks`);
};

export const addTask = async (task) => {
  return axios.post(`${process.env.REACT_APP_API_URL}/api/tasks`, task);
};