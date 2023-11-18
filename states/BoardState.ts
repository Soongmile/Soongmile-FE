import { atom } from 'recoil';

export interface QuestionType {
  id: number;
  title: string;
  content: string;
  tags: string[];
  fields: string[];
  postTime: string;
  hits: number;
  answerCount: number;
}

export const BoardState = atom<QuestionType[]>({
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
