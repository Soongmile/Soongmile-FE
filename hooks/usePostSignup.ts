import postSignUp from '@/apis/postSignup';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';

const usePostSignup = () => {
  const router = useRouter();
  return useMutation(postSignUp, {
    onSuccess: () => {
      router.push('/signin');
    },
    onError: (error) => {
      const Error = error as AxiosError;

      console.log(Error);
    },
  });
};

export default usePostSignup;
