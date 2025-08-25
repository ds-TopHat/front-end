import { useMutation, useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { getReviewNotes, postReviewPdf } from './axios';
import type { ReviewNotesResponseTypes } from '../types/api';

import { QUERY_KEYS } from '@/shared/constants/queryKey';

export const useGetReviewNotes = () => {
  return useQuery<ReviewNotesResponseTypes, AxiosError>({
    queryKey: [QUERY_KEYS.REVIEWNOTES],
    queryFn: getReviewNotes,
  });
};

export const usePostReviewPdf = () => {
  return useMutation<Blob, AxiosError, { problemImageUrls: string[] }>({
    mutationKey: [QUERY_KEYS.REVIEWNOTES],
    mutationFn: ({ problemImageUrls }) => postReviewPdf(problemImageUrls),
  });
};
