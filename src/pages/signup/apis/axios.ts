import type {
  RequestCodeTypes,
  SignupTypes,
  VerifyCodeTypes,
} from '../types/api';

import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

export const postSignup = async ({ email, password }: SignupTypes) => {
  const response = await instance.post(API_URL.SIGNUP, {
    email,
    password,
  });

  return response.data;
};

export const postVerifyCode = async ({ email, code }: VerifyCodeTypes) => {
  const response = await instance.post(API_URL.VERIFY_CODE, {
    email,
    code,
  });
  return response.data;
};

export const postRequestCode = async ({ email }: RequestCodeTypes) => {
  const response = await instance.post(API_URL.REQUEST_CODE, {
    email,
  });
  return response.data;
};
