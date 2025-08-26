export const uploadToPresignedUrl = async (
  uploadUrl: string,
  file: File | Blob,
) => {
  const res = await fetch(uploadUrl, {
    method: 'PUT',
    headers: { 'Content-Type': file.type },
    body: file,
  });
  if (!res.ok) {
    const msg = `S3 upload failed: ${res.status} ${res.statusText}`;
    throw new Error(msg);
  }
  return res;
};
