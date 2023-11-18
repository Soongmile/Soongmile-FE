import postSearch from '@/apis/postSearch';
import { useMutation } from 'react-query';

const usePostSearch = () => {
  return useMutation(postSearch);
};

export default usePostSearch;
