import type { MeResponseTypes } from '../types/api';

import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

export const getMe = async (): Promise<MeResponseTypes> => {
  const response = await instance.get<MeResponseTypes>(API_URL.ME);
  return response.data;
};
