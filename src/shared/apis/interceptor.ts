import type { AxiosError, InternalAxiosRequestConfig } from 'axios';

import { tokenService } from '../auth/services/tokenService';
import { authService } from '../auth/services/authService';

import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

type FailedRequest = {
  resolve: (value?: unknown) => void;
  reject: (error?: AxiosError) => void;
};

let isRefreshing = false;
let failedRequests: FailedRequest[] = [];

export const onRequest = (config: InternalAxiosRequestConfig) => {
  const accessToken = tokenService.getAccessToken();
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
};

/**
 * 401 응답 시 → refresh flow
 */
export const onErrorResponse = async (error: AxiosError) => {
  const originRequest = error.config;

  if (!originRequest) {
    return Promise.reject(error);
  }

  if (error.response?.status === 401 && originRequest.url !== API_URL.REISSUE) {
    // 이미 refresh 중이면 → 큐에 넣고 대기
    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedRequests.push({ resolve, reject });
      }).then(() => instance(originRequest));
    }

    // refresh 시작
    isRefreshing = true;

    try {
      const refreshToken = tokenService.getRefreshToken();
      if (!refreshToken) {
        authService.logout();
        return Promise.reject(error);
      }

      // refresh API 호출
      const response = await instance.post(API_URL.REISSUE, {
        refreshToken,
      });

      const { data } = response;
      const { token: newAccessToken, refreshToken: newRefreshToken } = data;

      tokenService.saveAccessToken(newAccessToken);
      tokenService.saveRefreshToken(newRefreshToken);

      // 큐에 대기중이던 요청 실행
      failedRequests.forEach((prom) => prom.resolve());
      failedRequests = [];

      // 기존 요청 다시 실행
      return instance(originRequest);
    } catch (reissueError) {
      failedRequests.forEach((prom) => prom.reject(reissueError as AxiosError));
      failedRequests = [];

      authService.logout();

      return Promise.reject(reissueError);
    } finally {
      isRefreshing = false;
    }
  }

  return Promise.reject(error);
};
