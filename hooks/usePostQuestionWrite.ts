import postQuestionWrite from '@/apis/postQuestionWrite';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';

const usePostQuestionWrite = () => {
  const router = useRouter();
  return useMutation(postQuestionWrite, {
    onSuccess: () => {
      router.push('/');
    },
  });
};

export default usePostQuestionWrite;
