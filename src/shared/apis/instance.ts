import axios from 'axios';

import { tokenService } from '@/shared/auth/services/tokenService';
import { authService } from '@/shared/auth/services/authService';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_DEV_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터
instance.interceptors.request.use(
  (config) => {
    const token = tokenService.getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// 응답 인터셉터
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      authService.logout();
      // TODO: 리프레시 토큰 붙이면 여기서 갱신 로직
    }
    return Promise.reject(error);
  },
);
