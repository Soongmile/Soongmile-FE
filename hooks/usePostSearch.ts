import postSearch from '@/apis/postSearch';
import { AxiosError } from 'axios';
import { useMutation } from 'react-query';

const usePostSearch = () => {
  return useMutation(postSearch, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      const Error = error as AxiosError;
      console.log(Error);
    },
  });
};

export default usePostSearch;
