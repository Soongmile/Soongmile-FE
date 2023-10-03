import getQuestion from '@/apis/getQuestion';
import { GetQuestionResponse } from '@/types/question.type';
import { useQuery } from 'react-query';

const useGetQuestionRead = (id: number) => {
  return useQuery<GetQuestionResponse>(['getQuestion', id], () => getQuestion(id));
};

export default useGetQuestionRead;
