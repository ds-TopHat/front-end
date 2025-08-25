import { useMutation, useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { deleteMe, getMe } from './axios';
import type { MeResponseTypes } from '../types/api';

import { QUERY_KEYS } from '@/shared/constants/queryKey';

export const useGetMe = () => {
  return useQuery<MeResponseTypes, AxiosError>({
    queryKey: [QUERY_KEYS.ME],
    queryFn: getMe,
  });
};

export const useDeleteMe = () => {
  return useMutation<string, AxiosError>({
    mutationKey: [QUERY_KEYS.DELETE_ME],
    mutationFn: deleteMe,
  });
};
