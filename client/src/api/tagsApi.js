import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:3000/api/tags' });

export const getTags = () => api.get('/');
export const createTag = (tag) => api.post('/', tag);
export const deleteTag = (id) => api.delete(`/${id}`);