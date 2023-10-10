import client from './client';

const postBoard = async () => {
  const response = await client.post('/board');
  return response.data;
};

export default postBoard;
