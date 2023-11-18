import postAnswer from '@/apis/postAnswer';
import { queryClient } from '@/pages/_app';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';

const usePostAnswer = () => {
  const router = useRouter();
  return useMutation(postAnswer, {
    onSuccess: () => {
      queryClient.invalidateQueries(['getQuestion']);
      router.reload();
    },
  });
};

export default usePostAnswer;
