import { PostQuestionWriteResponse, QuestionWriteRequest } from '@/types/questionWrite.type';
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
          'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJha211QGdtYWlsLmNvbSIsInJvbGVzIjpbIlJPTEVfVVNFUiJdLCJpYXQiOjE2OTU2MjY5NzAsImV4cCI6MTY5NTcxMzM3MH0.Qp-tus5vuO7r1wTsIQJAp_T80zQePo96y_LLH7w89OU',
      },
    },
  );
  return response.data;
};

export default postQuestionWrite;
