import axios from 'axios';

const API = axios.create({
  baseURL: 'https://expense-tracker-alpha-six-99.vercel.app/api', // Standard relative URL for monorepo on Vercel
});

export default API;