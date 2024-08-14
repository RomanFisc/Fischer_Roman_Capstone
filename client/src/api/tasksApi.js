import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:3000/api/tasks' });

export const getTasks = () => api.get('/');
export const createTask = (task) => api.post('/', task);
export const deleteTask = (id) => api.delete(`/${id}`);