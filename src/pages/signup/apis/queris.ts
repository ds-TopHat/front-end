import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { postSignup } from './axios';
import type { signupTypes } from '../types/api';

export const usePostSignup = () => {
  return useMutation({
    mutationFn: ({ email, password }: signupTypes) =>
      postSignup({
        email,
        password,
      }),
    onError: (error: AxiosError) => {
      if (!error.response) {
        return;
      }
    },
  });
};
