import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { postLogin } from './axios';
import type { LoginResponseTypes, LoginTypes } from '../types/api';

import { tokenService } from '@/shared/auth/services/tokenService';
import { QUERY_KEYS } from '@/shared/constants/queryKey';

export const usePostLogin = () => {
  return useMutation<LoginResponseTypes, AxiosError, LoginTypes>({
    mutationKey: [QUERY_KEYS.LOGIN],
    mutationFn: postLogin,
    onSuccess: (data) => {
      if (data.token) {
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
