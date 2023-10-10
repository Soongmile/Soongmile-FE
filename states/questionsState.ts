import { atom } from 'recoil';

interface QuestionType {
  id: number;
  title: string;
  content: string;
  tags: [];
  fields: [];
  postTime: string;
  hits: number;
  answerCount: number;
}

const questionsState = atom<QuestionType>({
  key: 'questionState',
  default: {
    id: 0,
    title: '제목을 입력해주세요',
    content: '내용내용내용내용',
    tags: [],
    fields: [],
    postTime: '',
    hits: 0,
    answerCount: 0,
  },
});

export default questionsState;
