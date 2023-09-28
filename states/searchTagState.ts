import { atom } from 'recoil';

const searchTagState = atom<string[]>({ key: 'searchTagState', default: [] });

export default searchTagState;
