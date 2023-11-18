import postBoard from '@/apis/postBoard';
import { BoardState } from '@/states/BoardState';
import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { useSetRecoilState } from 'recoil';

const usePostBoard = () => {
  const setCurrentBoard = useSetRecoilState(BoardState);

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
