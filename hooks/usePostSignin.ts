import postSignin from '@/apis/postSignin';
import authState from '@/states/authState';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { useRecoilState } from 'recoil';

const usePostSignin = () => {
  const router = useRouter();
  const [auth, useAuth] = useRecoilState(authState);
  return useMutation(postSignin, {
    onSuccess: (response) => {
      router.push(`/`);
      console.log(response);
      useAuth({ ...auth, token: response.result });
    },
    onError: (error) => {
      const Error = error as AxiosError;
      console.log(Error);
    },
  });
};

export default usePostSignin;
