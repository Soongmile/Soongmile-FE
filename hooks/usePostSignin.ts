import postSignin from '@/apis/postSignin';
import { AxiosError } from 'axios';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';

const usePostSignin = () => {
  const router = useRouter();
  return useMutation(postSignin, {
    onSuccess: (data) => {
      if (data.code === 200) {
        setCookie('token', data.result.token);
        setCookie('memberName', data.result.memberName);
        router.push(`/`);
        console.log(data);
      } else {
        alert(data.message);
      }
    },
    onError: (error) => {
      const Error = error as AxiosError;
      console.log(Error);
    },
  });
};

export default usePostSignin;
