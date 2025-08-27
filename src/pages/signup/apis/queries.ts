import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { postRequestCode, postSignup, postVerifyCode } from './axios';
import type {
  RequestCodeResponseTypes,
  RequestCodeTypes,
  SignupResponseTypes,
  SignupTypes,
  VerifyCodeResponseTypes,
  VerifyCodeTypes,
} from '../types/api';

import { QUERY_KEYS } from '@/shared/constants/queryKey';

export const usePostSignup = () => {
  return useMutation<SignupResponseTypes, AxiosError, SignupTypes>({
    mutationKey: [QUERY_KEYS.SIGNUP],
    mutationFn: postSignup,
    onError: (error: AxiosError) => {
      if (!error.response) {
        return;
      }
    },
  });
};

export const usePostVerifyCode = () => {
  return useMutation<VerifyCodeResponseTypes, AxiosError, VerifyCodeTypes>({
    mutationKey: [QUERY_KEYS.VERIFY_CODE],
    mutationFn: postVerifyCode,
    onError: (error: AxiosError) => {
      if (!error.response) {
        return;
      }
    },
  });
};

export const usePostRequestCode = () => {
  return useMutation<RequestCodeResponseTypes, AxiosError, RequestCodeTypes>({
    mutationKey: [QUERY_KEYS.REQUEST_CODE],
    mutationFn: postRequestCode,
    onError: (error: AxiosError) => {
      if (!error.response) {
        return;
      }
    },
  });
};
