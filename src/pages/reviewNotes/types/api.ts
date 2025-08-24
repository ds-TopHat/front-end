export interface ReviewNote {
  questionId: number;
  problemImageUrl: string;
  unitType: string;
}

export type ReviewNotesResponseTypes = ReviewNote[];
