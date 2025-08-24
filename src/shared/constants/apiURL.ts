export const API_URL = {
  // wrong-note-controller
  REVIEW_NOTE_PDF: '/api/v0/wrong-notes/pdf',
  REVIEW_NOTES: 'api/v0/wrong-notes',
  REVIEW_NOTE_DETAIL: 'api/v0/wrong-notes/{questionId}',

  //user-controller
  SIGNUP: '/api/v0/users/signup',
  LOGIN: '/api/v0/users/login',
  USER_DELETE: '/api/v0/users/delete',

  // email-verification-controller
  VERIFY_CODE: 'api/v0/email-auth/verify-code',
  REQUEST_CODE: 'api/v0/email-auth/request-code',

  //ai-controller
  AI_CHAT: '/api/ai/chat',

  // s-3-controller
  S3_PRESIGNED: '/s3/presigned',

  // my-page-controller
  ME: '/api/v0/users/me',
};
