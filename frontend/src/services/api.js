import axios from 'axios';

const api = axios.create({
  baseURL: 'https://me-frontend-challenge-api.herokuapp.com'
});

export default api;
