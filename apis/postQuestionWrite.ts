import { PostQuestionWriteResponse, QuestionWriteRequest } from '@/types/question.type';
import { getCookie } from 'cookies-next';
import client from './client';

const postQuestionWrite = async ({
  title,
  content,
  fileIds,
  field,
  tag,
}: QuestionWriteRequest): Promise<PostQuestionWriteResponse> => {
  const token = getCookie('token');

  const response = await client.post(
    '/user/question',
    {
      title,
      content,
      fileIds,
      field,
      tag,
    },
    {
      headers: {
        Authorization: token,
      },
    },
  );
  return response.data;
};

export default postQuestionWrite;
