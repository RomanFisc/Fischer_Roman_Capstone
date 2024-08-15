import axios from 'axios';

export const fetchCategories = async () => {
  return axios.get(`${process.env.REACT_APP_API_URL}/api/categories`);
};