import { useQuery, useMutation } from '@tanstack/react-query';
import { getPresignedUrl, requestSolution } from '@pages/solve/apis/axios';

import { QUERY_KEYS } from '@/shared/constants/queryKey';

export const usePresignedUrl = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.S3_PRESIGNED],
    queryFn: getPresignedUrl,
    staleTime: 0,
    retry: 1,
  });
};

export const useRequestSolution = () => {
  return useMutation({
    mutationFn: (imageUrl: string) => requestSolution(imageUrl),
  });
};
