import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { postSignup } from './axios';
import type { SignupResponseTypes, SignupTypes } from '../types/api';

import { QUERY_KEYS } from '@/shared/constants/queryKey';

export const usePostSignup = () => {
  return useMutation<SignupResponseTypes, AxiosError, SignupTypes>({
    mutationKey: [QUERY_KEYS.SIGNIN],
    mutationFn: postSignup,
    onError: (error: AxiosError) => {
      if (!error.response) {
        return;
      }
    },
  });
};
