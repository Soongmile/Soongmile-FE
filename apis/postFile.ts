import client from './client';

const postFile = async (blob: Blob) => {
  const formData = new FormData();

  formData.append('file', blob, blob.name);
  formData.append('type', blob.type);

  const response = await client.post('/test/file', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data.filePath;
};

export default postFile;
