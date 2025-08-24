import type { ReviewNotesResponseTypes } from '../types/api';

import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

export const getReviewNotes = async (): Promise<ReviewNotesResponseTypes> => {
  const response = await instance.get<ReviewNotesResponseTypes>(
    API_URL.REVIEW_NOTES,
  );
  return response.data;
};
