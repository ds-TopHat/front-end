import { useQuery, useMutation } from '@tanstack/react-query';
import { getPresignedUrl, postAiChat } from '@pages/solve/apis/axios';

import type { aiChatResponseTypes } from '../types/api';

import { QUERY_KEYS } from '@/shared/constants/queryKey';

export const usePresignedUrl = (count: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.S3_PRESIGNED, count],
    queryFn: () => getPresignedUrl(count),
    staleTime: 0,
    retry: 1,
    enabled: !!count,
  });
};

export const usePostAiChat = () => {
  return useMutation({
    mutationFn: (payload: aiChatResponseTypes) => postAiChat(payload),
  });
};
