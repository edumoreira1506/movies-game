require('dotenv').config();

const apiUrl = process.env.REACT_APP_URL_API;

import axios from 'axios';

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  }
});

export default api;
