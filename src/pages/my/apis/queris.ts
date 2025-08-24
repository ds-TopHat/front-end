import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { getMe } from './axios';
import type { MeResponseTypes } from '../types/api';

import { QUERY_KEYS } from '@/shared/constants/queryKey';

export const useGetMe = () => {
  return useQuery<MeResponseTypes, AxiosError>({
    queryKey: [QUERY_KEYS.ME],
    queryFn: getMe,
  });
};
