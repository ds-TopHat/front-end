import axios from 'axios';

import { onErrorResponse, onRequest } from '@/shared/apis/interceptor';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_DEV_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(onRequest);
instance.interceptors.response.use((response) => response, onErrorResponse);
