import axios, { AxiosError } from 'axios';
import { enqueueSnackbar } from 'notistack';

import { ErrorResponse } from './api.types.ts';

export const baseURL = import.meta.env.VITE_SERVER_URL ?? 'http://localhost:3000';

export const apiClient = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 30000,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ErrorResponse>) => {
    if (error.status >= 500) {
      enqueueSnackbar('An error occurred', { variant: 'error' });
    } else throw error;
  }
);
