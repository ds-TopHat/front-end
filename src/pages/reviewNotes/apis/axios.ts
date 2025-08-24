import type { ReviewNotesResponseTypes, ReviewPdfResponse } from '../types/api';

import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

export const getReviewNotes = async (): Promise<ReviewNotesResponseTypes> => {
  const response = await instance.get<ReviewNotesResponseTypes>(
    API_URL.REVIEW_NOTES,
  );
  return response.data;
};

export const postReviewPdf = async (
  problemImageUrls: string[],
): Promise<Blob> => {
  const response = await instance.post<Blob>(
    API_URL.REVIEW_NOTE_PDF,
    { problemImageUrls },
    { responseType: 'blob' },
  );
  return response.data;
};
