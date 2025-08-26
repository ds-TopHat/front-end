import type { aiChatResponseTypes } from '../types/api';

import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

export const getPresignedUrl = async (
  count: number = 1,
): Promise<{
  uploadUrls: string[];
  downloadUrls: string[];
  s3Key: string;
}> => {
  const { data } = await instance.get(`/s3/presigned?count=${count}`);
  return data;
};

export const postAiChat = async ({
  downloadUrls,
  s3Key,
}: aiChatResponseTypes) => {
  const response = await instance.post(`${API_URL.AI_CHAT}`, {
    downloadUrls,
    s3Key,
  });
  return response.data;
};
