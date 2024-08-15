import axios from 'axios';

export const fetchTags = async () => {
  return axios.get(`${process.env.REACT_APP_API_URL}/api/tags`);
};