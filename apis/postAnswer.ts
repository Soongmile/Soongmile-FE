import { AnswerWriteRequest, PostAnswerWriteResponse } from '@/types/answer.type';
import { getCookie } from 'cookies-next';
import client from './client';

const postAnswer = async ({
  questionId,
  fileIds,
  content,
}: AnswerWriteRequest): Promise<PostAnswerWriteResponse> => {
  const token = getCookie('token');

  const response = await client.post(
    '/user/answer',
    {
      questionId,
      fileIds,
      content,
    },
    {
      headers: {
        Authorization: token,
      },
    },
  );
  return response.data;
};

export default postAnswer;
