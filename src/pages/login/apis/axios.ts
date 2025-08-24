import type { loginTypes } from '../types/loginTypes';

import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

export const postLogin = async ({ email, password }: loginTypes) => {
  const response = await instance.post(API_URL.LOGIN, {
    email,
    password,
  });

  return response.data;
};
