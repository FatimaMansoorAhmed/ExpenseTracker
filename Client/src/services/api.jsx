import axios from 'axios';

const API = axios.create({
  baseURL: '/api', // Standard relative URL for monorepo on Vercel
});

export default API;