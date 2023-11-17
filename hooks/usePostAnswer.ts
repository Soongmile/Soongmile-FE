import postAnswer from '@/apis/postAnswer';
import { queryClient } from '@/pages/_app';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';

const usePostAnswer = () => {
  const router = useRouter();
  return useMutation(postAnswer, {
    onSuccess: () => {
      queryClient.invalidateQueries(['getQuestion']);
      router.reload();
    },
    onError: (error) => {
      const Error = error as AxiosError;

      console.log(Error);
    },
  });
};

export default usePostAnswer;
