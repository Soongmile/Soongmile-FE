import { atom } from 'recoil';

interface QuestionType {
  id: number;
  title: string;
  content: string;
  tags: [];
  fields: string[];
  postTime: string;
  hits: number;
  answerCount: number;
}

const BoardState = atom<QuestionType[]>({
  key: 'BoardState',
  default: [
    {
      id: 0,
      title: '',
      content: '',
      tags: [],
      fields: [],
      postTime: '',
      hits: 0,
      answerCount: 0,
    },
  ],
});

export default BoardState;
