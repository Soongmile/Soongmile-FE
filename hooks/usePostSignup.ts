import postSignUp from '@/apis/postSignup';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';

const usePostSignup = () => {
  const router = useRouter();
  return useMutation(postSignUp, {
    onSuccess: () => {
      router.push('/signin');
    },
    onError: () => {},
  });
};

export default usePostSignup;
