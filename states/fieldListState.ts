import { atom } from 'recoil';

interface FieldListType {
  [key: string]: boolean;
}

const fieldListState = atom<FieldListType>({
  key: 'fieldListState',
  default: {
    PM: true,
    DESIGN: true,
    MOBILE: true,
    BE: true,
    FE: true,
    SCHOOL: true,
  },
});

export default fieldListState;
