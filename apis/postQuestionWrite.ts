import { PostQuestionWriteResponse, QuestionWriteRequest } from '@/types/question.type';
import client from './client';

const postQuestionWrite = async ({
  title,
  content,
  fileIds,
  field,
  tag,
}: QuestionWriteRequest): Promise<PostQuestionWriteResponse> => {
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
        Authorization:
          'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJha211QGdtYWlsLmNvbSIsInJvbGVzIjpbXSwiaWF0IjoxNjk1OTgyNTI1LCJleHAiOjE2OTYwNjg5MjV9.N5UWZD4xvULjHk7EaKblTM7kJwEdZrQ3cfII1jZMuAE',
      },
    },
  );
  return response.data;
};

export default postQuestionWrite;
