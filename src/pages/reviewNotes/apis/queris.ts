import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { getReviewNotes } from './axios';
import type { ReviewNotesResponseTypes } from '../types/api';

import { QUERY_KEYS } from '@/shared/constants/queryKey';

export const useGetReviewNotes = () => {
  return useQuery<ReviewNotesResponseTypes, AxiosError>({
    queryKey: [QUERY_KEYS.REVIEWNOTES],
    queryFn: getReviewNotes,
  });
};
