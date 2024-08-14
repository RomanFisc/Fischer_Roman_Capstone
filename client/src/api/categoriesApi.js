import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:3000/api/categories' });

export const getCategories = () => api.get('/');
export const createCategory = (category) => api.post('/', category);
export const deleteCategory = (id) => api.delete(`/${id}`);