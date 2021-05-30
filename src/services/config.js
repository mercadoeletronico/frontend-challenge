import axios from 'axios';

export const http = axios.create({
    baseURL: 'https://me-frontend-challenge-api.herokuapp.com/orders'
});