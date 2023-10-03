import { AnswerWriteRequest, PostAnswerWriteResponse } from '@/types/answer.type';
import client from './client';

const postAnswer = async ({
  questionId,
  fileIds,
  content,
}: AnswerWriteRequest): Promise<PostAnswerWriteResponse> => {
  const response = await client.post(
    '/user/answer',
    {
      questionId,
      fileIds,
      content,
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

export default postAnswer;
