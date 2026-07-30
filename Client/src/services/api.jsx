import axios from "axios";

const API = axios.create({
  baseURL: "https://expense-tracker-alpha-six-99.vercel.app",
});

export default API;