export const uploadToPresignedUrl = async (uploadUrl: string, file: File | Blob) => {
  return fetch(uploadUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': file.type,
    },
    body: file,
  });
};