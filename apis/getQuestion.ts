import { GetQuestionResponse } from '@/types/question.type';
import client from './client';

const getQuestion = async (id: number): Promise<GetQuestionResponse> => {
  const response = await client.get(`/user/question/${id}`);
  return response.data;
};

export default getQuestion;
