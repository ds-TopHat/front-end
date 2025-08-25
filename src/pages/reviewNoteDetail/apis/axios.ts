import type { ReviewDetailResponseTypes } from '../types/api';

import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

export const getReviewDetail = async (
  questionId: number,
): Promise<ReviewDetailResponseTypes> => {
  const response = await instance.get<ReviewDetailResponseTypes>(
    `${API_URL.REVIEW_NOTES}/${questionId}`,
  );
  return response.data;
};
