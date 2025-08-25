import type { MeResponseTypes } from '../types/api';

import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

export const getMe = async (): Promise<MeResponseTypes> => {
  const response = await instance.get<MeResponseTypes>(API_URL.ME);
  return response.data;
};

export const deleteMe = async (): Promise<string> => {
  const response = await instance.delete(API_URL.USER_DELETE);
  return response.data;
};
