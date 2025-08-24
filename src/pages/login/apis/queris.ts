import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { postLogin } from './axios';
import type { loginTypes } from '../types/loginTypes';

import { tokenService } from '@/shared/auth/services/tokenService';

export const usePostLogin = () => {
  return useMutation({
    mutationFn: ({ email, password }: loginTypes) =>
      postLogin({ email, password }),
    onSuccess: (data) => {
      if (data?.token) {
        tokenService.saveAccessToken(data.token);
      }
    },
    onError: (error: AxiosError) => {
      if (!error.response) {
        return;
      }
    },
  });
};
