import postBoard from '@/apis/postBoard';
import { BoardState } from '@/states/BoardState';
import { useMutation } from 'react-query';
import { useSetRecoilState } from 'recoil';

const usePostBoard = () => {
  const setCurrentBoard = useSetRecoilState(BoardState);

  return useMutation(postBoard, {
    onSuccess: (response) => {
      setCurrentBoard(response.result);
    },
  });
};

export default usePostBoard;
