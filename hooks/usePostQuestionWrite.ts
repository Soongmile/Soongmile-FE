import postQuestionWrite from '@/apis/postQuestionWrite';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';

const usePostQuestionWrite = () => {
  const router = useRouter();
  return useMutation(postQuestionWrite, {
    onSuccess: () => {
      router.push('/');
    },
    onError: (error) => {
      const Error = error as AxiosError;

      console.log(Error);
    },
  });
};

export default usePostQuestionWrite;
