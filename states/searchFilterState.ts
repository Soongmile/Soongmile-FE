import { atom } from 'recoil';

const searchFilterState = atom<'제목' | '내용' | '제목+내용'>({
  key: 'searchFilterState',
  default: '제목',
});

export default searchFilterState;
