import axios from 'axios';

export const baseURL = import.meta.env.VITE_SERVER_URL ?? 'http://localhost:3000';

export const apiClient = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 30000,
});
