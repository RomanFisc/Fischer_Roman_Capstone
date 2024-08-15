import axios from 'axios';

export const login = async (email, password) => {
  return axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, { email, password });
};

export const register = async (email, password) => {
  return axios.post(`${process.env.REACT_APP_API_URL}/api/auth/register`, { email, password });
};