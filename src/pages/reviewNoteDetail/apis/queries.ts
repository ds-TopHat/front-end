import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { getReviewDetail } from './axios';
import type { ReviewDetailResponseTypes } from '../types/api';

import { QUERY_KEYS } from '@/shared/constants/queryKey';

export const useGetReviewDetail = (questionId: number) => {
  return useQuery<ReviewDetailResponseTypes, AxiosError>({
    queryKey: [QUERY_KEYS.REVIEWNOTES, questionId],
    queryFn: () => getReviewDetail(questionId),
    enabled: Number.isInteger(questionId),
  });
};
