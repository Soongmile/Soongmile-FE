import postBoard from '@/apis/postBoard';
import BoardState from '@/states/BoardState';
import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { useRecoilState } from 'recoil';

const usePostBoard = () => {
  const [currentBoard, setCurrentBoard] = useRecoilState(BoardState);

  return useMutation(postBoard, {
    onSuccess: (response) => {
      setCurrentBoard(response.result);
    },
    onError: (error) => {
      const Error = error as AxiosError;

      console.log(Error);
    },
  });
};

export default usePostBoard;
