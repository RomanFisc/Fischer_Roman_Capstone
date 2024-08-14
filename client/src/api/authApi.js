import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:3000/api/auth' });

export const login = (credentials) => api.post('/login', credentials);
export const register = (user) => api.post('/register', user);