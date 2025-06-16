import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

export const getPresignedUrl = async (): Promise<{
  uploadUrl: string;
  downloadUrl: string;
}> => {
  const { data } = await instance.get(`${API_URL.S3_PRESIGNED}`);
  return data;
};

export const requestSolution = async (downloadUrl: string) => {
  const response = await instance.post(`${API_URL.AI_CHAT}`, {
    imageUrl: downloadUrl,
  });
  return response.data;
};
