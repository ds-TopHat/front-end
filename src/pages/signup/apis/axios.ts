import type { signupTypes } from '../types/api';

import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

export const postSignup = async ({ email, password }: signupTypes) => {
  const response = await instance.post(API_URL.SIGNUP, {
    email,
    password,
  });

  return response.data;
};
