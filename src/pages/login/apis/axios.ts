import type { LoginTypes } from '../types/api';

import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

export const postLogin = async ({ email, password }: LoginTypes) => {
  const response = await instance.post(API_URL.LOGIN, {
    email,
    password,
  });

  return response.data;
};
