import { atom } from 'recoil';

interface FieldListType {
  [key: string]: boolean;
}

const fieldListState = atom<FieldListType>({
  key: 'fieldListState',
  default: {
    PRODUCT_MANAGER: true,
    DESIGN: true,
    MOBILE: true,
    BACKEND: true,
    FRONTEND: true,
    SCHOOL: true,
  },
});

export default fieldListState;
